import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Header from "./Header";
import * as constant from "../utils/constants";
import TodoList from "./TodoList";

import '../styles/App.css';

const Root = () => (
    <Router>
        <div className="App">
            <Header/>
            <Switch>
                <Route exact path="/" component={Todo}/>
                <Route exact path="/done" component={Done}/>
                <Route exact path="/archived" component={Archive}/>
                <Route path="*" component={NotFound}/>
            </Switch>
        </div>
    </Router>
);

const Todo  = () => (
    <TodoList filter={constant.FILTER_UNDONE}/>
);

const Done  = () => (
    <TodoList filter={constant.FILTER_DONE}/>
);

const Archive  = () => (
    <TodoList filter={constant.FILTER_ARCHIVED}/>
);

const NotFound = () => (
    <div>
        <h1 className="App-title">Page Not Found</h1>
    </div>
);

export default Root;