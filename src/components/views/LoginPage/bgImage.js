import React from 'react'
import Image from '../../../Content/images/blurred-merc.jpg'
import './bgImage.css'

export default class bgImage extends React.Component {
    render() {
        return(
            <img alt = "blurredMerc" id = "bgImage" src = {Image}></img>
        );
    }
}
