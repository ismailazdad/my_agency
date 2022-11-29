import React, {useContext} from 'react'
import {Link, useParams} from 'react-router-dom'
import styled from 'styled-components'
import colors from '../../utils/style/colors'
import {Loader} from '../../utils/style/Atoms'
import {SurveyContext} from '../../utils/context'
import {useFetch,useTheme} from '../../utils/hooks'
import { StyledLink } from '../../utils/style/Atoms'

const SurveyContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const QuestionTitle = styled.h2`
  text-decoration: underline;
  text-decoration-color: ${colors.primary};
  color: ${({ theme }) => (theme === 'light' ? '#000000' : '#ffffff')};
`

const QuestionContent = styled.span`
  margin: 30px;
  color: ${({ theme }) => (theme === 'light' ? '#000000' : '#ffffff')};
`

const LinkWrapper = styled.div`
  padding-top: 30px;
    & a:first-of-type {
        margin-right: 20px;
      }
`

const ReplyBox = styled.button`
  border: none;
  height: 100px;
  width: 300px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme === 'light' ? colors.backgroundLight : colors.backgroundDark};
  color: ${({ theme }) => (theme === 'light' ? colors.primary : colors.secondary)};
  border-radius: 30px;
  cursor: pointer;
  box-shadow: ${(props) => props.isSelected ? `0px 0px 0px 2px ${colors.primary} inset` : 'none'};
  &:first-child {
    margin-right: 15px;
  }
  &:last-of-type {
    margin-left: 15px;
  }
`

const ReplyWrapper = styled.div`
  display: flex;
  flex-direction: row;
`

function Survey() {
    const {questionNumber} = useParams()
    const questionNumberInt = parseInt(questionNumber)
    const prevQuestionNumber = questionNumberInt === 1 ? 1 : questionNumberInt - 1
    const nextQuestionNumber = questionNumberInt + 1
    const { theme } = useTheme()
    const { saveAnswers, answers } = useContext(SurveyContext)
    function saveReply(answer) {
        saveAnswers({ [questionNumber]: answer })
    }
    const {data,isLoading,error} = useFetch(`http://localhost:8000/survey`)
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
                <StyledLink $theme={theme}  to={`/survey/${prevQuestionNumber}`}>Précédent</StyledLink>
                {surveyData && surveyData[questionNumberInt + 1] ? (
                    <StyledLink $theme={theme}  to={`/survey/${nextQuestionNumber}`}>Suivant</StyledLink>
                ) : (
                    <StyledLink $theme={theme}  to="/results">Résultats</StyledLink>
                )}
            </LinkWrapper>
        </SurveyContainer>
    )
}

export default Survey