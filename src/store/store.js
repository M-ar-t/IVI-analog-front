import { combineReducers } from 'redux'
import {configureStore} from '@reduxjs/toolkit'
import AuthReducer from './authReducer'
import FilmsReducer from './filmsReducer'

let reducers = combineReducers({
  AuthReducer: AuthReducer,
  FilmsReducer: FilmsReducer,
})
const store = configureStore({
  reducer:reducers,
  middleware: getDefaultMiddleware =>
  getDefaultMiddleware({
    serializableCheck: false,
  })
})

export default store
