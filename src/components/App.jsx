import React, {Component} from 'react';
import logo from '../styles/logo.svg';
import TodoList from './TodoListContainer';
import * as filter from '../utils/constants';
import {Navbar, Nav, NavItem} from 'react-bootstrap';

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

export class Archive extends Component {
    render() {
        return (
            <div className="App">
                <Header/>
                <ArchiveComponent/>
            </div>
        );
    }
}

class Header extends Component {
    render() {
        return (
            <div>
                <Navbar>
                    <Nav className="flex-row p-3 form-control">
                        <NavItem className="navbar-toggler " eventKey={1} href="/">Todo Tasks</NavItem>
                        <NavItem className="navbar-toggler" eventKey={2} href="/done">Done Tasks</NavItem>
                        <NavItem className="navbar-toggler" eventKey={3} href="/archived">Archived Tasks</NavItem>
                    </Nav>
                </Navbar>
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
                <TodoList filter={constant.FILTER_UNDONE}/>
            </div>
        );
    }
}

class DoneComponent extends Component {
    render() {
        return (
            <div>
                <TodoList filter={constant.FILTER_DONE}/>
            </div>
        );
    }
}

class ArchiveComponent extends Component {
    render() {
        return (
            <div>
                <TodoList filter={constant.FILTER_ARCHIVED}/>
            </div>
        );
    }
}
