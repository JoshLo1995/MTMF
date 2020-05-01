import React from 'react';
import "../../Content/css/TopBar.css";

export default class TopBar extends React.Component {


    render() {
        return(
            <nav class="navbar navbar-dark bg-dark fixed-top" id = "navMain">
                <p class="navbar-brand">MTMF</p>
                <button 
                   class="navbar-toggler" 
                    type="button"
                    data-toggle="collapse" data-target="#navbarsExample01" aria-controls="navbarsExample01"
                    aria-expanded="true" 
                    aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div class="navbar-collapse collapse hide" id="navbarsExample01">
                <ul class="navbar-nav mr-auto">
          {/* <li class="nav-item active">
            <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
          </li> */}
          {/* <li class="nav-item">
            <a class="nav-link" href="#">Link</a>
          </li> */}
          {/* <li class="nav-item">
            <a class="nav-link disabled" href="#">Disabled</a>
          </li> */}
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="https://example.com" id="dropdown01" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Dropdown</a>
            {/* <div class="dropdown-menu" aria-labelledby="dropdown01">
              <a class="dropdown-item" href="#">Action</a>
              <a class="dropdown-item" href="#">Another action</a>
              <a class="dropdown-item" href="#">Something else here</a>
            </div> */}
          </li>
        </ul>
      </div>
    </nav>
        )
    }
}