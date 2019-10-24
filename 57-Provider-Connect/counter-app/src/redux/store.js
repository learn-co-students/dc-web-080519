import {createStore} from 'redux'
import red from './reducer'

let store = createStore(red, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

export default store
