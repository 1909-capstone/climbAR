import React, { Component } from 'react';
import { htmlDate } from '../utils';
import CreateCanvasDimensions from './CreateCanvasDimensions';
import CreateRouteGrade from './CreateRouteGrade';
import CreateRouteExpiration from './CreateRouteExpiration';
import CreateRouteHoldsColor from './CreateRouteHoldsColor';
import CreateRoute from './CreateRoute';

class CreateRouteForm extends Component {
  state = {
    step: 1,
    areaHeight: 15,
    areaWidth: 10,
    grade: '',
    endDate: htmlDate(14),
    holdColor: 'Red'
  };
  //Proceed to the next step
  nextStep = () => {
    const { step } = this.state;
    this.setState({
      step: step + 1
    });
  };
  //Go back to the previous step
  prevStep = () => {
    const { step } = this.state;
    this.setState({
      step: step - 1
    });
  };
  // handles the fields change, each input will have its own state
  handleInput = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  render() {
    const {
      step,
      areaHeight,
      areaWidth,
      grade,
      endDate,
      holdColor
    } = this.state;
    //able to pass the values into the next/previous component
    const values = { step, areaHeight, areaWidth, grade, endDate, holdColor };
    switch (step) {
      case 1:
        return (
          <CreateCanvasDimensions
            nextStep={this.nextStep}
            handleChange={this.handleInput}
            values={values}
          />
        );
      case 2:
        return (
          <CreateRouteGrade
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            handleChange={this.handleInput}
            values={values}
          />
        );
      case 3:
        return (
          <CreateRouteExpiration
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            handleChange={this.handleInput}
            values={values}
          />
        );
      case 4:
        return (
          <CreateRouteHoldsColor
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            handleChange={this.handleInput}
            values={values}
          />
        );
      case 5:
        return (
          <CreateRoute
            prevStep={this.prevStep}
            handleChange={this.handleInput}
            values={values}
          />
        );
    }
  }
}

const mapState = ({ routeModel }) => ({ routeModel });

export default connect(mapState)(CreateRouteForm);
