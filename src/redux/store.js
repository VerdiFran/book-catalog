import catalogReducer from './reducers/catalogReducer'
import {applyMiddleware, combineReducers, createStore} from 'redux'
import thunk from 'redux-thunk'
import authReducer from './reducers/authReducer'

const reducers = combineReducers({
    catalog: catalogReducer,
    auth: authReducer
})

const store = createStore(reducers, applyMiddleware(thunk))

export default store
