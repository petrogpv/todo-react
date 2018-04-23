import React from 'react';
import PropTypes from 'prop-types';
import {Button, ListGroupItem} from 'react-bootstrap';

const Todo = ({todo, setDone, deleteTodo, archiveTodo}) => (
    <ListGroupItem className="list-group-item list-group-item-action d-flex w-90 h=90 justify-content-between">
        <h4 className="mb-1">{todo.task}</h4>
        <a>
            {!todo.archived ?
                <Button type="button" className="btn btn-success" onClick={(e) => {
                e.preventDefault();
                setDone(todo, !todo.done)
            }}>{todo.done ? 'Mark Undone' : 'Mark Done'}</Button> : ''}

            <Button type="button" className="btn btn btn-secondary" onClick={(e) => {
                e.preventDefault();
                archiveTodo(todo.id)
            }}> {!todo.archived ? 'Archive' : 'UnArchive'}</Button>

            {!todo.archived ?
                <Button type="button" className="btn btn-danger" onClick={(e) => {
                    e.preventDefault();
                    deleteTodo(todo.id)
                }}>Delete</Button> : ''}
        </a>
    </ListGroupItem>
);

Todo.propTypes = {
    todo: PropTypes.shape({
        id: PropTypes.number.isRequired,
        task: PropTypes.string.isRequired,
        done: PropTypes.bool.isRequired,
        deleted: PropTypes.bool.isRequired,
        archived: PropTypes.bool.isRequired
    }).isRequired,
    setDone: PropTypes.func.isRequired,
    deleteTodo: PropTypes.func.isRequired,
    archiveTodo: PropTypes.func.isRequired,
};

export default Todo;