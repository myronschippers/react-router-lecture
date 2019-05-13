import React, { Component } from 'react';
import { HashRouter as Router, Route } from "react-router-dom";
import './App.css';

import Animals from './Components/Animals/Animals.js'
import Plants from './Components/Plants/Plants.js'
import Home from './Components/Home/Home.js'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Home />
        <Plants />
        <Animals />
      </div>
    );
  }
}

export default App;
