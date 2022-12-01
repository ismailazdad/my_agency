import {useContext} from 'react'
import {SurveyContext} from '../../utils/context'
import {useFetch, useFetch2, useTheme} from '../../utils/hooks'
import {Loader, StyledLink} from '../../utils/style/Atoms'
import {LoaderWrapper, ResultsContainer, ResultsTitle, JobTitle, DescriptionWrapper,JobDescription} from "./style"
import EmptyList from '../../components/EmptyList'

export function formatFetchParams(answers) {
    const answerNumbers = Object.keys(answers)
    return answerNumbers.reduce((previousParams, answerNumber, index) => {
        const isFirstParam = index === 0
        const separator = isFirstParam ? '' : '&'
        return `${previousParams}${separator}a${answerNumber}=${answers[answerNumber]}`
    }, '')
}

export function formatJobList(title, listLength, index) {
    if (index === listLength - 1) {
        return title
    }
    return `${title},`
}

function Results() {
    const {theme} = useTheme()
    const {answers} = useContext(SurveyContext)
    const fetchParams = formatFetchParams(answers)

    // const {data, isLoading, error} = useFetch(`http://localhost:8000/results?${fetchParams}`)
    // const resultsData = data?.resultsData
    const url = process.env.REACT_APP_API_URL
    const { isLoading,data, error} = useFetch2(url+`/results?${fetchParams}`,'resultsData')
    const resultsData = data

    if (error) {
        return <span>Il y a un problème</span>
    }


    if (resultsData?.length < 1) {
        return <EmptyList theme={theme} />
    }
    return isLoading ? (
        <LoaderWrapper data-testid="loader">
            <Loader/>
        </LoaderWrapper>
    ) : (
        <ResultsContainer theme={theme}>
            {resultsData.length === 0 ? (
                'Pas de resultat'
            ) : (
                <ResultsTitle theme={theme}>
                    Les compétences dont vous avez besoin :
                    {resultsData && resultsData.map((result, index) => (
                        <JobTitle
                            key={`result-title-${index}-${result.title}`}
                            theme={theme}
                        >
                            {/*{result.title}*/}
                            {/*{index === resultsData.length - 1 ? '' : ','}*/}
                            {formatJobList(result.title, resultsData.length, index)}
                        </JobTitle>
                    ))}
                </ResultsTitle>)}
            <StyledLink $isFullLink to="/freelances">
                Découvrez nos profils
            </StyledLink>
            <DescriptionWrapper>
                {resultsData &&
                resultsData.map((result, index) => (
                    <JobDescription
                        theme={theme}
                        key={`result-detail-${index}-${result.title}`}
                    >
                        <JobTitle theme={theme} data-testid="job-title">{result.title}</JobTitle>
                        <p data-testid="job-description">{result.description}</p>
                    </JobDescription>
                ))}
            </DescriptionWrapper>
        </ResultsContainer>
    )
}

export default Results