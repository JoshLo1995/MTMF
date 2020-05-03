import React from 'react';
import './loginBox.css';
// import SubmitButton from './SubmitButton';
// import { GoogleLogin } from 'react-google-login';

export default class LoginBox extends React.Component {
    onSignIn = () => {
        console.log("hooray");
    };
    
    render() {
        return(
            <div className = "container" id = "megaContainer">
                <div className = "container" id = "LoginBoxMain">
                    <div className = "row d-flex justify-content-center">
                        <div className = "col-12">
                            <div className = "row">
                                <div className = "col-12" id = "loginText">
                                    Login
                                </div>
                            </div>
                            
                            <div className = "row">
                                <div className = "col-12">
                                    <input
                                        id = "usernameInput"
                                        type = "text"
                                        placeholder = "Username"
                                    >
                                    </input>
                                </div>
                            </div>

                            <div className = "row">
                                <div className = "col-12">
                                    <input
                                        id = "passwordInput"
                                        type = "text"
                                        placeholder = "Password"
                                    >
                                    </input>
                                </div>
                            </div>

                            <div className = "row d-flex justify-content-center">
                                <div className = "col-6 d-flex justify-content-center">
                                    <div
                                        id = "googleButton"
                                        className = "g-signin2"
                                        // data-onsucess is pretty much an onLoad
                                        // Fires twice on load?
                                        data-onsucess = "onSignIn"
                                        
                                    ></div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
                {/* <SubmitButton></SubmitButton> */}
            </div>

        );
    }
}




/* Notes 
Google Login box disappears if you switch to sign in and then back to login

TODO:
#1 Hide clientID

*/