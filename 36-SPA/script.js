// features:
// show all pokemon
// create a pokemon  (name, sprite)
// delete a pokemon on click of its card

// user stories
// events, fetching, dom manipulation
// when <something happens>, make a <what type> fetch, and <somehow> manipulate the DOM.


//features:
// When PageLoads, GET fetch /pokemons, add all pokemon to the page
// When SubmitForm, POST fetch /pokemons, pokemon added to list
// When ClickPokemonCard, DELETE fetch /pokemons/:id , remove pokemon card from list

document.addEventListener("DOMContentLoaded", function(){
  console.log('DOM loaded')

  gottaFetchEmAll();
  initializeForm();

});


function initializeForm(){
  let form = document.querySelector("form");
  form.addEventListener("submit", handleFormSubmission)
}

function handleFormSubmission(e){
  e.preventDefault()
  let formData = {
    name: document.querySelector("#name-input").value,
    sprite: document.querySelector("#sprite-input").value
  }

  fetch("http://localhost:3000/pokemons", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(formData) //formData in string format
  })
  .then(res => {
    renderPokemon(formData)
  })
  .catch(error => {
    alert("Server down, please try again later.")
  })

}


function renderPokemon(pmonObj){
  // initialize pokemon div, with "card" class
  let pokemonCard = document.createElement("div");
  pokemonCard.classList.add("card")
  pokemonCard.id = `pokemon-${pmonObj.id}`;

  // work on the header for the card
  let pokemonHeader = document.createElement("h3");
  pokemonHeader.innerText = pmonObj.name

  // work on sprite
  let pokemonImage = document.createElement("img")
  pokemonImage.src = pmonObj.sprite


  // add h3, img to the card
  pokemonCard.append(pokemonHeader, pokemonImage)


  // add delete functionality to card
  pokemonCard.addEventListener("click", deletePokemon)

  // add card to container (container is already on the page)
  let pokemonContainer = document.querySelector("#pokemon-container")
  pokemonContainer.appendChild(pokemonCard)
}

function deletePokemon(e){
  // delete pokemon

  let card = e.currentTarget;
  let id = card.id.split("-")[1]
  fetch(`http://localhost:3000/pokemons/${id}`, {
    method: "DELETE"
  })
  .then(res => {
    // debugger
    card.remove()

  })
  .catch(error => {
    alert("Server down, please try again later.")
  })


}

function gottaFetchEmAll(){
  fetch("http://localhost:3000/pokemons")
  .then(response => response.json())
  .then(pokemonsArray => {
    pokemonsArray.forEach(pokemonObj => {
      renderPokemon(pokemonObj)
    })
  })
}
