import paintingsData from '../paintings.json'
import {combineReducers} from 'redux'

//store state
let initialState = {
  searchText: "",
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

let paintingsReducer = (state=initialState.paintings, action) => { //paintings is an []
  switch (action.type) {
    case "VOTE_FOR_PAINTING":
      return state.map(painting => {
        return painting.id === action.payload ? {...painting, votes: painting.votes + 1} : painting
      })
    case "SAVE_PAINTING":
      return state.map(painting => {
        if(painting.id === action.payload.paintingId){
          return {
            ...painting,
            title: action.payload.title,
            artist: {
              ...painting.artist,
              name: action.payload.name,
              birthday: action.payload.birthday,
              deathday: action.payload.deathday
            }
          }
        }
      return painting
    })
    default:
      return state
  }
}

let rootReducer = combineReducers({
  //state: reducerForState
  searchText: searchTextReducer,
  paintings: paintingsReducer
})

export default rootReducer
//
// let reducer = (state=initialState, action) => {
//   switch (action.type) {
//     case "CHANGE_SEARCH":
//       return {...state, searchText: action.payload}
//     default:
//       return state
//   }
// }
