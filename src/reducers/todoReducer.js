import InitialState from './initialState';
import * as types from '../utils/constants';

const initialState = new InitialState();

const todoReducer = (state = initialState, action) => {
  // if (!(state instanceof InitialState)) state = initialState.mergeDeep(state);

  switch(action.type) {
    case types.SET_TODO_DONE_SUCCESS:
      return state.set('todos', state.todos.map((todo) => todo.id === action.payload.id ? { ...todo, done: action.payload.done } : todo));

    case types.SET_TODO_ARCHIVED_SUCCESS:
    {
      console.log("action.payload.archived :" + action.payload.archived);
      return state.set('todos', state.todos.map((todo) => todo.id === action.payload.id ? { ...todo, archived: action.payload.archived } : todo)
        .filter((todo) => todo.id !== action.payload.id));
    }
    case types.DELETE_TODO_SUCCESS:
      return state.set('todos', state.todos.filter((todo) => todo.id !== action.payload.id));
    
    case types.ADD_TODO_SUCCESS:
      // return state.set('todos', [ ...state.todos, { id: getLastId(state.todos) + 1, task: action.payload.task, done: false } ]);
      state.set('todos2', [...state.todos, action.payload.todo]);
      return state.set('todos', [...state.todos, action.payload.todo]);

    case types.FETCH_TODOS_SUCCESS:
      return state.set('todos', [...action.payload.todos]);

    case types.CHANGE_FILTER:
      return state.set('filterChange', action.payload.filterChange);

    case types.SEARCH_FILTER:
      console.log("State: ");
      console.info(state.filterChange);
      return state.set('todos',  state.todos2.filter(todo => todo.task.includes(action.payload.searchFilter)));

    default:
      return state;
  }
}

export default todoReducer;