import React, { Component } from 'react';
import './home.css';

class Home extends Component {
  render() {
    return (
      <div className="home">
        <h1>Evan Cook</h1>
        <div className="subheader">is a sound designer.</div> <br/>
        <p>Evan does sound design for theater, live performance, and the internet.</p>
        <p>Evan likes helping tell stories, and using dry erase boards.<br/></p>
        <p>Evan has also been known to:<br/></p>
        
        <p>-design and build custom mechanical keyboards</p>
        <p>-record and create original sound effects for distribution online</p>
        
      </div>
    );
  }
}

export default Home;