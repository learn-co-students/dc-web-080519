let initialState = {
  count: 1,
  name: "Ann"
}

let reducer = (oldState=initialState, action) => {
  switch (action.type) {
    case "ADD":
      return {...oldState, count: oldState.count + action.payload} //new state
    case "SUBTRACT":
      return {...oldState, count: oldState.count - action.payload}
    default:
      return oldState
  }
}

export default reducer
