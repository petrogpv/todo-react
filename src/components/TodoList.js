import React, {Component} from 'react';
import PropTypes from 'prop-types';

import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {ListGroup} from 'react-bootstrap';
import {setTodoDone, deleteTodo, archiveTodo, addTodo, editTodo, searchFilter, fetchTodos} from '../utils/todoActions';
import Todo from './Todo';
import AddTodo from './AddTodo';
import FilterSearch from './FilterSearch';
import * as constants from "../utils/constants";


export class TodoList extends Component {

    static propTypes = {
        filter: PropTypes.string.isRequired,
        todos: PropTypes.arrayOf(PropTypes.shape({
            id: PropTypes.number.isRequired,
            task: PropTypes.string.isRequired,
            done: PropTypes.bool.isRequired,
            deleted: PropTypes.bool.isRequired,
            archived: PropTypes.bool.isRequired,
        })).isRequired,
        setTodoDone: PropTypes.func.isRequired,
        deleteTodo: PropTypes.func.isRequired,
        archiveTodo: PropTypes.func.isRequired,
        addTodo: PropTypes.func.isRequired,
        editTodo: PropTypes.func.isRequired,
        searchFilter: PropTypes.func.isRequired,
        fetchTodos: PropTypes.func.isRequired
    };

    componentDidMount() {
        this.props.fetchTodos();
    }

    render() {
        return (
            <div className="d-flex flex-column">
                {this.props.filter === constants.FILTER_UNDONE ? <AddTodo addTodo={this.props.addTodo}/> : ''}
                <ListGroup className="list-group p-3">
                    {this.props.todos
                        .filter(todo =>
                            this.props.filter === constants.FILTER_ARCHIVED ?
                                todo.archived :
                                this.props.filter === constants.FILTER_DONE ?
                                    todo.done && !todo.archived :
                                    !todo.done && !todo.archived)
                        .map((todo) => <Todo key={`TODO#ID_${todo.id}`} todo={todo} setDone={this.props.setTodoDone}
                                              deleteTodo={this.props.deleteTodo} archiveTodo={this.props.archiveTodo} editTodo={this.props.editTodo}/>)}
                </ListGroup>
                <FilterSearch searchFilter={searchFilter}/>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    todos: state.todoReducer.todos
});

const mapDispatchToProps = dispatch => bindActionCreators({
    setTodoDone,
    deleteTodo,
    archiveTodo,
    addTodo,
    editTodo,
    searchFilter,
    fetchTodos,
}, dispatch);


export default connect(mapStateToProps, mapDispatchToProps)(TodoList);