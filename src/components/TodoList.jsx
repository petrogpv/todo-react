import React from 'react';
import PropTypes from 'prop-types';
import * as constants from '../utils/constants';
import Todo from './Todo';
import AddTodo from './AddTodo';
import FilterSearch from './FilterSearch';
import {ListGroup} from 'react-bootstrap';

// styles
import '../styles/App.css';


const TodoList = ({todos, setTodoDone, deleteTodo, archiveTodo, searchFilter, addTodo, filter}) => (
    <div className="d-flex flex-column">
        {filter === constants.FILTER_UNDONE ? <AddTodo addTodo={addTodo}/> : ''}
        <ListGroup className="list-group p-3">
            {todos
                .filter(todo => filter === constants.FILTER_ARCHIVED ? todo.archived : filter === constants.FILTER_DONE ? todo.done && !todo.archived: !todo.done && !todo.archived)
                .map((todo) => <Todo key={`TODO#ID_${todo.id}`} todo={todo} setDone={setTodoDone}
                                     deleteTodo={deleteTodo} archiveTodo={archiveTodo}/>)}
        </ListGroup>
        <FilterSearch searchFilter={searchFilter}/>
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