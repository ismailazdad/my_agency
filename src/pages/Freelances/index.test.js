import {rest} from "msw"
import '@testing-library/jest-dom/extend-expect'
import {setupServer} from "msw/node"
import { screen, waitFor, waitForElementToBeRemoved} from "@testing-library/react"
import Freelances from "./"
import React from "react";
import { render } from '../../utils/test'
const url = process.env.REACT_APP_API_URL
const url_local = process.env.REACT_APP_API_URL_local
const freelancersMockedData = [
    {
        name: 'Harry Potter',
        job: 'Magicien frontend',
        picture: '',
    },
    {
        name: 'Hermione Granger',
        job: 'Magicienne fullstack',
        picture: '',
    },
]
const server = setupServer(
    // On précise ici l'url qu'il faudra "intercepter"
    rest.get(url+'/freelances', (req, res, ctx) => {
        // Là on va pouvoir passer les datas mockées dans ce qui est retourné en json
        return res(ctx.json({freelancersList: freelancersMockedData}))
    })
)


// Active la simulation d'API avant les tests depuis server
beforeAll(() => server.listen())
// // Réinitialise tout ce qu'on aurait pu ajouter en termes de durée pour nos tests avant chaque test
afterEach(() => server.resetHandlers())
// // Ferme la simulation d'API une fois que les tests sont finis
afterAll(() => server.close())


test('test simple rendering', async () => {
    render(
        <Freelances/>)
    expect(screen.getByTestId('loader')).toBeTruthy()
    await waitFor(() => {
        expect(screen.getByText('Harry Potter')).toBeTruthy()
        expect(screen.getByText('Hermione Granger')).toBeTruthy()
        // screen.debug()
    })
})

test('test simple rendering with waitForElementToBeRemoved ', async () => {
    render(
        <Freelances/>)
    expect(screen.getByTestId('loader')).toBeTruthy()
    //attendre que l element dom dispraisse
    await waitForElementToBeRemoved(() => screen.getByTestId('loader'))
    expect(screen.getByText('Harry Potter')).toBeTruthy()
    expect(screen.getByText('Hermione Granger')).toBeTruthy()
})