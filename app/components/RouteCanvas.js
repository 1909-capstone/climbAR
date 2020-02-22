import React from 'react';
import style from '../css/routeCanvas.css';
import CanvasSlot from './CanvasSlot';
import { connect } from 'react-redux';
import { setNewHold } from '../redux/thunks/holdThunks';

class RouteCanvas extends React.Component {
  constructor() {
    super();
    this.state = {
      width: 15,
      height: 20
    };
  }
  render() {
    const {
      state: { width, height },
      props: { holds, setNewHold }
    } = this;
    return (
      <div>
        <div>Canvas</div>
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
