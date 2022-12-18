
import React from "react";

const App = () => {
  return (
    <div className="container-fluid">
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">Kalyan</a>
          <a className="navbar-brand" href="#">Chavali</a>
        </div>
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link" href="#">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Features</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Pricing</a>
            </li>
          </ul>
        </div>
      </nav>
      <div className='jumbotron main'>
        <h1 className="display-4">Hey, I'm Kalyan Chavali</h1>
        <p className="lead">Software Developer | Photographer</p>
      </div>
    </div>
  );
}

export default App;