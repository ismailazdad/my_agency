import {StyledLink} from '../../utils/style/Atoms'
import {useTheme} from '../../utils/hooks'
import HomeIllustration from '../../assets/home-illustration.svg'
import {HomerContainer, HomeWrapper, Illustration, LeftCol, StyledTitle} from "./style"

function Home() {
    const {theme} = useTheme()
    return (
        <HomeWrapper>
            <HomerContainer theme={theme}>
                <LeftCol>
                    <StyledTitle theme={theme}>
                        Repérez vos besoins, on s’occupe du reste, avec les meilleurs talents
                    </StyledTitle>
                    <StyledLink to="/survey/1" $isFullLink>
                        Faire le test
                    </StyledLink>
                </LeftCol>
                <Illustration src={HomeIllustration}/>
            </HomerContainer>
        </HomeWrapper>
    )
}

export default Home