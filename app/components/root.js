import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom';
import { fetchUser } from '../redux/thunks/userThunks';
import CreateRoute from './CreateRoute';
import Home from './Home';
import Navigation from './Navigation';
import Login from './Login';

class Root extends Component {
  componentDidMount() {
    const { fetchUser } = this.props;
    let fetchUserResult = fetchUser(
      document.cookie
        .split(';')
        .filter(c => /session_id=/.test(c))[0]
        .replace(/session_id=/, '')
        .replace(/ /, '')
    );
    //test if fetchUserResult is a string or not
    //if it is a string, login is required
  }
  render() {
    return (
      <Router>
        <div>
          <Navigation />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/login" component={Login} />
            <Route exact path="/admin/create" component={CreateRoute} />
            <Redirect to="/" />
          </Switch>
        </div>
      </Router>
    );
  }
}

const mapState = ({ user }) => {
  user;
};

const mapDispatch = dispatch => {
  return {
    fetchUser: sessionId => dispatch(fetchUser(sessionId))
  };
};
export default connect(mapState, mapDispatch)(Root);
