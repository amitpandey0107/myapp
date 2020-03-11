import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import get_list_reducers from '../reducers/get_list_reducers.js';


const rootReducer = combineReducers({
    get_list_reducers: get_list_reducers,
})
const appReducer = {

}
export default createStore(rootReducer, appReducer, applyMiddleware(thunk))