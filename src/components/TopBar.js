import React from 'react';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import "../Content/css/TopBar.css";
import "./views/LoginPage/LoginPage.css";
import "./SubmitButton/SubmitButton.css";
import "./views/SignupPage/signUpPage.css";
import LoginPage from '../components/views/LoginPage/LoginPage';
import SignupPage from '../components/views/SignupPage/signUpPage';
import MembersPage from '../components/views/MembersPage/MembersPage.jsx';

export default function TopBar() {
      return(
        <Router>
          <div className = "container">
            <div className = "row">
              <div className = "col-12">
                <nav className = "navbar fixed-top navbar-dark" id = "navMain">
                  <p className = "navbar-brand">
                    <div className = "container d-flex h-100">
                      <div className = "row align-items-center h-100">
                        <div className = "col-4 mx-auto">
                          <ul>
                            <li>
                              <Link to ="/">Log In</Link>
                            </li>
                          </ul>
                        </div>
                        <div className = "col-4">
                          <ul>
                            <li>
                              <Link to = "/signup">Sign Up</Link>            
                            </li>
                          </ul>
                        </div>
                        <div className = "col-4">
                          <ul>
                            <li>
                            <Link to = "/members">Members</Link>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </p>
                </nav>
              </div>
            </div>
          </div>

          <Switch>
            <Route exact path = "/">
              <LoginPage/>
            </Route>
            <Route path = "/signup">
              <SignupPage/>
            </Route>
            <Route path = "/members">
              <MembersPage/>
            </Route>
          </Switch>
        </Router>









    //         <nav className="navbar fixed-top navbar-dark" id = "navMain">
    //             <p className="navbar-brand">
    //               <div>
    //                 <main>
    //                   <Switch>
    //                     <li>
    //                       <ul>
    //                         <Link to = "/signup">Sign Up</Link> 
    //                       </ul>
    //                     </li>

    //                   </Switch>
    //                 </main>
    //               </div>
    //             </p>
    //             <button 
    //                className="navbar-toggler" 
    //                 type="button"
    //                 data-toggle="collapse" data-target="#navbarsExample01" aria-controls="navbarsExample01"
    //                 aria-expanded="true" 
    //                 aria-label="Toggle navigation">
    //                 <span className="navbar-toggler-icon"></span>
    //             </button>

    //             <div className="navbar-collapse collapse hide" id="navbarsExample01">
    //             <ul className="navbar-nav mr-auto">
    //       {/* <li class="nav-item active">
    //         <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
    //       </li> */}
    //       {/* <li class="nav-item">
    //         <a class="nav-link" href="#">Link</a>
    //       </li> */}
    //       {/* <li class="nav-item">
    //         <a class="nav-link disabled" href="#">Disabled</a>
    //       </li> */}
    //       <li className="nav-item dropdown">
    //         <a className="nav-link dropdown-toggle" href="https://example.com" id="dropdown01" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Blep</a>
    //         {/* <div class="dropdown-menu" aria-labelledby="dropdown01">
    //           <a class="dropdown-item" href="#">Action</a>
    //           <a class="dropdown-item" href="#">Another action</a>
    //           <a class="dropdown-item" href="#">Something else here</a>
    //         </div> */}
    //       </li>
    //     </ul>
    //   </div>
    // </nav>
        )
    }
