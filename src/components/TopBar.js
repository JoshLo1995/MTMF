import React from 'react';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import "../Content/css/TopBar.css";
import "./views/LoginPage/LoginPage.css";
import "./SubmitButton/SubmitButton.css";
import "./views/SignupPage/signUpPage.css";
import LoginPage from '../components/views/LoginPage/LoginPage';
import SignupPage from '../components/views/SignupPage/signUpPage.jsx';
import MembersPage from '../components/views/MembersPage/MembersPage.jsx';
import LandingPage from '../components/views/LandingPage/LandingPage.jsx';

import Button from 'react-bootstrap/Button';
import Navbar from 'react-bootstrap/Navbar';

export default function TopBar() {
      return(
        <Navbar expand="lg" variant="dark" bg="dark" fixed = "top">
          <Navbar.Brand href="/members">MTMF</Navbar.Brand>
        </Navbar>
      )
    }
