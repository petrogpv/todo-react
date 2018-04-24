import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Button, ListGroupItem} from 'react-bootstrap';

export class Todo extends Component {

    static propTypes = {
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

    constructor(props) {
        super(props);
        console.info(props);
        this.state = {
            todo: props.todo,
            setDone: props.setDone,
            deleteTodo: props.deleteTodo,
            archiveTodo: props.archiveTodo
        };
    }

    render() {
        return (
            <ListGroupItem className="list-group-item list-group-item-action d-flex w-90 h=90 justify-content-between">
                <h4 className="mb-1">{this.state.todo.task}</h4>
                <a>
                    {!this.state.todo.archived ?
                        <Button type="button" className="btn btn-success" onClick={(e) => {
                            e.preventDefault();
                            this.state.setDone(this.state.todo, !this.state.todo.done)
                        }}>{this.state.todo.done ? 'Mark Undone' : 'Mark Done'}</Button> : ''
                    }

                    <Button type="button" className="btn btn btn-secondary" onClick={(e) => {
                        e.preventDefault();
                        this.state.archiveTodo(this.state.todo, !this.state.todo.archived)
                    }}> {!this.state.todo.archived ? 'Archive' : 'UnArchive'}</Button>

                    {!this.state.todo.archived ?
                        <Button type="button" className="btn btn-danger" onClick={(e) => {
                            e.preventDefault();
                            this.state.deleteTodo(this.state.todo.id)
                        }}>Delete</Button> : ''
                    }
                    {!this.state.todo.archived ?
                        <Button type="button" className="btn btn-info" onClick={(e) => {
                            e.preventDefault();
                            this.state.editTodo(this.state.todo.id)
                        }}>Edit</Button> : ''
                    }
                </a>
            </ListGroupItem>
        )
    }
}

export default Todo;