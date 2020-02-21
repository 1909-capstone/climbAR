import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom';
import CreateRoute from './CreateRoute';
import Home from './Home';
import Navigation from './Navigation';

class Root extends Component {
  render() {
    return (
      <Router>
        <div>
          <Navigation />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/admin/create" component={CreateRoute} />
            <Redirect to="/" />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default Root;
