function fetchAllCats(){
    fetch('http://localhost:3000/cats')
    .then(res => res.json())
    .then(catsArray => {
        catsArray.forEach((cat) => {renderCat(cat)})
    })
}

function renderCat(catObj){
    //render that card object onto the page
    let catContainer = document.querySelector("#cats")
    let catCard = document.createElement("div")
    catCard.classList.add("ui", "card")
    catContainer.appendChild(catCard)
    catCard.innerHTML = `
        <div class="image">
            <img src=${catObj.image}>
        </div>
        <div class="content">
            <a class="header">${catObj.name}</a>
            <div class="meta">
            <span class="date">${catObj.available ? "Available" : "Not Available"}</span>
            </div>
            <div class="description">
            Age: ${catObj.age}
            </div>
        </div>
        <div class="extra content">
    </div>`
    //Create an <li> and append it in extra content
    if(catObj.hobbies){
        catObj.hobbies.forEach((hobby) => {
            let li = document.createElement("li")
            catCard.querySelector(".extra.content").appendChild(li)
            li.innerText = `${hobby.name}`
        })
    }
}

function createCat(event){
    event.preventDefault()
    fetch('http://localhost:3000/cats', {
        method: "POST",
        headers: {
            "Content-Type" : "application/json",
            "Accept" : "application/json"
        },
        body: JSON.stringify({
            name: document.querySelector("form")[0].value,
            image: document.querySelector("form")[2].value,
            age: parseInt(document.querySelector("form")[1].value),
            available: document.querySelector("form")[3].checked
        })
    }).then(res => res.json())
    .then(newCat => {
        console.log(newCat)
        renderCat(newCat)
    })
}
  