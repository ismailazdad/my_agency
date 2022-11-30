import PropTypes from 'prop-types'
import DefaultPicture from '../../assets/profile.png'
import React, {useState} from "react";
import {useTheme} from "../../utils/hooks"
import {CardImage, CardLabel, CardTitle, CardWrapper} from "./style"


function Card({label, title, picture}) {
    const {theme} = useTheme()
    const [isFavorite, setIsFavorite] = useState(false)
    const star = isFavorite ? '⭐️' : ''
    return (
        <CardWrapper theme={theme} onClick={() => setIsFavorite(!isFavorite)}>
            <CardLabel theme={theme}>{label}</CardLabel>
            <CardImage src={picture} alt="freelance"/>
            <CardTitle theme={theme}>{star}{title}{star}</CardTitle>
        </CardWrapper>
    )
}

Card.propTypes = {
    label: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    picture: PropTypes.string.isRequired
}

Card.defaultProps = {
    title: "default title",
    label: "default label",
    picture: DefaultPicture
}

export default Card