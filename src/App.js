import React from 'react';
// import { Router, Route } from "react-router-dom";
import './App.css';
import TopBar from './components/TopBar';
// import LoginPage from './components/views/LoginPage/LoginPage.js';
// import SignupPage from './components/views/SignupPage/signUpPage';
// import BgImage from './components/views/LoginPage/bgImage.js'
// import MembersPage from './components/views/MembersPage/MembersPage';

function App() {
  return (
    <div className = "AppContainer">
      <TopBar/>
    </div>
  );
}

export default App;
// <Router history = {browserHistory}>
//   <Route path = "/" component = {TopBar}>
//     <IndexRoute component = {LoginPage} />
//     <Route path = "/members" component = {MembersPage}/>
//   </Route>
// </Router>