import {Loader} from "../../utils/style/Atoms";
import {useFetch,useFetch2, useTheme} from "../../utils/hooks";
import {CardsContainer, LoaderWrapper, PageSubtitle, PageTitle} from "./style"
import Card from "../../components/Card";
import {Link} from "react-router-dom";

function Freelances() {
    const {theme} = useTheme()
    // const { isLoading,data, error} = useFetch(`http://localhost:8000/freelances`)
    // const freelancersList = data?.freelancersList
    //other method
    const url = process.env.REACT_APP_API_URL
    const { isLoading,data, error} = useFetch2(url+`/freelances`,'freelancersList')
    const freelancersList = data
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
                        <Link key={`freelance-${profile.id}`} to={`/profile/${profile.id}`}>
                            <Card
                                key={`${profile['name']}-${index}`}
                                label={profile['job']}
                                title={profile['name']}
                                picture={profile['picture']}
                                theme={theme}
                            />
                        </Link>
                    ))}
                </CardsContainer>
            )}

        </div>
    )
}

export default Freelances