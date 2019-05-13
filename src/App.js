import React, { Component } from 'react';
import { HashRouter as Router, Route, Link } from "react-router-dom";
import './App.css';

import Animals from './Components/Animals/Animals.js'
import Plants from './Components/Plants/Plants.js'
import Home from './Components/Home/Home.js'

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <nav className="mainNav">
            <ul className="mainNav-list">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/plants">Plants</Link>
              </li>
              <li>
                <Link to="/animals">Animals</Link>
              </li>
            </ul>
          </nav>

          <Route exact path="/" component={Home} />
          <Route path="/plants" component={Plants} />
          <Route path="/animals" component={Animals} />
        </div>
      </Router>
    );
  }
}

export default App;
