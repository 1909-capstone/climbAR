import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import {
  BrowserRouter as Router,
  withRouter,
  Switch,
  Route,
  Redirect
} from 'react-router-dom';
import CreateRoute from './CreateRoute';
import Home from './Home';
import Navigation from './Navigation';
import Signup from './Signup';
import Toast from './Toast';
import { fetchUser } from '../redux/thunks/userThunks';
import Login from './Login';
import ClimbingRoutes from './ClimbingRoutes';
import SingleClimbingRoute from './SingleClimbingRoute';

class Root extends Component {
  componentDidMount() {
    // dont authenticate if user is trying to signup or login
    if (
      this.props.location.pathname.includes('/signup') ||
      this.props.location.pathname.includes('/login')
    ) {
      return;
    }
    axios
      .get('/auth')
      .then(resp => {
        const { loggedIn } = resp.data;
        if (!loggedIn) {
          this.props.history.push('/login');
        }
      })
      .catch(e => {
        console.error(e);
      });
  }
  render() {
    const { status, text } = this.props.statusMessage;
    return (
      <div>
        <Navigation />
        <Toast status={status} message={text} />
        <Switch>
          <Route path="/login" component={Login} />
          <Route exact path="/signup" component={Signup} />
          <Route exact path="/" component={Home} />
          <Route exact path="/admin/create" component={CreateRoute} />
          <Route exact path="/climbingroutes" component={ClimbingRoutes} />
          <Route path="/climbingroutes/:id" component={SingleClimbingRoute} />
          <Redirect to="/" />
        </Switch>
      </div>
    );
  }
}

const mapState = state => {
  const user = state.user;
  const statusMessage = state.statusMessage;
  return { user, statusMessage };
};

// const mapDispatch = dispatch => {
//   return {
//     fetchUser: sessionId => dispatch(fetchUser(sessionId))
//   };
// };
export default connect(mapState)(withRouter(Root));
