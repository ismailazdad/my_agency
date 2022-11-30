import styled from "styled-components";
import colors from "../../utils/style/colors";

export const ErrorWrapper = styled.div`
  margin: 30px;
  display: flex;
  flex-direction: column;
  background-color: ${({theme}) => theme === 'light' ? colors.backgroundLight : colors.backgroundDark};
  align-items: center;
`

export const ErrorTitle = styled.h1`
  color: ${({ theme }) => (theme === 'light' ? '#000000' : '#ffffff')};
  font-weight: 300;
`

export const ErrorSubtitle = styled.h2`
  font-weight: 300;
  color: ${({ theme }) => (theme === 'light' ? colors.secondary : '#ffffff')};
`

export const Illustration = styled.img`
  max-width: 800px;
`