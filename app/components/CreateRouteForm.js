import React, { Component, Fragment } from 'react';
import { htmlDate } from '../utils';
import { connect } from 'react-redux';
import CreateRouteGrade from './CreateRouteGrade';
import CreateRouteExpiration from './CreateRouteExpiration';
import CreateRouteHoldsColor from './CreateRouteHoldsColor';
import CreateRoute from './CreateRoute';
import { setRouteModel } from '../redux/actions';
import ProgressBar from 'react-bootstrap/ProgressBar';
import CreateRouteOptions from './CreateRouteOptions';
import ImageUpload from './ImageUpload';
import CreateRouteSuccess from './CreateRouteSuccess';

class CreateRouteForm extends Component {
  state = {
    step: 1,
    //passing the percentage to the progress bar
    percentage: 20,
    label: 'Grade',
    grade: '',
    endDate: htmlDate(14),
    holdColor: '',
    routeCreated: false
  };
  //Proceed to the next step
  nextStep = () => {
    const { step } = this.state;
    this.setState({
      step: step + 1,
      percentage: this.state.percentage + 20
    });
  };
  //Proceed to the next 2 steps in the case instead of 1 
  nextStepDouble = () => {
    const { step } = this.state;
    this.setState({
      step: step + 2
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
  //this will add the step count of 2, and percentage bar to 40 need it skip the cases
  uploadImageStep = () => {
    const { step } = this.state;
    this.setState({
      step: step + 2,
      percentage: this.state.percentage + 40
    });
  };
  uploadImagePrevStep = () => {
    const { step } = this.state;
    this.setState({
      step: step - 2,
      percentage: this.state.percentage - 40
    });
  };
  // handles the fields change, each input will have its own state
  handleInput = e => {
    this.props.setRouteModel({ [e.target.name]: e.target.value });
    this.setState({ [e.target.name]: e.target.value });
  };
  render() {
    const { step, grade, endDate, holdColor } = this.state;
    //able to pass the values into the next/previous component
    const values = { step, grade, endDate, holdColor };
    switch (step) {
      case 1:
        return (
          <div>
            <ProgressBar
              striped
              variant="warning"
              animated
              now={this.state.percentage}
              label={'Route Grade'}
            />
            <CreateRouteGrade
              nextStep={this.nextStep}
              prevStep={this.prevStep}
              handleChange={this.handleInput}
              values={values}
            />
          </div>
        );
      case 2:
        return (
          <div>
            <ProgressBar
              striped
              variant="warning"
              animated
              now={this.state.percentage}
              label={'Expiration Date'}
            />
            <CreateRouteExpiration
              nextStep={this.nextStep}
              prevStep={this.prevStep}
              handleChange={this.handleInput}
              values={values}
            />
          </div>
        );
      case 3:
        return (
          <div>
            <ProgressBar
              striped
              variant="warning"
              animated
              now={this.state.percentage}
              label={'Hold Color'}
            />
            <CreateRouteHoldsColor
              nextStep={this.nextStep}
              prevStep={this.prevStep}
              handleChange={this.handleInput}
              values={values}
            />
          </div>
        );
      case 4:
        return (
          <div>
            <ProgressBar
              striped
              variant="warning"
              animated
              now={this.state.percentage}
              label={'Hold Color'}
            />
            <CreateRouteOptions
              nextStep={this.nextStep}
              prevStep={this.prevStep}
              uploadImageStep={this.uploadImageStep}
              handleChange={this.handleInput}
            />
          </div>
        );
      case 5:
        return (
          <Fragment>
            <ProgressBar
              striped
              variant="warning"
              animated
              now={this.state.percentage}
              label={'Create Model'}
            />
            <CreateRoute
              prevStep={this.prevStep}
              handleChange={this.handleInput}
              nextStepDouble={this.nextStepDouble}
              values={values}
            />
          </Fragment>
        );
      case 5:
        return (
          <div>
            <ProgressBar
              striped
              variant="warning"
              animated
              now={this.state.percentage}
              label={'Create Model'}
            />
            <CreateRoute
              prevStep={this.prevStep}
              handleChange={this.handleInput}
              nextStep={this.nextStep}
            />
          </div>
        );
      case 6:
        return (
          <div>
            <ProgressBar
              striped
              variant="warning"
              animated
              now={this.state.percentage}
              label={'Upload Image to Canvas'}
            />
            <ImageUpload
              uploadImagePrevStep={this.uploadImagePrevStep}
              nextStep={this.nextStep}
              handleChange={this.handleInput}
              values={values}
            />
          </div>
        );
      case 7:
        return (
            <CreateRouteSuccess
              uploadImagePrevStep={this.uploadImagePrevStep}
              handleChange={this.handleInput}
              values={values}
            />
  
        );
    }
  }
}

const mapState = ({ routeModel, climbingRoute  }) => ({
  routeModel,
  climbingRoute
});

const mapDispatch = dispatch => {
  return {
    setRouteModel: model => dispatch(setRouteModel(model))
  };
};
export default connect(mapState, mapDispatch)(CreateRouteForm);
