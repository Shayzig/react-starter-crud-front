import { combineReducers, compose, legacy_createStore as createStore } from 'redux'
import { itemReducer } from './reducers/item.reducer'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const rootReducer = combineReducers({
    itemModule: itemReducer
    
})

export const store = createStore(rootReducer, composeEnhancers())

window.gStore = store