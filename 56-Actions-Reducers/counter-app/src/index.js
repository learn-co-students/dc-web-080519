import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import logo from './logo.svg';
import './App.css';
import {createStore} from 'redux'

//where we can set up initial state
let reducer = (oldState={count: 123}, action) => {
  console.log("oldState: ", oldState, "action: ", action)

  switch (action.type) {
    case "ADD_ONE":
      return {count: oldState.count + action.payload} //new state
    case "SUBTRACT_ONE":
      return {count: oldState.count - action.payload}
    default:
      return oldState
  }
}

let store = createStore(reducer)

console.log(store.getState())
//store has two important methods
//.getState() .dispatch()


const increment = (num) => {
  store.dispatch({type: "ADD_ONE", payload: num})
};
const decrement = (num) => {
  store.dispatch({type: "SUBTRACT_ONE", payload: num})
};

class App extends Component {
  componentDidMount() {
    store.subscribe(() => this.forceUpdate())
  }

  render() {
    return (
      <div className="App">
        <Header/>
        <Counter/>
      </div>
    );
  }
}

class Header extends Component {



  render() {
    return (
      <header className="App-header">
        <h1 className="App-title">Welcome to React</h1>
        <button onClick={()=>decrement(5)}> -5 </button>
        <button onClick={()=>increment(3)}> +3 </button>
        <h1>{store.getState().count}</h1>

      </header>
    );
  }
}

class Counter extends Component {

  renderDescription = () => {
    const remainder = store.getState().count % 5;
    const upToNext = 5 - remainder;
    return `The current count is less than ${store.getState().count + upToNext}`;
  };

  render() {
    return (
      <div className="Counter">
      <button onClick={()=>decrement(1)}> - </button>
      <button onClick={()=>increment(1)}> + </button>
        <h3>{this.renderDescription()}</h3>
        <img src={logo} className="App-logo" alt="logo" />

      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
