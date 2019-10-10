import React, { Component } from 'react';
import '../App.css';
import Nav from './Nav'
import hogs from '../porkers_data'; //static data source
import Filter from './Filter'
import PigPen from './PigPen'

class App extends Component {
  constructor(){
    super()
    this.state = {
      sort: "OG", //"OG", "name", "weight",
      showGreased: false
    }
  }

  //state changing callback to change the sort state
  changeSort = (event) => {
    console.log(event.target.value)
    this.setState({sort: event.target.value})
  }

  //state changing callback to change the showGreased setState
  toggleShowGreased = (event) => {
    this.setState({showGreased: !this.state.showGreased})
  }

  hogsToDisplay = () => {
    let hogsCopy = [...hogs]
    if(this.state.showGreased){
      hogsCopy = hogsCopy.filter(hog => hog.greased)
    }
    switch (this.state.sort) { //"OG", "name", "weight"
      case "name":
        hogsCopy.sort((a, b) => a.name > b.name ? 1 : -1)
        break;
      case "weight":
        hogsCopy.sort((a, b) => a.weight - b.weight)
        break;
      default:
        break;
    }
    return hogsCopy
  }

  //state changing callback to change hogs state
  // updateHogs = (data) => {
  //   if(data === "name"){
  //     let hogsOgCopy = [...this.state.hogs]
  //     hogsOgCopy.sort((a, b) => a.name > b.name ? 1 : -1)
  //     this.setState({hogs: hogsOgCopy})
  //   }else if(data === "weight"){
  //     let hogsOgCopy = [...this.state.hogs]
  //     hogsOgCopy.sort((a, b) => a.weight - b.weight)
  //     this.setState({hogs: hogsOgCopy})
  //   }else if(data === "OG"){
  //     this.setState({hogs: [...hogs]})
  //   }else if(data === true){
  //     console.log("check button", data)
  //     this.setState({hogs: this.state.hogs.filter(h => h.greased)})
  //   }else if(data === false){
  //     console.log("check button", data)
  //   }
  // }

  render() {
    debugger
    return (
      <div className="App">
          <Nav />
          <Filter changeSort={this.changeSort} toggleShowGreased={this.toggleShowGreased}/>
          <PigPen hogs={this.hogsToDisplay()}/>
      </div>
    )
  }
}

export default App;
