import { Record } from 'immutable';
import * as types from '../utils/constants';


const TodoState = new Record({
  todos: [],
  filter: types.FILTER_UNDONE
});

export default TodoState;