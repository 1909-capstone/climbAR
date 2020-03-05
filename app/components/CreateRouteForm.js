import React, { Component } from 'react';
import { htmlDate } from '../utils';
import { connect } from 'react-redux';
import CreateCanvasDimensions from './CreateCanvasDimensions';
import CreateRouteGrade from './CreateRouteGrade';
import CreateRouteExpiration from './CreateRouteExpiration';
import CreateRouteHoldsColor from './CreateRouteHoldsColor';
import CreateRoute from './CreateRoute';
import { setRouteModel } from '../redux/actions';
import Progressbar from './Progressbar';

class CreateRouteForm extends Component {
  state = {
    step: 1,
    //passing the percentage to the progress bar
    percentage: 0,
    areaHeight: '',
    areaWidth: '',
    grade: '',
    endDate: htmlDate(14),
    holdColor: ''
  };
  //Proceed to the next step
  nextStep = () => {
    const { step } = this.state;
    this.setState({
      step: step + 1,
      percentage: this.state.percentage + 20
    });
  };
  //Go back to the previous step
  prevStep = () => {
    const { step } = this.state;
    this.setState({
      step: step - 1,
      percentage: this.state.percentage - 20
    });
  };
  // handles the fields change, each input will have its own state
  handleInput = e => {
    this.props.setRouteModel({ [e.target.name]: e.target.value });
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
          <div>
            <Progressbar percentage={this.state.percentage} />
            <CreateCanvasDimensions
              nextStep={this.nextStep}
              handleChange={this.handleInput}
            />
          </div>
        );
      case 2:
        return (
          <div>
            <Progressbar percentage={this.state.percentage} />
            <CreateRouteGrade
              nextStep={this.nextStep}
              prevStep={this.prevStep}
              handleChange={this.handleInput}
            />
          </div>
        );
      case 3:
        return (
          <div>
            <Progressbar percentage={this.state.percentage} />
            <CreateRouteExpiration
              nextStep={this.nextStep}
              prevStep={this.prevStep}
              handleChange={this.handleInput}
            />
          </div>
        );
      case 4:
        return (
          <div>
            <Progressbar percentage={this.state.percentage} />
            <CreateRouteHoldsColor
              nextStep={this.nextStep}
              prevStep={this.prevStep}
              handleChange={this.handleInput}
            />
          </div>
        );
      case 5:
        return (
          <div>
            <Progressbar percentage={this.state.percentage} />
            <CreateRoute
              prevStep={this.prevStep}
              handleChange={this.handleInput}
              values={values}
              nextStep={this.nextStep}
            />
          </div>
        );
    }
  }
}

const mapState = ({ routeModel }) => ({ routeModel });

const mapDispatch = dispatch => {
  return {
    setRouteModel: model => dispatch(setRouteModel(model))
  };
};
export default connect(mapState, mapDispatch)(CreateRouteForm);
