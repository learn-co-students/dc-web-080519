import React, { Component } from 'react';
import '../App.css';
import PaintingsContainer from './PaintingsContainer'
import Nav from '../component/Navbar'
import Searchbar from '../component/Searchbar'
import PaintingsDetails from '../component/PaintingsDetails'

//where we will have state
class App extends Component {
  constructor(){
    super()
    this.state = {
      searchText: "",
      displayedPainting: null
    }
  }

  //state changing callback (we want to change the state of searchText)
  changeSearchText = (event) => {
    //we want to change searchText;
    //searchText is only available inside App's isntance methods
    this.setState({searchText: event.target.value})
    //is async
  }

  //state changing callback function
  changeDisplayedPainting = (p) => {
    //we want to change displayedPainting => {}
    console.log("attmepting to change painting", p)
    this.setState({displayedPainting: p})
  }

  render() {
    return (
      <div className="App">
        <Nav
          title="Paintr"
          tagline="List of Paintings"
          icon="paint brush"
          color="blue"
        />
        <Searchbar
          onSearch={this.changeSearchText}
        />
        { this.state.displayedPainting ? <PaintingsDetails painting={this.state.displayedPainting}/> : null }
        <PaintingsContainer
          changeDisplayedPainting={this.changeDisplayedPainting}
          searchText={this.state.searchText}
        />
      </div>
    );
  }
}

export default App;
