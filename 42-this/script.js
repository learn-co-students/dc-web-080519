let date = "today"

let paul = {
  firstName: "Paul",
  lastName: "Nicholsen",
  greet: greet
}

let ann = {
  firstName: "Ann",
  lastName: "Duong",
  greet: greet
}

// function greet(){
//   console.log(`${this.firstName} says hi`)
//   //this === paul
//
//   let createFullName = () => {
//     this.fullName = this.firstName + " " + this.lastName
//   }
//
//   createFullName()
// }

//other ways to manipulate the value of this
//bind()
//bind is a method that you call off of a function
//returns an exact copy of the function it was invoked
//of of, but the value of this is explicitly set

function greet(message1, message2){
  console.log(`${this.firstName} says hi! ${message1}! ${message2}!`)
  this.fullName = this.firstName + " " + this.lastName
}

let jc = {firstName: "Jerry", lastName: "Chang"}
let shannon = {firstName: "Shannon"}

let jcGreet = greet.bind(jc, "Howdy")
let shannonGreet = greet.bind(shannon, "How can I help?", "Here is help")

let shannonGreetAgain = shannonGreet.bind(ann)









//
