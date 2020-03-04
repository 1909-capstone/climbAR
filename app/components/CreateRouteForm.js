import React, { Component } from 'react';
import CreateCanvasDimensions from './CreateCanvasDimensions';
import { htmlDate } from '../utils';
import e from 'express';

class CreateRouteForm extends Component {
  state = {
    step: 1,
    areaHeight: 15,
    areaWidth: 10,
    grade: 'VB',
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
  handleChange = input => event => {
    this.setState({ [input]: event.target.value });
  };
  // handleInput = e => {
  //   this.setState({[e.target.name]: e.target.value})
  // }
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
            // handleChange={this.handleInput}
            values={values}
          />
        );
      case 2:
        return <h2> Select the Difficulty </h2>;
      case 3:
        return <h2> Select the expiration date </h2>;
      case 4:
        return <h2> Select the color </h2>;
      case 5:
        return <h2> Canvas </h2>;
    }
  }
}

export default CreateRouteForm;