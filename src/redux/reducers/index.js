import { combineReducers } from 'redux';
import memoryReducer from './memoryReducer';
import userReducer from './userReducer';

export default combineReducers({
    memories : memoryReducer,
    users : userReducer,
});