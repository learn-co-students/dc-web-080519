import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import ComBox from './Commentbox'

class App extends Component {
  render(){
    //you can execute JS as per usual
    return (
      <div className="App">
        <header className="App-header">
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
        <ComBox />
      </div>
    )
  }
}

export default App;
