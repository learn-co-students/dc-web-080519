// a fetch call returns a promise
// a promise returns a promise
// .then has a callback
    // the callback returns Something (could be the integer 10)
    // before the .then() returns that something,
      // if that something is not a promise already,
      // it wraps it in a promise => <Promise 10 >
      // and then returns it
// Therefore, we can build a Promise-Chain and not build a Callback Hell
//     Promise-=-=-=-=-=-=-Promise-=-=-=-=-=-=-Promise ...

// ******************* Callback Hell Example *******************
fetch("https://pokeapi.co/api/v2/pokemon")
.then(res => res.json())
.then(pokemonsInfo => {

    let bulbaUrl = pokemonsInfo.results[0].url
    fetch(bulbaUrl)
    .then(res => res.json())
    .then( pokemonObj => {
       let hiddenAbilityUrl = pokemonObj.abilities[0].ability.url

       fetch(hiddenAbilityUrl)
       .then(res => res.json())
       .then(abilitiesInfo => {
           let abilityDescription = abilitiesInfo.effect_entries[0].short_effect;
           let container = document.querySelector(".container");
           container.innerText = abilityDescription;
       })

    })
})


// ******************* Proper Promise-Chain Example *******************
fetch("https://pokeapi.co/api/v2/pokemon")
.then(res => res.json())
.then(pokemonsInfo => {
  let bulbaUrl = pokemonsInfo.results[0].url
  return fetch(bulbaUrl)
})
.then(res => res.json())
.then( pokemonObj => {
  let hiddenAbilityUrl = pokemonObj.abilities[0].ability.url
  return fetch(hiddenAbilityUrl)
})
.then(res => res.json())
.then(abilitiesInfo => {
  let abilityDescription = abilitiesInfo.effect_entries[0].short_effect;
  let container = document.querySelector(".container");
  container.innerText = abilityDescription;
})
