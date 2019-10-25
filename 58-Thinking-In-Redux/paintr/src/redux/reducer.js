import paintingsData from '../paintings.json'
import {combineReducers} from 'redux'

//store state
let initialState = {
  searchText: "hello",
  paintings: paintingsData.paintings
}

let searchTextReducer = (state=initialState.searchText, action) => { //ONLY gonna concern itself with searchText
  switch (action.type) {
    case "CHANGE_SEARCH":
      return action.payload
    default:
      return state
  }
}

let paintingsReducer = (state=initialState.paintings, action) => {
  return state
}

let rootReducer = combineReducers({
  //state: reducerForState
  searchText: searchTextReducer,
  paintings: paintingsReducer
})

export default rootReducer

let reducer = (state=initialState, action) => {
  switch (action.type) {
    case "CHANGE_SEARCH":
      return {...state, searchText: action.payload}
    default:
      return state
  }
}
