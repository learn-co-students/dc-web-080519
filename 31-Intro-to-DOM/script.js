console.log("connect")

function addInstructor(firstName, lastName, email){
  let tbody = document.querySelector("tbody")
  tbody.innerHTML += `
      <tr id="row-3">
        <td class="firstName">${firstName}</td>
        <td class="lastName">${lastName}</td>
        <td class="email">${email}</td>
      </tr>
  `
}

// function addInstructor(firstName, lastName, email){
//   let tbody = document.querySelector("tbody")
//
//   //create the tr
//   let trElement = document.createElement("tr")
//
//   //add the tr to the tbody that I selected on line 4
//   tbody.appendChild(trElement)
//
//   //create first name td element
//   let firstNameEl = document.createElement("td")
//   trElement.appendChild(firstNameEl) //apend to DOM here
//   firstNameEl.innerText = firstName  //edit the node here
//
//   let lastNameEl = document.createElement("td")
//   lastNameEl.innerText = lastName   //edit the node first
//   trElement.appendChild(lastNameEl) //append it to the DOM
//
//   let emailEl = document.createElement("td")
//   emailEl.innerText = email   //edit the node first
//   trElement.appendChild(emailEl) //append it to the DOM
// }






//
