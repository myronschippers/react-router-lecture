import React, { Component } from 'react';
import { HashRouter as Router, Route } from "react-router-dom";
import './App.css';

import Animals from './Components/Animals/Animals.js'
import Plants from './Components/Plants/Plants.js'
import Home from './Components/Home/Home.js'

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Route path="/" component={Home} />
          <Route path="/plants" component={Plants} />
          <Route path="/animals" component={Animals} />
        </div>
      </Router>
    );
  }
}

export default App;
