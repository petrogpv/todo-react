import React from 'react';
import PropTypes from 'prop-types';
import * as constants from '../utils/constants';
import Todo from './Todo';
import AddTodo from './AddTodo';
import {FilterSearchComponent} from './FilterSearchComponent';

// styles
import '../styles/App.css';



const TodoList = ({ todos, setTodoDone, deleteTodo, archiveTodo, searchFilter,  addTodo, filter}) => (
  <div>
    <AddTodo addTodo={addTodo} />
    <ul className="todo-list">
        {todos
          .filter(todo => filter === constants.FILTER_UNDONE ? !todo.done : todo.done)
          .map((todo) => <Todo key={`TODO#ID_${todo.id}`} todo={todo} setDone={setTodoDone} deleteTodo={deleteTodo} archiveTodo={archiveTodo} />)}
    </ul>
    <FilterSearchComponent searchFilter={searchFilter} todos={todos}/>
  </div>
);

TodoList.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    task: PropTypes.string.isRequired,
    done: PropTypes.bool.isRequired,
    deleted: PropTypes.bool.isRequired,
    archived: PropTypes.bool.isRequired
  })).isRequired,
  setTodoDone: PropTypes.func.isRequired,
  deleteTodo: PropTypes.func.isRequired,
  archiveTodo: PropTypes.func.isRequired,
  addTodo: PropTypes.func.isRequired,
  searchFilter: PropTypes.func.isRequired
};

export default TodoList;