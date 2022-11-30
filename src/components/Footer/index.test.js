import Footer from "./"
import {fireEvent, screen} from "@testing-library/react"
import {render} from '../../utils/test'

describe("Footer", () => {
    it('should render without crash', function () {
        render(
            <Footer/>)
        const nightModeButton = screen.getByRole('button')
        expect(nightModeButton.textContent).toBe('Changer de mode : ☀️')
        fireEvent.click(nightModeButton)
        //normalement nous voyons la lune
        expect(nightModeButton.textContent).toBe('Changer de mode : 🌙')
    });
})