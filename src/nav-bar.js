import React from 'react';



export default class NavBar extends React.Component {
  render(){
    return (
      <div>
        <nav className="navbar main-nav navbar-expand-sm navbar-collapse fixed-top navbar-light">
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div className="container-fluid">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link" href="#">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Experience</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Education</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Skills</a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
  
};
