function fetchAllHobbies(){
    fetch('http://localhost:3000/hobbies')
    .then(res => res.json())
    .then(hobbiesArray => {
        hobbiesArray.forEach((hobby) => {renderHobby(hobby)})
    })
}

function renderHobby(hobby){
    let ul = document.querySelector("#hobbies")
    let li = document.createElement("li")
    ul.appendChild(li)
    li.innerText = `${hobby.name}: ${hobby.description}`
}