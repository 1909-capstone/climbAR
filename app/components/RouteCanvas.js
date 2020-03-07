import React from 'react';
import style from '../css/routeCanvas.css';
import Pinch from './Pinch';
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
      width: 20,
      height: 15,
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
      },
      cubeDimensions: {
        parent: {
          width: 200,
          height: 300,
          translateY: 0
        },
        front: {
          width: 300,
          height: 200,
          rotateY: 0,
          translateZ: 50
        },
        back: {
          rotateY: 180,
          translateZ: -50,
          width: 300,
          height: 200
        },
        left: {
          rotateY: -90,
          translateZ: 0,
          width: 100,
          height: 200,
          left: -50
        },
        right: {
          rotateY: 90,
          translateZ: 0,
          width: 100,
          height: 200,
          left: 250
        },
        top: {
          rotateX: 90,
          translateZ: 0,
          width: 300,
          height: 100,
          top: -50
        },
        bottom: {
          rotateX: -90,
          translateZ: 0,
          width: 300,
          height: 100,
          top: 150
        }
      }
    };
    this.handleInput = this.handleInput.bind(this);
    // this.handleMouseOver = this.handleMouseOver.bind(this);
    // this.handleMouseOff = this.handleMouseOff.bind(this);
    this.rotateY = this.rotateY.bind(this);
    this.rotateX = this.rotateX.bind(this);
    this.increaseSize = this.increaseSize.bind(this);
    this.decreaseSize = this.decreaseSize.bind(this);
  }
  componentDidMount() {
    const { rotateX, rotateY } = this;
    window.addEventListener('keydown', e => {
      const { keyCode } = e;
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
  // handleMouseOver(e) {
  //   const {
  //     target,
  //     target: { offsetParent }
  //   } = e;
  //   const xPos = e.screenX - offsetParent.offsetLeft;
  //   const yPos = e.screenY - offsetParent.offsetHeight;
  //   this.setState({
  //     tooltip: {
  //       left: xPos,
  //       top: yPos,
  //       display: true,
  //       x: target.getAttribute('x'),
  //       y: target.getAttribute('y')
  //     }
  //   });
  // }
  // handleMouseOff() {
  //   const { tooltip } = this.state;
  //   this.setState({ tooltip: { ...tooltip, display: false } });
  // }
  rotateY(rotation) {
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
  increaseSize() {
    const state = { ...this.state };
    if (state.cubeDimensions.parent.width >= 500) return;
    state.cubeDimensions.parent.translateY += 50;
    for (let side in state.cubeDimensions) {
      let vals = state.cubeDimensions[side];
      vals.width += 50;
      vals.height += 50;
      if (vals.left) vals.left += 25;
      if (side === 'front') vals.translateZ += 25;
      if (side === 'back') vals.translateZ -= 25;
    }
    this.setState(state);
  }
  decreaseSize() {
    const state = { ...this.state };
    if (state.cubeDimensions.parent.width <= 100) return;
    state.cubeDimensions.parent.translateY -= 50;
    for (let side in state.cubeDimensions) {
      let vals = state.cubeDimensions[side];
      vals.width -= 50;
      vals.height -= 50;
      if (vals.left) vals.left -= 25;
      if (side === 'front') vals.translateZ -= 25;
      if (side === 'back') vals.translateZ += 25;
    }
    this.setState(state);
  }
  render() {
    const {
      state: {
        width,
        height,
        tooltip: { left, top, display, x, y },
        cubePos,
        cubeDimensions
      },
      props: { routeModel, setNewHold, setNewDraggingHold },
      // handleMouseOver,
      // handleMouseOff,
      rotateY,
      rotateX,
      increaseSize,
      decreaseSize
    } = this;
    return (
      <div>
        <div>Canvas</div>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            marginBottom: '3.75em'
          }}
        >
          <div>
            <div id="canvas">
              <div
                id="canvas-cube"
                style={{
                  width: `${cubeDimensions.parent.width}px`,
                  height: `${cubeDimensions.parent.height}px`,
                  position: 'relative',
                  transformStyle: 'preserve-3d',
                  transform: `translateZ(${cubePos.z}px) rotateY(${cubePos.y}deg) rotateX(${cubePos.x}deg) rotate(90deg) translateY(${cubeDimensions.parent.translateY}px)`
                }}
              >
                <div
                  className="cube__face cube__face--front"
                  style={{
                    width: `${cubeDimensions.front.width}px`,
                    height: `${cubeDimensions.front.height}px`,
                    transform: `translateZ(${cubeDimensions.front.translateZ}px) rotateY(${cubeDimensions.front.rotateY}deg)`
                  }}
                >
                  <div
                    style={{
                      position: 'relative',
                      width: '100%',
                      height: '100%',
                      display: 'flex',
                      flexWrap: 'wrap'
                    }}
                    // onMouseOver={handleMouseOver}
                    // onMouseLeave={handleMouseOff}
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
                <div
                  className="cube__face cube__face--back"
                  style={{
                    width: `${cubeDimensions.back.width}px`,
                    height: `${cubeDimensions.back.height}px`,
                    transform: `translateZ(${cubeDimensions.back.translateZ}px) rotateY(${cubeDimensions.back.rotateY}deg)`
                  }}
                ></div>
                <div
                  className="cube__face cube__face--right"
                  style={{
                    width: `${cubeDimensions.right.width}px`,
                    height: `${cubeDimensions.right.height}px`,
                    transform: `translateZ(${cubeDimensions.right.translateZ}px) rotateY(${cubeDimensions.right.rotateY}deg)`,
                    left: `${cubeDimensions.right.left}px`
                  }}
                ></div>
                <div
                  className="cube__face cube__face--left"
                  style={{
                    width: `${cubeDimensions.left.width}px`,
                    height: `${cubeDimensions.left.height}px`,
                    transform: `translateZ(${cubeDimensions.left.translateZ}px) rotateY(${cubeDimensions.left.rotateY}deg)`,
                    left: `${Math.floor(cubeDimensions.left.width / -2)}px`
                  }}
                ></div>
                <div
                  className="cube__face cube__face--top"
                  style={{
                    width: `${cubeDimensions.top.width}px`,
                    height: `${cubeDimensions.top.height}px`,
                    transform: `translateZ(${cubeDimensions.top.translateZ}px) rotateX(${cubeDimensions.top.rotateX}deg)`,
                    top: `${Math.floor(cubeDimensions.top.width / 2)}px`
                  }}
                ></div>
                <div
                  className="cube__face cube__face--bottom"
                  style={{
                    width: `${cubeDimensions.bottom.width}px`,
                    height: `${cubeDimensions.bottom.height}px`,
                    transform: `translateZ(${cubeDimensions.bottom.translateZ}px) rotateX(${cubeDimensions.bottom.rotateX}deg)`,
                    top: `${Math.floor(cubeDimensions.bottom.height / -2)}px`
                  }}
                ></div>
              </div>
            </div>
          </div>
          <div>
            <div style={{ transform: 'rotate(90deg)' }}>
              <div style={{ display: 'flex' }}>
                <i
                  className="material-icons"
                  onClick={() => {
                    rotateX(-20);
                  }}
                >
                  keyboard_arrow_left
                </i>
                <i
                  className="material-icons"
                  onClick={() => {
                    rotateX(20);
                  }}
                >
                  keyboard_arrow_right
                </i>
              </div>
            </div>
            <div style={{ display: 'flex', marginTop: '2em' }}>
              <i
                className="material-icons"
                onClick={() => {
                  rotateY(-20);
                }}
              >
                keyboard_arrow_left
              </i>
              <i
                className="material-icons"
                onClick={() => {
                  rotateY(20);
                }}
              >
                keyboard_arrow_right
              </i>
            </div>
            <div
              style={{
                display: 'flex',
                marginTop: '2em',
                width: '4em',
                justifyContent: 'space-between'
              }}
            >
              <i className="material-icons" onClick={decreaseSize}>
                zoom_out
              </i>
              <i className="material-icons" onClick={increaseSize}>
                zoom_in
              </i>
            </div>
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
