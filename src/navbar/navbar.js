import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './navbar.css';

class Navbar extends Component {
  render() {
    return (
      <div className="navbar">
        <div id="home-div">
          <NavLink activeClassName='hidden' exact to="/">Evan Cook</NavLink>
        </div>
        <ul id="navbar-links">
          <li><NavLink activeClassName='active' to="/resume">resume</NavLink></li>
          <li><NavLink activeClassName='active' to="/portfolio">portfolio</NavLink></li>
          <li><NavLink activeClassName='active' to="/links">links</NavLink></li>
          <li><NavLink activeClassName='active' to="/contact">contact</NavLink></li>
        </ul>
      </div>
    );
  }
}

export default Navbar;
