import React, {useContext} from 'react'
import {useParams} from 'react-router-dom'
import {Loader, StyledLink} from '../../utils/style/Atoms'
import {SurveyContext} from '../../utils/context'
import {useFetch, useTheme} from '../../utils/hooks'
import {SurveyContainer,QuestionTitle,ReplyWrapper,QuestionContent,ReplyBox,LinkWrapper} from "./style"


function Survey() {
    const {questionNumber} = useParams()
    const questionNumberInt = parseInt(questionNumber)
    const prevQuestionNumber = questionNumberInt === 1 ? 1 : questionNumberInt - 1
    const nextQuestionNumber = questionNumberInt + 1
    const {theme} = useTheme()
    const {saveAnswers, answers} = useContext(SurveyContext)

    function saveReply(answer) {
        saveAnswers({[questionNumber]: answer})
    }

    const {data, isLoading, error} = useFetch(`http://localhost:8000/survey`)
    const surveyData = data?.surveyData
    if (error) {
        return <span>Oups il y a eu un problème</span>
    }

    return (
        <SurveyContainer>
            <QuestionTitle theme={theme}>Question {questionNumber}</QuestionTitle>
            {isLoading ? (
                <Loader/>
            ) : (
                <QuestionContent theme={theme}>{surveyData && surveyData[questionNumber]}</QuestionContent>
            )}
            {answers && (
                <ReplyWrapper>
                    <ReplyBox
                        onClick={() => saveReply(true)}
                        isSelected={answers[questionNumber] === true}
                        theme={theme}
                    >
                        Oui
                    </ReplyBox>
                    <ReplyBox
                        onClick={() => saveReply(false)}
                        isSelected={answers[questionNumber] === false}
                        theme={theme}
                    >
                        Non
                    </ReplyBox>
                </ReplyWrapper>
            )}
            <LinkWrapper>
                <StyledLink $theme={theme} to={`/survey/${prevQuestionNumber}`}>Précédent</StyledLink>
                {surveyData && surveyData[questionNumberInt + 1] ? (
                    <StyledLink $theme={theme} to={`/survey/${nextQuestionNumber}`}>Suivant</StyledLink>
                ) : (
                    <StyledLink $theme={theme} to="/results">Résultats</StyledLink>
                )}
            </LinkWrapper>
        </SurveyContainer>
    )
}

export default Survey