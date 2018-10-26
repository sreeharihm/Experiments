import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Hello from './Component/Hello';
import World from './Component/World';
class App extends Component {
  render() {
    return (
      <div className="App">       
        <header className="App-header">
          <Hello /><World />
          
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
      
    );
  }
}

export default App;
