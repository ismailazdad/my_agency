import PropTypes from 'prop-types'
import DefaultPicture from '../../assets/profile.png'
import React, {Component, useState} from "react";
import {useTheme} from "../../utils/hooks"
import {CardImage, CardLabel, CardTitle, CardWrapper} from "./style"

//syntax class example
class Card extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isFavorite: false,
        }
    }

    // setFavorite = () => {
    //     this.setState({ isFavorite: !this.state.isFavorite })
    // }

    render() {
        const url = process.env.REACT_APP_API_URL
        const url_local = process.env.REACT_APP_API_URL_local
        const { theme, picture, label, title } = this.props
        // picture =picture.replace(url_local,url)
        // const { isFavorite } = this.state
        // const star = isFavorite ? '⭐️' : ''

        return (
            // <CardWrapper theme={theme} onClick={this.setFavorite}>
            <CardWrapper theme={theme} >
                <CardLabel theme={theme}>{label}</CardLabel>
                <CardImage src={picture.replace(url_local,url)} alt="freelance" />
                <CardTitle theme={theme}>
                     {title}
                </CardTitle>
            </CardWrapper>
        )
    }
}
//syntax react
// function Card({label, title, picture}) {
//     const {theme} = useTheme()
//     const [isFavorite, setIsFavorite] = useState(false)
//     const star = isFavorite ? '⭐️' : ''
//     return (
//         <CardWrapper theme={theme} onClick={() => setIsFavorite(!isFavorite)}>
//             <CardLabel theme={theme}>{label}</CardLabel>
//             <CardImage src={picture} alt="freelance"/>
//             <CardTitle theme={theme}>{star}{title}{star}</CardTitle>
//         </CardWrapper>
//     )
// }

Card.propTypes = {
    label: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    picture: PropTypes.string.isRequired,
    theme: PropTypes.string.isRequired
}

Card.defaultProps = {
    title: "default title",
    label: "default label",
    picture: DefaultPicture,
    theme : 'light'
}

export default Card