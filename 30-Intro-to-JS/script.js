// const arr = [1, 2, 3]
// arr.key = "new value"

// function hello(name) {
//     console.log(name)
//     debugger
//     // return `Hello, ${name}`
// }

// const newObj = {mod: "3", location: "Washington DC"}

// Pass by value
// function addTwo(x) {
//     let y = x
//     y = y + 2
//     debugger
//     return y
// }

// let a1 = 3
// let b1 = addTwo(a1)


// console.log(a1, b1)

// function addTwoReference(x) {
//     let y = x
//     y.num = y.num + 2
//     return y
// }

// let a2 = {num: 3}
// let b2 = addTwoReference(a2)

// console.log(a2, b2)

// console.log(a)

let a = 0

// Function Expression
const newFunc = function() {console.log( "hello")}

console.log(newFunc)
// Function Declaration
function newerFunc() {
    return "hello again"
}

// Arrrow Function
const newestFunc = () =>  2 + 3