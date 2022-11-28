import Card from '../../components/Card'
import styled from 'styled-components'
import colors from '../../utils/style/colors'
import Picture from '../../assets/profile1.png'
import Picture2 from '../../assets/profile2.png'
import Picture3 from '../../assets/profile3.png'
const CardsContainer = styled.div`
  display: grid;
  gap: 24px;
  grid-template-rows: 350px 350px;
  grid-template-columns: repeat(2, 1fr);
  align-items: center;
  justify-items: center;
`

const PageTitle = styled.h1`
          font-size: 30px;
          color: black;
          text-align: center;
          padding-bottom: 30px;
`

const PageSubtitle = styled.h2`
  font-size: 20px;
  color: ${colors.secondary};
  font-weight: 300;
  text-align: center;
  padding-bottom: 30px;
`

const freelanceProfiles = [
    {
        name: 'Jane Doe',
        jobTitle: 'Devops',
        picture : Picture2

    },
    {
        name: 'John Doe',
        jobTitle: 'Developpeur frontend',
        picture : Picture

    },
    {
        name: 'Jeanne Biche',
        jobTitle: 'Développeuse Fullstack',
    },
    {
        name: 'Jannis joplin',
        jobTitle: 'Développeuse back-end',
        picture : Picture3
    },
]

function Freelances() {
    return (
        <div>
            <PageTitle>Trouvez votre prestataire</PageTitle>
            <PageSubtitle>
                Chez Shiny nous réunissons les meilleurs profils pour vous.
            </PageSubtitle>
            <CardsContainer>
                {freelanceProfiles.map((profile, index) => (
                    <Card
                        key={`${profile.name}-${index}`}
                        label={profile.jobTitle}
                        title={profile.name}
                        picture={profile.picture}
                    />
                ))}
            </CardsContainer>
        </div>
    )
}

export default Freelances