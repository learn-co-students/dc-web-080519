const BASE_URL = "http://localhost:3000"
const TRAINERS_URL = `${BASE_URL}/trainers`
const POKEMONS_URL = `${BASE_URL}/pokemons`

document.addEventListener("DOMContentLoaded", ()=>{
  fetch(TRAINERS_URL)
  .then(res => res.json())
  .then(trainers => {
    let app = new App(trainers)
    document.querySelector("body").innerHTML += app.render() //returns `<main></main>``
  })
})
