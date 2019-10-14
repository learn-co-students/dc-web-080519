import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';
import MoneyForm from './components/Form'

// Endpoint!
const API = "http://localhost:3000/sushis"

class App extends Component {

  constructor(){
    super()
    this.state = {
      sushiCollection: [],
      eatenSushi: [],
      index: 0,
      wallet: 95,
    }
  }

  componentDidMount(){
    fetch(API)
    .then(r => r.json())
    .then(sushis => this.setState({ sushiCollection: sushis }))
  }

  handleMoreButton = () => {
    if(this.state.index === 96){
      this.setState({ index: 0 })
    } else {
    this.setState({ index: this.state.index + 4 })
    }
  }

  handleEatSushi = (sushiObj) => {
    console.log('eating sushi...', sushiObj);
    // if money in wallet is greater than sushi price
    if(!this.state.eatenSushi.includes(sushiObj)){
      if(this.state.wallet >= sushiObj.price){
        // subtract price of sushi from money in wallet
        this.setState({ wallet: this.state.wallet - sushiObj.price,
                        eatenSushi: [...this.state.eatenSushi, sushiObj]})
      } else {
        alert(`you're broke, get out.`)
      }
    }
  }

  handleForm = (e) => {
    e.preventDefault()
    let amtToAdd = parseInt(e.target.querySelector('input').value)
    this.setState({ wallet: this.state.wallet + amtToAdd })
  }

  render() {
    return (
      <div className="app">
        <MoneyForm handleForm={this.handleForm}/>
        <SushiContainer sushis={this.state.sushiCollection.slice(this.state.index, this.state.index+4)} handleMoreButton={this.handleMoreButton} handleEatSushi={this.handleEatSushi} eatenSushi={this.state.eatenSushi} />
        <Table wallet={this.state.wallet} eatenSushi={this.state.eatenSushi}/>
      </div>
    );
  }
}

export default App;
