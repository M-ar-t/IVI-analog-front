import {combineReducers, createStore} from 'redux'
import reducer from './reducer';

// let reducers = combineReducers({
//     main: mainReducer,
 
// })

const store = createStore(reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && 
    window.__REDUX_DEVTOOLS_EXTENSION__());

export default store