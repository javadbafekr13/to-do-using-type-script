import { combineReducers } from "redux";
import todoReducer from './reducer';
import cardsReducer from './add-card-reducer';
import timeReducer  from './timeReducer';
const rootreducer = combineReducers({
    time: timeReducer,
    todos: todoReducer,
    addcard: cardsReducer,
});export default rootreducer;

