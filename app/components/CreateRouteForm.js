import React, { Component } from 'react';
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

class CreateRouteForm extends Component {
  state = {
    step: 1,
    //passing the percentage to the progress bar
    percentage: 20,
    label: 'Dimensions',
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
    this.setState({[e.target.name]: e.target.value})
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
      case 2:
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
            <CreateRouteOptions
              nextStep={this.nextStep}
              prevStep={this.prevStep}
              uploadImageStep={this.uploadImageStep}
              handleChange={this.handleInput}
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
              handleChange={this.handleInput}
              values={values}
            />
          </div>
        );
    }
  }
}

const mapState = ({ routeModel, ClimbingRoute, ClimbingRoutes }) => ({
  routeModel,
  ClimbingRoute,
  ClimbingRoutes
});

const mapDispatch = dispatch => {
  return {
    setRouteModel: model => dispatch(setRouteModel(model))
  };
};
export default connect(mapState, mapDispatch)(CreateRouteForm);
