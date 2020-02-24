import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
  withRouter
} from 'react-router-dom';
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
    // this will be a redux state and updated on component did mount
    let isLoggedIn = false;
    return (
      <Router>
        <div>
          <Navigation />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/admin/create" component={CreateRoute} />
            <Route exact path="/login" component={Login} />
            <Redirect to="/" />
          </Switch>
        </div>
      </Router>
      // <Router>
      //   <div>
      //     <Navigation />
      //     <Switch>
      //       <Route path="/login" component={Login} />
      //       {isLoggedIn ? (
      //         <Fragment>
      //           <Route exact path="/home" component={Home} />
      //           <Route exact path="/admin/create" component={CreateRoute} />
      //           {/* Redirect runs after res.redirect */}
      //           <Redirect to="/home" />
      //         </Fragment>
      //       ) : (
      //         <Fragment>
      //           <Redirect to="/login" />
      //         </Fragment>
      //       )}
      //     </Switch>
      //   </div>
      // </Router>
    );
  }
}

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
