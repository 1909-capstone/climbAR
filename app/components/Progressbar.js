import React, { Component } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import style from '../css/progressbar.css';

//creating own styled components with the library 'styled' 
const Track = styled.div`
  width: 100%;
  height: 20px;
  background-color: black;
  border-radius: 10px;
`;

const Thumb = styled.div`
  width: ${props => props.percentage}%;
  height: 100%;
  background-color: lightsalmon;
  border-radius: 8px;
  transition: width 0.3s ease-in-out;
`;

class Progressbar extends Component {
  state = {
    percentage: {}
  };
  render() {
    return (
      <div className="containerWrapper">
        <div className="progressbarContainer">
          <Track>
            <Thumb percentage={this.props.percentage} />
          </Track>
        </div>
      </div>
    );
  }
}

//Need a way to handle the percentage so take the class and define the prop types 'percentage as number' with the library 'prop-types'
Progressbar.propTypes = {
  percentage: PropTypes.number 
}
export default Progressbar;
