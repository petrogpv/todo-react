import InitialState from './initialState';
import * as types from '../utils/constants';

const initialState = new InitialState();

const todoReducer = (state = initialState, action) => {

  switch(action.type) {
    case types.SET_TODO_DONE_SUCCESS:
      return state.set('todos', state.todos.map((todo) => todo.id === action.payload.id ? { ...todo, done: action.payload.done } : todo));

    case types.SET_TODO_ARCHIVED_SUCCESS:
      return state.set('todos', state.todos.map((todo) => todo.id === action.payload.id ? { ...todo, archived: action.payload.archived } : todo));

    case types.DELETE_TODO_SUCCESS:
      return state.set('todos', state.todos.filter((todo) => todo.id !== action.payload.id));
    
    case types.ADD_TODO_SUCCESS:
      return state.set('todos', [...state.todos, action.payload.todo]);

      case types.EDIT_TODO_SUCCESS:
      return state.set('todos', state.todos.map((todo) => todo.id === action.payload.id ? { ...todo, task: action.payload.task } : todo));

    case types.FETCH_TODOS_SUCCESS:
      return state.set('todos', [...action.payload.todos]);

    case types.CHANGE_FILTER:
      return state.set('filterChange', action.payload.filterChange);

    case types.SEARCH_FILTER:
      return state.set('todos',  state.todos.filter(todo => todo.task.includes(action.payload.searchFilter)));

    default:
      return state;
  }
}

export default todoReducer;