import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
  withRouter
} from 'react-router-dom';
import CreateRoute from './CreateRoute';
import Home from './Home';
import Navigation from './Navigation';
import Signup from './Signup';
import Toast from './Toast';
import { fetchUser } from '../redux/thunks/userThunks';
import Login from './Login';

class Root extends Component {
  render() {
    const { status, text } = this.props.statusMessage;
    return (
      <Router>
        <div>
          <Navigation />
          <Toast status={status} message={text} />
          <Switch>
            <Route path="/login" component={Login} />
            <Route exact path="/home" component={Home} />
            <Route exact path="/admin/create" component={CreateRoute} />
            <Route exact path="/signup" component={Signup} />
            <Redirect to="/" />
          </Switch>
        </div>
      </Router>
    );
  }
}

const mapState = state => {
  const user = state.user;
  const statusMessage = state.statusMessage;
  return { user, statusMessage };
};

const mapDispatch = dispatch => {
  return {
    fetchUser: sessionId => dispatch(fetchUser(sessionId))
  };
};
export default connect(mapState, mapDispatch)(Root);
