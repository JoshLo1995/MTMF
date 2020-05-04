import React from 'react';
import './signUpPage.css';

import SignupBox from './signupBox';
import SubmitButton from '../../SubmitButton/SubmitButton.js'
import BgImage from '../../../Content/images/rbLeavingPits.jpg';

const styles = {
    
}

export default function SignupPage() {
    return(
        <div className = "container">
            <div className = "row">
                <div className = "col-12" id = "contentBox">
                    <SignupBox></SignupBox>     
                    <SubmitButton></SubmitButton>   
                </div>
            </div>
        </div>
    );
}