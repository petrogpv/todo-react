import React, {Component} from 'react';
import PropTypes from 'prop-types';

import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

import {setTodoDone, deleteTodo, archiveTodo, addTodo, editTodo, searchFilter, fetchTodos} from '../utils/todoActions';
import TodoList from './TodoList';


export class TodoListContainer extends Component {

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
        return <TodoList {...this.props} />
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


export default connect(mapStateToProps, mapDispatchToProps)(TodoListContainer);