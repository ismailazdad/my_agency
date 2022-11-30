import Card from '../../components/Card'
import {Loader} from "../../utils/style/Atoms";
import {useFetch, useTheme} from "../../utils/hooks";
import {PageTitle, PageSubtitle, LoaderWrapper, CardsContainer} from "./style"

function Freelances() {
    const {theme} = useTheme()
    const {data, isLoading, error} = useFetch(`http://localhost:8000/freelances`)
    const freelancersList = data?.freelancersList
    if (error) {
        return <span>Oups il y a eu un problème</span>
    }
    return (
        <div>
            <PageTitle theme={theme}>Trouvez votre prestataire</PageTitle>
            <PageSubtitle theme={theme}>
                Chez Shiny nous réunissons les meilleurs profils pour vous.
            </PageSubtitle>
            {isLoading ? (
                <LoaderWrapper theme={theme} data-testid='loader'>
                    <Loader/>
                </LoaderWrapper>
            ) : (
                <CardsContainer>
                    {freelancersList.map((profile, index) => (
                        <Card
                            key={`${profile['name']}-${index}`}
                            label={profile['job']}
                            title={profile['name']}
                            picture={profile['picture']}
                        />
                    ))}
                </CardsContainer>
            )}

        </div>
    )
}

export default Freelances