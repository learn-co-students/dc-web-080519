// It might be a good idea to add event listener to make sure this file
// only runs after the DOM has finshed loading.
document.addEventListener('DOMContentLoaded', () => {
  console.log('connected')
  fetchQuotes()
  initializeForm()
})

URL = "http://localhost:3000/quotes"
QUOTES_URL = URL+"?_embed=likes"

const fetchQuotes = () => {
  // make get request to http://localhost:3000/quotes?_embed=likes
  // take our data and render quotes to DOM
  fetch(QUOTES_URL)
  .then(r => r.json())
  .then(data => renderQuotes(data))
}

const renderQuotes = (quotes) => {
  // console.log(quotes)
  quotes.forEach(quote => renderQuote(quote))
}

const renderQuote = (quoteObj) => {
  if(!quoteObj.likes){
    quoteObj.likes = []
  }
  // console.log(quoteObj);
  let li = document.createElement('li')
  li.innerHTML = `
  <blockquote class="blockquote" data-quote-id="${quoteObj.id}">
    <p class="mb-0">${quoteObj.quote}</p>
    <footer class="blockquote-footer">${quoteObj.author}</footer>
    <br>
    <button class='btn-success'>Likes: <span>${quoteObj.likes.length}</span></button>
    <button class='btn-danger'>Delete</button>
  </blockquote>
  `

  // let likeBtn = document.createElement('button')
  // likeBtn.className = "btn-success"
  // likeBtn.innerText = "Likes:"
  //
  // let span = document.createElement('span')
  // likeBtn.appendChild(span)
  // span.innerText = quoteObj.likes.length
  //
  // let delBtn = document.createElement('button')
  // delBtn.className = 'btn-danger'
  // delBtn.innerText = "Delete"
  //
  // li.querySelector('blockquote').append(likeBtn, delBtn)

  let likeBtn = li.querySelector('.btn-success')
  likeBtn.addEventListener('click', handleLikes)

  let delBtn = li.querySelector('.btn-danger')
  delBtn.addEventListener('click', handleDelete)

  // let span = li.querySelector('.btn-success').firstElementChild
  // if(!quoteObj.likes){
  //    span.innerText = 0
  // } else {
  //     span.innerText = quoteObj.likes.length
  // }
  document.getElementById('quote-list').appendChild(li)
}

const initializeForm = () => {
  const form = document.querySelector('#new-quote-form')
  form.addEventListener('submit', handleForm)
}

const handleForm = (e) => {
  e.preventDefault()
  const newQuoteField = document.getElementById('new-quote')
  const authorField = document.getElementById('author')
  let quoteText = newQuoteField.value
  let authorText = authorField.value
  // debugger
  // save quote to database with POST request
  let formData = {
    quote: quoteText,
    author: authorText
  }

  let configObj = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json"
    },
    body: JSON.stringify(formData)
  }

  fetch(URL, configObj)
  .then(r => r.json())
  .then(data => {renderQuote(data)})

  // renderQuote(formData)
  // add it to the dom
  document.getElementById('new-quote-form').reset()
}

const handleLikes = (e) => {
  // add a like to the quote
  // make a POST fetch to 3000/likes

  debugger

  let quoteId = parseInt(e.target.parentElement.dataset.quoteId)

  let configObj = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json"
    },
    body: JSON.stringify({
      quoteId: quoteId
    })
  }
  fetch('http://localhost:3000/likes', configObj)
  .then(r => {
    if(r.status === 201){
      const likeCount = e.target.querySelector('span')
      likeCount.innerText = parseInt(likeCount.innerText)+1
    }
  })
}

const handleDelete = (e) => {

  let configObj = {
    method: "DELETE"
  }

  let quoteId = e.target.parentElement.dataset.quoteId
  // make DEL fetch
  fetch(`${URL}/`+quoteId, configObj)
  .then(r => e.target.parentElement.remove())
}
