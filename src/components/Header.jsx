import React, {Component} from 'react';
import {Navbar, Nav, NavItem} from 'react-bootstrap';
import logo from '../styles/logo.svg';
import '../styles/App.css';

export default class Header extends Component {
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