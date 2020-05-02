import React from 'react';

import LoginBox from './loginBox.js';
import './LoginPage.css';


import MainImage from '../../../Content/images/midcornerMerc.jpg';
import SubmitButton from '../../../components/SubmitButton/SubmitButton';

export default class LoginPage extends React.Component {
    componentDidMount() {
      // const test = findDOMNode('.App-header');
      // $('.App-header').css({'background-image': `${BlurredImage}`});
      
    }
  
    render() {

        return(
            <div className = "container">
            <div className = "row" id = "mainContent">
              <div className = "col-7">
                <img src = {MainImage}
                alt = "raceCar"
                style = {{
                  display: 'inline-block',
                  height: '30%',
                  borderRadius: '6.9%',
                }}></img>
              </div>
              <div className = "col-5"
                style = {
                  {
                    marginTop: '5%',
                    position: "relative",
                    right: "7%"
                  }
                }>
                <LoginBox></LoginBox> 
                <SubmitButton></SubmitButton>
              </div>
            </div>
          </div>
        );
    }
}