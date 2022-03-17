import React from 'react';
import ListItem from './ListItem';

const NavBar = () => {
  return (
    <div>
      <nav className="navbar main-nav navbar-expand-sm navbar-collapse fixed-top navbar-light">
        <div className="container-fluid text-right">
          <ul className="navbar-nav ms-auto flex-nowrap">
            <ListItem linkText="Experience" />
            <ListItem linkText="Skills" />
            <ListItem linkText="Education" />
            <ListItem linkText="Contact" />
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
