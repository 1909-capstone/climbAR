import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
  withRouter
} from 'react-router-dom';
import { connect } from 'react-redux';
import CreateRoute from './CreateRoute';
import Home from './Home';
import Navigation from './Navigation';
import Signup from './Signup';
import Toast from './Toast';
import { fetchUser } from '../redux/thunks/userThunks';
import CreateRoute from './CreateRoute';
import Home from './Home';
import Navigation from './Navigation';
import Login from './Login';

class Root extends Component {
  // componentDidMount() {
  //   const { fetchUser } = this.props;
  //   //console.log(document.cookie) returns empty
  //   let fetchUserResult = fetchUser();
  //   console.log(fetchUserResult);
  //   // document.cookie
  //   //   .split(';')
  //   //   .filter(c => /session_id=/.test(c))[0]
  //   //   .replace(/session_id=/, '')
  //   //   .replace(/ /, '')
  //   //test if fetchUserResult is a string or not
  //   //if it is a string, login is required
  // }
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

const mapStateToProps = ({ statusMessage }) => ({ statusMessage });

export default connect(mapStateToProps)(Root);
const mapState = state => {
  const user = state.user;
  return { user };
};

const mapDispatch = dispatch => {
  return {
    fetchUser: sessionId => dispatch(fetchUser(sessionId))
  };
};
export default connect(mapState, mapDispatch)(Root);
