import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './navbar.css';

class Navbar extends Component {
  render() {
    return (
      <ul id="links">
        <li><NavLink activeClassName='active' to="/resume">resume</NavLink></li>
        <li><NavLink activeClassName='active' to="/portfolio">portfolio</NavLink></li>
        <li><NavLink activeClassName='active' to="/links">links</NavLink></li>
        <li><NavLink activeClassName='active' to="/contact">contact</NavLink></li>
        </ul>
    );
  }
}

export default Navbar;
