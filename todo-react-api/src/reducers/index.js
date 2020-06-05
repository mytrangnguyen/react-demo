import { combineReducers } from 'redux';
import todos from './todo';

const appReducers = combineReducers({
    todos,
});

export default appReducers;