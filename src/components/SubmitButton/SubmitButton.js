import React from 'react';
import Button from 'react-bootstrap/Button';
import './SubmitButton.css';

export default class SubmitButton extends React.Component {

    render() {
        return(
            <Button variant="primary"
            id = "submitButton">Submit</Button>   
        );
    }
}