class Trainer {
  constructor(trainer){
    this.id = trainer.id
    this.name = trainer.name
    this.pokemons = []
    trainer.pokemons.forEach((pokemonObj) => {
      let pokemonInstance = new Pokemon(pokemonObj)
      this.pokemons.push(pokemonInstance)
    })
  }

  render(){
    //what should a trainer look like on the DOM
    return `
    <div class="card" data-id="1"><p>Prince</p>
      <button data-trainer-id="1">Add Pokemon</button>
      <ul>
        ${this.pokemons.map(pokemonInstance => pokemonInstance.render()).join("")}
      </ul>
    </div>
    `
  }
}
