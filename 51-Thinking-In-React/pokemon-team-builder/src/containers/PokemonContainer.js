import React from 'react'
import PokemonCard from '../components/PokemonCard'

class PokemonContainer extends React.Component{
  render(){
    return(
      <div>
        <h3>{this.props.title}</h3>
        {this.props.pokemon.map((pokemonObj, index) => <PokemonCard
          key={pokemonObj.name}
          pokeData={pokemonObj}
          clickPokemon={this.props.clickPokemon}
          scoutPokemon={this.props.scoutPokemon}
          team={this.props.team}
          title={this.props.title}
          />)}
      </div>
    )
  }
}

export default PokemonContainer
