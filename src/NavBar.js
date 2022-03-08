import React from 'react';
import ListItem from './ListItem';

const NavBar = () => {
  return (
    <div>
      <nav className="navbar main-nav navbar-expand-sm navbar-collapse fixed-top navbar-light">
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div className="container-fluid">
          <ul className="navbar-nav">
            <ListItem linkText="Home" />
            <ListItem linkText="Experience" />
            <ListItem linkText="Education" />
            <ListItem linkText="Skills" />
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
