import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom';
import { connect } from 'react-redux';
import CreateRoute from './CreateRoute';
import Home from './Home';
import Navigation from './Navigation';
import Signup from './Signup';
import Toast from './Toast';
import ClimbingRoutes from './ClimbingRoutes'; 
import SingleClimbingRoute from './SingleClimbingRoute';
import RouteModel from './RouteModel';

class Root extends Component {
  render() {
    const { status, text } = this.props.statusMessage;
    return (
      <Router>
        <div>
          <Navigation />
          <Toast status={status} message={text} />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/admin/create" component={CreateRoute} />
            <Route exact path="/climbingroutes" component={ClimbingRoutes}/> 
            <Route path="/climbingroutes/:id" component={SingleClimbingRoute}/>
            <Route path="/model/:id" component={RouteModel}/> 
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
