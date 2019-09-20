//On page load
document.addEventListener('DOMContentLoaded', () => {
  addBtn.addEventListener('click', toggleForm)
  toyForm.addEventListener('submit', handleFormSubmission)
  toyBox.addEventListener('click', handleToyBoxClick)
  getToys()
})


//URL
const url = "http://localhost:3000/toys"


//Retrieve page elements
const addBtn = document.querySelector('#new-toy-btn')
const toyForm = document.querySelector('.container')
const toyBox = document.querySelector("#toy-collection")


//State
let addToy = false


//DB Interaction
function getToys() {
  fetch(url)
  .then(res => res.json())
  .then(toys => displayToys(toys))
}

function postToy(toy) {
  fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Accepts": "application/json"
    },
    body: JSON.stringify(toy)
  })
  .then(res => res.json())
  .then(toy => addToyCard(toy))
}

function updateLikes(p) {
  fetch(url + "/" + p.dataset.toy, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
      "Accepts": "application/json"
    },
    body: JSON.stringify({likes: parseInt(p.textContent) + 1})
  })
  .then(res => res.json())
  .then(updatedToy => {
    p.textContent = `${updatedToy.likes} Likes`
  })
}


//Event handlers
function toggleForm() {
  addToy = !addToy
  if (addToy) {
    toyForm.style.display = 'block'
  } else {
    toyForm.style.display = 'none'
  }
}

function handleFormSubmission(e) {
  e.preventDefault()

  let newToy = {
    name: e.target.name.value,
    image: e.target.image.value,
    likes: 0
  }

  postToy(newToy)
  e.target.reset()
  toggleForm()
}

function handleToyBoxClick(e) {
  if(e.target.matches(".like-btn")) {
    handleLikeClick(e)
  }
}

function handleLikeClick(e) {
  let p = e.target.parentElement.querySelector('p')
  updateLikes(p)
}


//Add page elements
function displayToys(toyArray) {
  toyArray.forEach(toy => {
    addToyCard(toy)
  })
}

function addToyCard(toy) {
  let card = document.createElement('div')
  card.className = "card"

  card.innerHTML = `
    <h2>${toy.name}</h2>
    <img class="toy-avatar" src=${toy.image}></img>
    <p data-toy=${toy.id}>${toy.likes} Likes</p>
    <button class="like-btn">Like 💛</button>
  `

  toyBox.appendChild(card)
}