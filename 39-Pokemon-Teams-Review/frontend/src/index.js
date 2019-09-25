//URLs
const BASE_URL = "http://localhost:3000"
const TRAINERS_URL = `${BASE_URL}/trainers`
const POKEMONS_URL = `${BASE_URL}/pokemons`

//On page load
document.addEventListener("DOMContentLoaded", () => {
    getTrainers()
    main().addEventListener('click', handleClick)
})

//Retrieve page elements
function main() {
    return document.querySelector("main")
}

//DB interaction
function getTrainers() {
    fetch(TRAINERS_URL)
    .then(res => res.json())
    .then(trainers => displayTrainers(trainers))
}

function createPokemon(id, list) {
    fetch(POKEMONS_URL, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify({trainer_id: id})
    })
    .then(res => res.json())
    .then((data) => {
        if(!data.message) {
            addPokemonElement(data, list)
        } else {
            console.log(data)
            swal("Pokemon Overload", data.message, "warning")
        }
    })
}

function deletePokemon(id, li) {
    fetch(POKEMONS_URL + "/" + id, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        }
    })
    .then(() => li.remove())
}

//Add page elements
function displayTrainers(trainers) {
    trainers.forEach(t => {
        let card = document.createElement('div')
        let list = document.createElement('ul')
        card.className = "card"

        card.innerHTML = `
            <p>${t.name}</p>
            <button data-trainer-id=${t.id} class="add">
                Add Pokemon
            </button>
        `

        t.pokemons.forEach(p => {
            addPokemonElement(p, list)
        })

        card.appendChild(list)
        main().appendChild(card)
    })
}

function addPokemonElement(pokemon, ul) {
    let li = document.createElement('li')
    li.innerHTML = `
        ${pokemon.nickname} (${pokemon.species})
        <button data-pokemon-id=${pokemon.id} class="release">
            Release
        </button>
    `
    ul.appendChild(li)
}


function handleClick(e) {
    if(e.target.matches(".add")) {
        let id = e.target.dataset.trainerId
        let list = e.target.parentElement.querySelector('ul')
        createPokemon(id, list)
    } else if(e.target.matches(".release")) {
        let id = e.target.dataset.pokemonId
        let li = e.target.parentElement
        deletePokemon(id, li)
    }
}