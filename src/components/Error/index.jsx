import ErrorPage from '../../assets/error.svg'
import {useTheme} from "../../utils/hooks"
import {ErrorSubtitle, ErrorTitle, ErrorWrapper, Illustration} from "./style"
import React from "react";

function Error() {
    const {theme} = useTheme()
    return (
        <ErrorWrapper id='test' theme={theme}>
            <ErrorTitle theme={theme}>Oups...</ErrorTitle>
            <Illustration src={ErrorPage}/>
            <ErrorSubtitle theme={theme}>
                Il semblerait que la page que vous cherchez n’existe pas
            </ErrorSubtitle>
        </ErrorWrapper>
    )
}

export default Error