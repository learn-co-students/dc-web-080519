//Review the concept of a callback

//Name: string, process: f() is our callback
//onboardNewStudent is a higher order function
// function onboardNewStudent(name, process){
//   console.log( `Welcome, ${name} to Flatiron` )
//   process()
// }
//
// function giveKeyCard(){ //callback
//   console.log("Here is your key card")
// }
//
// function giveLoanerLaptop(){ //callback
//   console.log("Here is your loaner laptop")
// }


//custom map function
function myMapper(array, callback){
  let newArray = []
  for(let i=0; i < array.length; i++){
    newArray.push(callback( array[i] ))
  }
  return newArray
}

function myFilter(array, callback){
  let newArray = []
  //iterate
  for(let i=0; i < array.length; i++){
    //if the callback at array[i] true
    //i is the current index
    //array[i] is the current element
    //callback(array[i]) return a boolean
    if(  callback(array[i])  ){
      newArray.push(array[i])
    }
  }
  return newArray
}

function myFind(array, callback){
  //iterate
  for(let i=0; i < array.length; i++){
    //if the callback at array[i] true
    //i is the current index
    //array[i] is the current element
    //callback(array[i]) return a boolean
    if(  callback(array[i])  ){
      return array[i]
    }
  }
  return null
}

// console.log(myFind([1,2,3,4,5], (x)=>{return x>10}))
//=> 4




//Functions returning functions
//to create a function Factory
// function modFunctionFactory(num){ //num is a closure
//   //num is available in this scope
//   return function(name){
//     //num is available in this scope
//     console.log(`Welcome ${name} to your new Mod ${num}`)
//   }
// }
//
// let mod1 = modFunctionFactory(1)
// //mod1 is a function that takes in a name
// let mod2 = modFunctionFactory(2)
// let mod3 = modFunctionFactory(3)
// let mod4 = modFunctionFactory(4)
// let mod5 = modFunctionFactory(5)







//IIFE is a function that is only invoked once, immediately

// (function(date, location){
//   console.log(`We opened a new campus on ${date}
//     at ${location}`)
// })("Oct 2019", "NZ")



























//
