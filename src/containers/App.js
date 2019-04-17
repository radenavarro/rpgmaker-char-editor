import React, { Component } from 'react';
import logo from '../logo.svg';
import './App.css';
import Canvas from "../components/canvas/canvas";
import OptionContainer from "../components/optionContainer/optionContainer";

class App extends Component {
  render() {
    return (
      <div className="App">
        <OptionContainer/>
      </div>
    );
  }
}

export default App;
