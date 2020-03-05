import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  withRouter,
  Switch,
  Route,
  Redirect
} from 'react-router-dom';
import { connect } from 'react-redux';
import axios from 'axios';
import { fetchUser } from '../redux/thunks/UserThunks';
import CreateRoute from './CreateRoute';
import Home from './Home';
import Navigation from './Navigation';
import Signup from './Signup';
import Toast from './Toast';
import Login from './Login';
import ClimbingRoutes from './ClimbingRoutes';
import SingleClimbingRoute from './SingleClimbingRoute';
import RouteModel from './RouteModel';
import { getCookie } from '../utils';
import Profile from './Profile';
import ImageUpload from './ImageUpload';
import CreateRouteForm from './CreateRouteForm'; 
import CreateRouteOptions from './CreateRouteOptions';

class Root extends Component {
  // componentDidMount() {
  //   // dont authenticate if user is trying to signup or login
  //   if (
  //     this.props.location.pathname.includes('/signup') ||
  //     this.props.location.pathname.includes('/login')
  //   ) {
  //     return;
  //   }
  //   axios
  //     .get('/auth')
  //     .then(resp => {
  //       const { loggedIn } = resp.data;
  //       if (!loggedIn) {
  //         this.props.history.push('/login');
  //       } else {
  //         const { fetchUser } = this.props;
  //         if (document.cookie.split(';')[0].length > 0) {
  //           console.log('calling fetchUser');
  //           fetchUser(getCookie());
  //         }
  //       }
  //     })
  //     .catch(e => {
  //       console.error(e);
  //     });
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
            <Route exact path="/" component={Home} />
            <Route exact path="/admin/create" component={CreateRouteOptions}/>
            <Route exact path="/climbingroutes" component={ClimbingRoutes} />
            <Route path="/climbingroutes/:id" component={SingleClimbingRoute} />
            <Route path="/model/:id" component={RouteModel} />
            <Route exact path="/signup" component={Signup} />
            <Route exact path="/profile" component={Profile} />
            <Route exact path="/admin/upload" component={ImageUpload} /> 
            <Route exact path="/admin/create/form" component={CreateRouteForm} />
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

export default connect(mapState, mapDispatch)(withRouter(Root));
