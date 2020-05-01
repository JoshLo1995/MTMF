import React from 'react';
import '../../Content/css/loginBox.css';
// import { GoogleLogin } from 'react-google-login';

export default class LoginBox extends React.Component {
    onSignIn = () => {
        console.log("hooray");
    };
    
    render() {
        return(
            <div className = "container" id = "LoginBoxMain">
                <div className = "row d-flex justify-content-center">
                    <div classname = "col-12">
                        <div className = "row">
                            <div className = "col-12">
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

        );
    }
}




/* Notes 
Having trouble linking css file

TODO:
#1 Hide clientID

*/