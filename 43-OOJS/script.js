// let ann = {
//   firstName: "Ann",
//   lastName: "Duong"
// }
//
// let paul = {
//   firstName: "Paul",
//   lastName: "Nicholsen"
// }
//
// function instructorFactory(firstName, lastName){
//   return {
//     firstName: firstName,
//     lastName: lastName
//   }
// }
//
// let rob = instructorFactory("Rob", "Cobb")

//ES5 JavaScript
// function Instructor(firstName, lastName){
//   //this = {} brand new empty object
//   this.firstName = firstName
//   this.lastName = lastName
// }
//
// Instructor.prototype.greet = function(){
//   return (`${this.firstName} says hi`)
// }
//
// Instructor.prototype.goHome = function(){
//   return (`${this.firstName} is leaving`)
// }
//
// let ann = new Instructor("Ann", "Duong")
// let paul = new Instructor("Paul", "Nicholsen")
// let jc = new Instructor("Jerry", "Chang")


//ES6
class Person {
  constructor(firstName, lastName){
    this.firstName = firstName
    this.lastName = lastName
  }

  greet(){
    console.log(`${this.firstName} says hi`)
  }
}

class Instructor extends Person {
  // static all = []
  constructor(firstName, lastName, employeeID){
    super(firstName, lastName)
    this.employeeID = employeeID
  }

  goHome(){
    console.log(`${this.firstName} is leaving`)
  }

  static teach(){
    console.log("teachers gonna teach")
  }

}

let ann = new Instructor("Ann", "Duong", 2)
let paul = new Instructor("Paul", "Nicholsen", 1)
let jane = new Person("Jane", "Doe")










//
