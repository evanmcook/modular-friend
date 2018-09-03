import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';
import Navbar from './navbar/navbar';
import Resume from './resume/resume';
import Portfolio from './portfolio/portfolio';
import Links from './links/links';
import Contact from './contact/contact';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <div>
        <Navbar />
        <div id= "content">
          <Route path='/resume' component={Resume}/>       
          <Route path='/portfolio' component={Portfolio}/>       
          <Route path='/links' component={Links}/>       
          <Route path='/contact' component={Contact}/>       
        </div>
        </div>
        </BrowserRouter>
    );
  }
}

export default App;
