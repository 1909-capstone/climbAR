import React from 'react';
import style from '../css/routeCanvas.css';
import CanvasSlot from './CanvasSlot';
import { connect } from 'react-redux';
import {
  setNewHold,
  setNewDraggingHold
} from '../redux/thunks/routeModelThunks';
import CoordinateTooltip from './CoordinateTooltip';

class RouteCanvas extends React.Component {
  constructor() {
    super();
    this.state = {
      width: 15,
      height: 20,
      tooltip: {
        left: 0,
        top: 0,
        display: false,
        x: 0,
        y: 0
      }
    };
    this.handleInput = this.handleInput.bind(this);
    this.handleMouseOver = this.handleMouseOver.bind(this);
    this.handleMouseOff = this.handleMouseOff.bind(this);
  }
  handleInput(e) {
    this.setState({ [e.target.name]: e.target.value });
  }
  handleMouseOver(e) {
    const {
      target,
      target: { offsetParent }
    } = e;
    const xPos = e.screenX - offsetParent.offsetLeft;
    const yPos = e.screenY - offsetParent.offsetHeight;
    this.setState({
      tooltip: {
        left: xPos,
        top: yPos,
        display: true,
        x: target.getAttribute('x'),
        y: target.getAttribute('y')
      }
    });
  }
  handleMouseOff() {
    const { tooltip } = this.state;
    this.setState({ tooltip: { ...tooltip, display: false } });
  }
  render() {
    const {
      state: {
        width,
        height,
        tooltip: { left, top, display, x, y }
      },
      props: { routeModel, setNewHold, setNewDraggingHold },
      handleMouseOver,
      handleMouseOff
    } = this;
    return (
      <div>
        <div>Canvas</div>
        <div
          className="route_canvas"
          style={{ width: `${width}em`, height: `${height}em` }}
          onMouseOver={handleMouseOver}
          onMouseLeave={handleMouseOff}
        >
          <CoordinateTooltip
            left={left}
            x={x}
            y={y}
            top={top}
            display={display}
          />
          {Array.from({ length: height }).map((_row, r) =>
            Array.from({ length: width }).map((_col, c) => (
              <CanvasSlot
                key={`row-${r}-col${c}`}
                x={height - r}
                y={width - c}
                width={width}
                holds={routeModel.sorted_holds}
                setNewHold={setNewHold}
                setNewDraggingHold={setNewDraggingHold}
                holdColor={routeModel.holdColor}
              />
            ))
          )}
        </div>
      </div>
    );
  }
}

const mapState = ({ routeModel }) => ({
  routeModel
});
const mapDispatch = dispatch => {
  return {
    setNewHold: hold => dispatch(setNewHold(hold)),
    setNewDraggingHold: hold => dispatch(setNewDraggingHold(hold))
  };
};
export default connect(mapState, mapDispatch)(RouteCanvas);
