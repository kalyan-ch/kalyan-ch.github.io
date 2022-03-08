import React from 'react';

const ListItem = (props) => {
  return (
    <li className="nav-item">
      <a className="nav-link" href="#">{props.linkText}</a>
    </li>
  );
};

export default ListItem;
