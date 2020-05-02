import React from 'react';
import './App.css';
import TopBar from './components/TopBar';
import LoginPage from './components/views/LoginPage/LoginPage.js';
import SignupPage from './components/views/SignupPage/signUpPage';
import BgImage from './components/views/LoginPage/bgImage.js'

function App() {
  return (
    <div className="App">
      <TopBar></TopBar>
      <div className = "container">
        <BgImage></BgImage>
        <div className = "row">
          <div className = "col-12">
            <header className = "App-header">
            {/* Use app router to send user to new page */}
            
            <div className = 'container' id = 'content'>
              <div className = 'row'>
                <div className = 'col-12'>
                  <LoginPage></LoginPage>
                  {/* <SignupPage></SignupPage> */}
                </div>
              </div>
            </div>
            </header>

          </div>
        </div>
      </div>
    </div>
  );
}

export default App;