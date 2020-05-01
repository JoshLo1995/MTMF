import React from 'react';
import Background from '../../Content/images/blurred-merc.jpg'

export default class BackgroundImage extends React.Component {
    constructor(props) {
        super(props);
        this.setState(
            {
                backgroundImage: `url(${Background})`
            }
        )
    }
    render() {
        return(
            <img src = {Background}
                alt = "this img is broken"
            />
        )
    }
}