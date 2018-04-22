import { combineReducers } from 'redux';

// custom reducers
import todoReducer from './todoReducer';

const appReducer = combineReducers({
  // here will go real reducers
  todoReducer
});

export default appReducer;