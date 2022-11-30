import {formatJobList, formatFetchParams} from "./"
import { rest } from 'msw'
import { setupServer } from 'msw/node'
import { waitForElementToBeRemoved, screen } from '@testing-library/react'
import { render } from '../../utils/test'
import React from "react";
import Results from "./index";

test('should multiply by 3', () => {
    expect(formatJobList('item2',3,1)) === 'item2,'
})
describe('Jest test function formatJobList', ()=>{
    it('formatJobList should contains ","',()=>{
        const expectState = 'item2,'
        // expect(formatJobList('item2',3,1)).toEqual(expectState)
        expect(formatJobList('item2',3,1)).toBe(expectState)
    })

    it('formatJobList should not contains ","',()=>{
        const expectState = 'item3'
        expect(formatJobList('item3',3,2)).toEqual(expectState)
    })
})


describe('Jest test function formatFetchParams', ()=>{

    it('right format for one param',()=>{
        const expectState = 'a1=answer1'
        expect(formatFetchParams({1:'answer1'})).toEqual(expectState)
    })
    it('right format for multiple param',()=>{
        const expectState = 'a1=answer1&a2=answer2&a3=answer3'
        expect(formatFetchParams({1:'answer1',2:'answer2',3:'answer3'})).toEqual(expectState)
    })

})

const resultsMockedData = [
    {
        title: 'seo',
        description: `Le SEO est en charge du référencement web d'une page`,
    },
    {
        title: 'frontend',
        description: `Le développeur ou la développeuse frontend se charge de l'interface : interactions avec l'utilisateur, style, etc.`,
    },
]

const server = setupServer(
    rest.get('http://localhost:8000/results', (req, res, ctx) => {
        return res(ctx.json({ resultsData: resultsMockedData }))
    })
)

beforeAll(() => server.listen())
afterEach(() => server.resetHandlers())
afterAll(() => server.close())

describe('The Results component', () => {
    test('should display the results after the data is loaded', async () => {
        render(<Results />)
        await waitForElementToBeRemoved(() => screen.getByTestId('loader'))
        const jobTitleElements = screen.getAllByTestId('job-title')
        expect(jobTitleElements[0].textContent).toBe('seo')
        expect(jobTitleElements.length).toBe(2)
        const jobDescriptionElements = screen.getAllByTestId('job-description')
        expect(jobDescriptionElements[1].textContent).toBe(resultsMockedData[1].description)
        expect(jobDescriptionElements.length).toBe(2)
    })
})