import styled from "styled-components";
import colors from "../../utils/style/colors";

export const CardsContainer = styled.div`
  display: grid;
  gap: 24px;
  grid-template-rows: 350px 350px;
  grid-template-columns: repeat(2, 1fr);
  align-items: center;
  justify-items: center;
`

export const PageTitle = styled.h1`
  font-size: 30px;
  color: ${({ theme }) => (theme === 'light' ? '#000000' : '#ffffff')};
  text-align: center;
  padding-bottom: 30px;
`

export const PageSubtitle = styled.h2`
  font-size: 20px;
  color: ${colors.secondary};
  font-weight: 300;
  text-align: center;
  padding-bottom: 30px;
  color: ${({ theme }) => (theme === 'light' ? '#000000' : '#ffffff')};
`

export const LoaderWrapper = styled.div`
  display: flex;
  justify-content: center;
`