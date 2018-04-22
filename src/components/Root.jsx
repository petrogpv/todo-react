import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import App from './App';
import NotFound from './NotFound';

import '../styles/App.css';


// here would go some application default layout, if it exist
// in our case just simple router
const Root = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={App} />
      <Route path="*" component={NotFound} />
    </Switch>
  </Router>
);


export default Root;