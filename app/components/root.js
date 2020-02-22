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
import Login from './Login';

class Root extends Component {
  // componentDidMount(){
  //   const { fetchUser } = this.props
  //   fetchUser(
  //     document.cookie
  //     .split(';')
  //   )
  // }
  render() {
    return (
      <Router>
        <div>
          <Navigation />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path='/login' component={Login} />
            <Route exact path="/admin/create" component={CreateRoute} />
            <Redirect to="/" />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default Root;
