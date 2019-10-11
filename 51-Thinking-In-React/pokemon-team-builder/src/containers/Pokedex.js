import React from 'react'
import PokemonContainer from './PokemonContainer'
import StatBox from '../components/StatBox'
import Searchbar from '../components/Searchbar'

const URL = 'https://pokeapi.co/api/v2/pokemon?limit=1000'

class Pokedex extends React.Component{
  constructor(){
    super()
    this.state = {
      team: [],
      allPokemon: [],
      currentPokemon: null,
      searchText: ""
    }
  }

  componentDidMount(){
    fetch(URL)
    .then(res => res.json())
    .then(data => {
      this.setState({allPokemon: data.results})
    })
  }

  onSearch = (event) => {
    this.setState({searchText: event.target.value})
  }

  scoutPokemon = (pokemon) => {
    //update the state of currentPokemon
    fetch(pokemon.url)
    .then(res => res.json())
    .then(data => {
      this.setState({
        currentPokemon: data
      })
    })
  }

  //state changing callback to change Team
  addPokemon = (pokemonObj) => {
    //update team state to be exactly what it was before, but with pokemonObj added
    if(this.state.team.length >= 6){
      alert("Don't be greedy")
    }else{
      if(this.state.team.includes(pokemonObj)){
        alert("No dupes!")
      }else{
        this.setState({
          team: [...this.state.team, pokemonObj]
        })
      }
    }
  }

  //state changing callback to change Team
  removePokemon = (pokemonObj) => {
    //team should be a new array that is just like the old array but with that pokemon taken out
    this.setState({
      team: this.state.team.filter(p => p !== pokemonObj)
    })
  }

  render(){
    return(
      <div>
        <PokemonContainer
          title="My Team:"
          pokemon={this.state.team}
          clickPokemon={this.removePokemon}
          scoutPokemon={this.scoutPokemon}
          team={this.state.team}
        />
        {
          this.state.currentPokemon ?
            <StatBox currentPokemon={this.state.currentPokemon}/> :
            null
        }
        <Searchbar onSearch={this.onSearch}/>
        <PokemonContainer
          title="Available Pokemon:"
          pokemon={this.state.allPokemon.filter(pokemon => pokemon.name.includes(this.state.searchText))}
          clickPokemon={this.addPokemon}
          scoutPokemon={this.scoutPokemon}
          team={this.state.team}
        />
      </div>
    )
  }
}

export default Pokedex
