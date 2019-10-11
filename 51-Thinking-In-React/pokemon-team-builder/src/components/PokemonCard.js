import React from 'react'

class PokemonCard extends React.Component {
  // state = {
  //   color: "#FFD700"
  // }
  //
  // toggleColor = () => {
  //   if(this.state.color === "grey"){
  //     this.setState({color: "#FFD700"})
  //   }else{
  //     this.setState({color: "grey"})
  //   }
  // }

  getColor = () => {
    if(this.props.team.includes(this.props.pokeData) && this.props.title === "Available Pokemon:"){
      return "grey"
    }
    return "#FFD700"
  }

  render(){
    return(
      <div
        onDoubleClick={() => {
          this.props.clickPokemon(this.props.pokeData)
        }}
        onClick={() => this.props.scoutPokemon(this.props.pokeData)}
        className="pokemon" style={{backgroundColor: this.getColor()}}>
          {this.props.pokeData.name}
      </div>
    )
  }
}

export default PokemonCard
