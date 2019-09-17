// ----------------------- SCOPE

  // let teacher = "Ann";
  // console.log("In Globlal scope: ", teacher)
  //
  // function innerFunc(){
  //   // let teacher = "Paul";
  //   console.log("In innerFunc scope: ", teacher)
  //
  // }
  //
  // function outerFunc(){
  //   // debugger
  //
  //   let teacher = "Bruno";
  //
  //   console.log("In outerFunc scope: ", teacher)
  //
  //
  //   innerFunc();
  //
  // }
  //
  // outerFunc();

// ----------------------- ITERATORS
function ourEach(array, callback){
	// iterates through an array,
  // invokes the callback per element (with that element passed in as argument)
	for (let i = 0; i < array.length; i++){
		callback(array[i])
	}
	return array
}

function ourMap(array, callback){
	let newArray = []
	for(let i = 0; i < array.length; i++){
		let return_of_cb = callback(array[i])
		newArray.push(return_of_cb)
	}
	return newArray
}

function ourMapCallback(cerealObj){
  return cerealObj.name
}

function ourFilterCallback(cerealObj){
	return cerealObj.calories > 100
}

function ourFilter(array, callback){
	let newArr = [];
	for (let i = 0; i < array.length; i++){
		let return_of_cb = callback(array[i]);
		if (return_of_cb === true){
			newArr.push(array[i])
		}
	}
	return newArr;
}
