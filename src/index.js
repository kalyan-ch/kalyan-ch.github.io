import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import NavBar from './nav-bar';

const Title = () => {
  return (
    <div>
      <NavBar/>
      <div className="title container-fluid text-center">
        <h1>Kalyan Chavali</h1>
        <p>Software Developer III at Workday</p>
      </div>
    </div>
    
  );
};

ReactDOM.render(
  <Title />,
  document.getElementById('root')
);

