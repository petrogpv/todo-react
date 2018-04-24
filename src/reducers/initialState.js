import { Record } from 'immutable';


const TodoState = new Record({
  todos: [],
  filterSearch: ''
});

export default TodoState;