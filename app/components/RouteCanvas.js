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
      },
      cubePos: {
        z: -50,
        y: 0,
        x: 0
      }
    };
    this.handleInput = this.handleInput.bind(this);
    this.handleMouseOver = this.handleMouseOver.bind(this);
    this.handleMouseOff = this.handleMouseOff.bind(this);
    this.rotateY = this.rotateY.bind(this);
    this.rotateX = this.rotateX.bind(this);
  }
  componentDidMount() {
    const { rotateX, rotateY } = this;
    window.addEventListener('keydown', e => {
      const { keyCode } = e;
      console.log(keyCode);
      switch (keyCode) {
        case 37:
          rotateY(-5);
          return;
        case 39:
          rotateY(5);
          return;
        case 38:
          rotateX(-5);
          return;
        case 40:
          rotateX(5);
          return;
        default:
          return;
      }
    });
  }
  componentWillUnmount() {
    window.onkeydown = '';
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
  rotateY(rotation) {
    console.log(rotation);
    const { cubePos } = this.state;
    if ((cubePos.y > 100 && rotation > 0) || (cubePos.y < -100 && rotation < 0))
      return;
    const newPos = cubePos.y + Number(rotation);
    this.setState({ cubePos: { ...cubePos, y: newPos } });
  }
  rotateX(rotation) {
    const { cubePos } = this.state;
    if ((cubePos.x > 100 && rotation > 0) || (cubePos.x < -100 && rotation < 0))
      return;
    const newPos = cubePos.x + Number(rotation);
    this.setState({ cubePos: { ...cubePos, x: newPos } });
  }
  render() {
    const {
      state: {
        width,
        height,
        tooltip: { left, top, display, x, y },
        cubePos
      },
      props: { routeModel, setNewHold, setNewDraggingHold },
      handleMouseOver,
      handleMouseOff,
      rotateY,
      rotateX
    } = this;
    return (
      <div>
        <div>Canvas</div>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <div>
            <div id="canvas">
              <div
                id="canvas-cube"
                style={{
                  width: '200px',
                  height: '300px',
                  position: 'relative',
                  transformStyle: 'preserve-3d',
                  transform: `translateZ(${cubePos.z}px) rotateY(${cubePos.y}deg) rotateX(${cubePos.x}deg)`
                }}
              >
                <div
                  className="route_canvas cube__face cube__face--front"
                  // style={{ width: `${width}em`, height: `${height}em` }}
                >
                  <div
                    style={{
                      position: 'relative',
                      width: '100%',
                      height: '100%',
                      display: 'flex',
                      flexWrap: 'wrap'
                    }}
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
                          height={height}
                          holds={routeModel.sorted_holds}
                          setNewHold={setNewHold}
                          setNewDraggingHold={setNewDraggingHold}
                          holdColor={routeModel.holdColor}
                        />
                      ))
                    )}
                  </div>
                </div>
                <div className="cube__face cube__face--back">back</div>
                <div className="cube__face cube__face--right">right</div>
                <div className="cube__face cube__face--left">left</div>
                <div className="cube__face cube__face--top">top</div>
                <div className="cube__face cube__face--bottom">bottom</div>
              </div>
            </div>
            <div style={{ marginTop: '3em', zIndex: '100' }}>
              <div style={{ display: 'flex' }}>
                <i
                  className="material-icons"
                  onClick={() => {
                    rotateY(-5);
                  }}
                >
                  keyboard_arrow_left
                </i>
                <i
                  className="material-icons"
                  onClick={() => {
                    rotateY(5);
                  }}
                >
                  keyboard_arrow_right
                </i>
              </div>
              <div>Rotation on Y Axis: {cubePos.y} deg</div>
            </div>
          </div>
          <div style={{ transform: 'rotate(90deg)' }}>
            <div style={{ display: 'flex' }}>
              <i
                className="material-icons"
                onClick={() => {
                  rotateX(-5);
                }}
              >
                keyboard_arrow_left
              </i>
              <i
                className="material-icons"
                onClick={() => {
                  rotateX(5);
                }}
              >
                keyboard_arrow_right
              </i>
            </div>
            <div>Rotation on X Axis: {cubePos.x} deg</div>
          </div>
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
