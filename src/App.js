import React from 'react';
// import { Router, Route } from "react-router-dom";
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import './App.css';
import TopBar from './components/TopBar';
import Box from '@material-ui/core/Box';
import LandingPage from './components/views/LandingPage/LandingPage';
// import LoginPage from './components/views/LoginPage/LoginPage.js';
import SignupPage from './components/views/SignupPage/signUpPage';
// import BgImage from './components/views/LoginPage/bgImage.js'
import MembersPage from './components/views/MembersPage/MembersPage';

function App() {
  return (
    <Router>
      <Box>
        <TopBar/>
        <Box> 
          <Switch>
            <Route exact path = "/">
              <LandingPage/>
            </Route>
            <Route path = "/signup">
              <SignupPage/>
            </Route>
            <Route path = "/members">
              <MembersPage/>
            </Route>
          </Switch>
        </Box>
      </Box>


    </Router>
  );
}

export default App;
// <Router history = {browserHistory}>
//   <Route path = "/" component = {TopBar}>
//     <IndexRoute component = {LoginPage} />
//     <Route path = "/members" component = {MembersPage}/>
//   </Route>
// </Router>