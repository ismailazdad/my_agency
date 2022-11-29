import {createGlobalStyle} from 'styled-components'
import {useTheme} from "../hooks"
import React from "react";

const StyledGlobalStyle = createGlobalStyle`
    * {
      font-family: 'Trebuchet MS', Helvetica, sans-serif;
    }
    body {
        background-color: ${(props) =>
             props.theme ? '#2F2E41' : 'white'};
        margin: 0;
    }
`

function GlobalStyle() {
    // const {theme} = useContext(ThemeContext)
    const {theme} = useTheme()
    return <StyledGlobalStyle theme={theme === 'dark'}/>
}

export default GlobalStyle
