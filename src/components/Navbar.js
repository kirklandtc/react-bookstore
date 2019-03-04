import React, { Component } from 'react';


class Navbar extends Component {
  render() {
    return (
      <div className="Navbar">
      <nav className="navbar navbar-expand-lg navbar-dark
         bg-dark">
        <a className="navbar-brand" href="#">React Bookstore</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <a className="nav-link" href="#"><span className="sr-only"></span></a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#"></a>
            </li>
            <li className="nav-item dropdown">
            
              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                <a className="dropdown-item" href="#"></a>
                <a className="dropdown-item" href="#"></a>
                <div className="dropdown-divider"></div>
                <a className="dropdown-item" href="#"></a>
              </div>
            </li>
            <li className="nav-item">
              <a className="nav-link disabled" href="#" tabIndex="-1" aria-disabled="true"></a>
            </li>
          </ul>
          <form className="form-inline my-2 my-lg-0">
            <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
            <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
          </form>
         </div>
        </nav>
      </div>
    );
  }
}

export default Navbar;
