import {screen} from "@testing-library/react"
import Home from "./"
import {render} from '../../utils/test'

describe("test home component", () => {
    it('should render conrrectly', () => {
        render(
            <Home/>
        )
        expect(
            //test level 2 , car balise h2
            screen.getByRole('heading', {
                level: 2,
                text: "Repérez vos besoins, on s’occupe du reste, avec les meilleurs talents"
            })
        )
    })
})