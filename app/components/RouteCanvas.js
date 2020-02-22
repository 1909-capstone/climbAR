import React from 'react';
import style from '../css/routeCanvas.css';
import CanvasSlot from './CanvasSlot';

class RouteCanvas extends React.Component {
  constructor() {
    super();
    this.state = {
      width: 15,
      height: 20
    };
  }
  render() {
    const { width, height } = this.state;
    return (
      <div>
        <div>Canvas</div>
        <div
          className="route_canvas"
          style={{ width: `${width}em`, height: `${height}em` }}
        >
          {Array.from({ length: height }).map((_row, r) =>
            Array.from({ length: width }).map((_col, c) => (
              <CanvasSlot key={`row-${r}-col${c}`} x={r} y={c} width={width} />
            ))
          )}
        </div>
      </div>
    );
  }
}

export default RouteCanvas;
