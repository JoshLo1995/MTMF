import React from 'react';
import './App.css';
import LoginBox from './components/loginBox/loginBox.js'
import TopBar from './components/TopBar/TopBar'

// TEMPORARY IMPORT
import MainImage from './Content/images/midcornerMerc.jpg';

function App() {
  return (
    <div className="App">
      <TopBar></TopBar>
      <header className="App-header">
        <div className = "container">
          <div className = "row" id = "mainContent">
            <div className = "col-7">
              {/* Temporary img link */}
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
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;

