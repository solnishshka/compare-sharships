import { combineReducers } from 'redux'
import comparedStarshipsReducer from './comparedStarshipsReducer';
 
const rootReducer = combineReducers({
    comparedStarshipsReducer,
})
 
export default rootReducer;