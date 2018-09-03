import React, { Component } from 'react';
import './home.css';

class Home extends Component {
  render() {
    return (
      <div className="home">
        <h1>Evan Cook</h1>
        <div className="subheader">is a sound designer.</div>
        <p>Evan does sound design for theatre.</p>
        <p>Evan likes dry erase boards.<br/>
          Evan likes helping tell stories.<br/>
          Evan is a big fan of concepts.<br/>
          (Verisimilitude in fiction is probably his favorite concept.)</p>
        <p>Evan also likes electronics.<br/>
          Especially electronics that make sounds.<br/>
          Also, sounds that loop.</p>
        <p>Perhaps you are wondering:<br/>
          "Can Evan do sound design for things other than theatre?"<br/>
          (That is a good question.)
          (Yes he can.)</p>
        <p>Evan also does sound design for dance<br/>
          He did some sound design for an art gallery<br/>
          and for lightproject.org in twenty seventeen.</p>
        <p>Evan also does "sound engineering".</p>
        <p>"Sound engineering" sometimes means "sound system design" but can also mean "implementing others' sound design".</p>
        <p>To be clear, when "engineering" is used in this sense,  it does not mean that Evan is a graduate of an accredited engineering curriculum.</p>
      </div>
    );
  }
}

export default Home;