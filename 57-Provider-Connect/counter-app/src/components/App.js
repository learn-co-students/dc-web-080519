import React, {Component} from 'react'
import Counter from './Counter'
import {connect} from 'react-redux'
import Header from './Header'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <Counter/>
      </div>
    );
  }
}

export default App
