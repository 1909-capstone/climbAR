import React from 'react';
import style from '../css/routeCanvas.css';
import CanvasSlot from './CanvasSlot';
import { connect } from 'react-redux';
import { setNewHold } from '../redux/thunks/holdThunks';
import { Form } from 'react-bootstrap';

class RouteCanvas extends React.Component {
  constructor() {
    super();
    this.state = {
      width: 15,
      height: 20
    };
    this.handleInput = this.handleInput.bind(this);
  }
  handleInput(e) {
    this.setState({ [e.target.name]: e.target.value });
  }
  render() {
    const {
      state: { width, height },
      props: { holds, setNewHold }
    } = this;
    return (
      <div>
        <div>
          Canvas
          <div>
            <Form.Group>
              <Form.Label htmlFor="height">Height</Form.Label>
              <Form.Control
                id="height"
                name="height"
                type="number"
                min="0"
                max="7"
                value={this.state.height}
                onChange={this.handleInput}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label htmlFor="width">Width</Form.Label>
              <Form.Control
                id="width"
                name="width"
                type="number"
                min="0"
                max="3"
                value={this.state.width}
                onChange={this.handleInput}
              />
            </Form.Group>
          </div>
        </div>
        <div
          className="route_canvas"
          style={{ width: `${width}em`, height: `${height}em` }}
        >
          {Array.from({ length: height }).map((_row, r) =>
            Array.from({ length: width }).map((_col, c) => (
              <CanvasSlot
                key={`row-${r}-col${c}`}
                x={r}
                y={c}
                width={width}
                holds={holds}
                setNewHold={setNewHold}
              />
            ))
          )}
        </div>
      </div>
    );
  }
}

const mapState = ({ holds }) => ({ holds });
const mapDispatch = dispatch => {
  return {
    setNewHold: hold => dispatch(setNewHold(hold))
  };
};
export default connect(mapState, mapDispatch)(RouteCanvas);
