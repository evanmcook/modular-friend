import React, { Component } from 'react';
import './home.css';

class Home extends Component {
  render() {
    return (
      <div className="home">
        <h1>Evan Cook</h1>
        <div className="subheader">is a sound designer.</div> <br/>
        <p>Evan does sound design for theatre.</p>
        <p>Evan likes dry erase boards.<br/>
          Evan likes helping tell stories.
         </p>
        <p>In addition to sound design, Evan has been known to:<br/></p>
        <p>-create sample packs for others</p>
        <p>-livestream soldering and circuitbending projects</p>
        <p>-brew bizarre QLab workspaces that contain simple games</p>
        
        
      </div>
    );
  }
}

export default Home;