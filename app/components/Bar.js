import React from 'react';

const Bar = ({ width, height, labelValue, index, chartHeight }) => {
  return (
    <g transform={`translate(${index * 24}, ${chartHeight - height})`}>
      <rect fill="steelblue" width={width} height={height}></rect>
      <text fill="white" x={width - 3} y={height - 3} dy=".35em">
        {labelValue}
      </text>
    </g>
  );
};

export default Bar;
