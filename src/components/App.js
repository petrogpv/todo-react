import React, { Component } from 'react';
import logo from '../styles/logo.svg';
import TodoList from './TodoListContainer';


import '../styles/App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>

          <div className="main-content">
              <TodoList />
          </div>
      </div>
    );
  }
}

export default App;
