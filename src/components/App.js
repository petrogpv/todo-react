import React, {Component} from 'react';
import logo from '../styles/logo.svg';
import TodoList from './TodoListContainer';
import * as filter from '../utils/constants';



import '../styles/App.css';

export class Todo extends Component {
    render() {
        return (
            <div className="App">
                <Header/>
                <TodoComponent/>
            </div>
        );
    }
}

export class Done extends Component {
    render() {
        return (
            <div className="App">
                <Header/>
                <DoneComponent/>
            </div>
        );
    }
}

class Header extends Component {
    render() {
        return (
            <div>
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <h1 className="App-title">Welcome to TODO</h1>
                </header>
            </div>
        );
    }
}

class TodoComponent extends Component {
    render() {
        return (
            <div>
                <TodoList  filter={filter.FILTER_UNDONE}/>
            </div>
        );
    }
}

class DoneComponent extends Component {
    render() {
        return (
            <div>
                <TodoList filter={filter.FILTER_DONE}/>
            </div>
        );
    }
}
