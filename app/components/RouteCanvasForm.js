import React from 'react';
import { connect } from 'react-redux';
import { Form } from 'react-bootstrap';
import { setRouteModel } from '../redux/actions';

class RouteCanvasForm extends React.Component {
  constructor() {
    super();
    this.handleInput = this.handleInput.bind(this);
    this.state = {
      areaHeight: 15,
      areaWidth: 10,
      grade: 'VB',
      endDate: new Date(new Date().getTime() + 1000 * 60 * 60 * 24 * 14),
      holdColor: 'Red'
    };
  }
  handleInput(e) {
    this.props.setRouteModel({ [e.target.name]: e.target.value });
  }
  changeHoldColor(color) {
    [...document.querySelectorAll('.hold')].forEach(h => {
      h.style.backgroundColor = color;
    });
  }
  render() {
    console.log('HOLD COLOR IS ', this.props.routeModel.holdColor);
    return (
      <div>
        <Form.Group>
          <Form.Label htmlFor="height">Height</Form.Label>
          <Form.Control
            id="height"
            name="areaHeight"
            type="number"
            min="0"
            max="7"
            value={
              Number(this.props.routeModel.areaHeight) || this.state.areaHeight
            }
            onChange={this.handleInput}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label htmlFor="width">Width</Form.Label>
          <Form.Control
            id="width"
            name="areaWidth"
            type="number"
            min="0"
            max="3"
            value={
              Number(this.props.routeModel.areaWidth) || this.state.areaWidth
            }
            onChange={this.handleInput}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label htmlFor="grade">Grade</Form.Label>
          <Form.Control
            as="select"
            id="grade"
            name="grade"
            type="select"
            value={this.props.routeModel.grade || this.state.grade}
            onChange={this.handleInput}
          >
            <option value="VB">VB</option>
            <option value="V1">V1</option>
            <option value="V2">V2</option>
            <option value="V3">V3</option>
            <option value="V4">V4</option>
            <option value="V5">V5</option>
            <option value="V6">V6</option>
            <option value="V7">V7</option>
            <option value="V8">V8</option>
            <option value="V9">V9</option>
            <option value="V10">V10</option>
            <option value="V11">V11</option>
            <option value="V12">V12</option>
            <option value="V13">V13</option>
            <option value="V14">V14</option>
            <option value="V15">V15</option>
            <option value="V16">V16</option>
          </Form.Control>
        </Form.Group>
        <Form.Group>
          <Form.Label htmlFor="endDate">Expiration Date</Form.Label>
          <Form.Control
            id="endDate"
            name="endDate"
            type="date"
            value={Number(this.props.routeModel.endDate) || this.state.endDate}
            onChange={this.handleInput}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label htmlFor="holdColor">Color</Form.Label>
          <Form.Control
            as="select"
            id="holdColor"
            name="holdColor"
            type="select"
            value={this.props.routeModel.holdColor || this.state.holdColor}
            onChange={e => {
              this.handleInput(e);
              this.changeHoldColor(e.target.value);
            }}
          >
            <option value="Red">Red</option>
            <option value="Orange">Orange</option>
            <option value="Yellow">Yellow</option>
            <option value="Green">Green</option>
            <option value="Blue">Blue</option>
            <option value="Purple">Purple</option>
            <option value="Black">Black</option>
            <option value="Brown">Brown</option>
            <option value="White">White</option>
            <option value="Tan">Tan</option>
          </Form.Control>
        </Form.Group>
      </div>
    );
  }
}

const mapState = ({ routeModel }) => ({ routeModel });
const mapDispatch = dispatch => {
  return {
    setRouteModel: model => dispatch(setRouteModel(model))
  };
};

export default connect(mapState, mapDispatch)(RouteCanvasForm);
