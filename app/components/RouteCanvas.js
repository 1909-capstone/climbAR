import React from 'react';
import style from '../css/routeCanvas.css';
import CanvasSlot from './CanvasSlot';
import { connect } from 'react-redux';
import { setNewHold } from '../redux/thunks/routeModelThunks';
import RouteCanvasForm from './RouteCanvasForm';

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
      props: { routeModel, setNewHold }
    } = this;
    return (
      <div>
        <div>
          Canvas
          <RouteCanvasForm />
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
                holds={routeModel.sorted_holds}
                setNewHold={setNewHold}
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
    setNewHold: hold => dispatch(setNewHold(hold))
  };
};
export default connect(mapState, mapDispatch)(RouteCanvas);
