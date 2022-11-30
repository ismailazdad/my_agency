import Card from './'
import {fireEvent, screen} from '@testing-library/react'
import {render} from '../../utils/test'

describe("Card test", () => {
    test('Should render image and title', function () {
        render(
            <Card
                title="TESTISMA Potter"
                label="test label"
                picture="/profile.png"
            />
        )
        // screen.debug()
        const cardImage = screen.getByRole('img')
        expect(cardImage.src).toBe('http://localhost/profile.png')
        const cardTitle = screen.getByText(/TESTISMA/i)
        expect(cardTitle.textContent).toBe('TESTISMA Potter')
    })

    test("Should add ⭐️ around title", function () {
        render(
            <Card
                title="TESTISMA Potter"
                label="test label"
                picture="/profile.png"
            />
        )
        const cardTitle = screen.getByText(/TESTISMA/i)
        const parentNode = cardTitle.closest('div')
        fireEvent.click(parentNode)
        expect(cardTitle.textContent).toBe('⭐️TESTISMA Potter⭐️')
    })
})
