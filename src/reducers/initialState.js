import { Record } from 'immutable';
import * as types from '../utils/constants';


const TodoState = new Record({
  todos: [],
  filterChange: types.FILTER_ALL,
  filterSearch: ''
});

export default TodoState;