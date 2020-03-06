import 'aframe';
import { Entity, Scene } from 'aframe-react';
import React from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import { fetchSingleClimbingRoute } from '../redux/thunks/climbingRoutesThunks';

class RouteModel extends React.Component {
  componentDidMount() {
    const paramsId = this.props.match.params.id;
    this.props.fetchSingleClimbingRoute(paramsId);
  }
  render() {
    const { climbingRoute } = this.props;
    return (
      <Scene>
        <a-assets>
          {/* <img id="skyTextureLeft" src="../assets/360-left-clean.JPG" />
          <img id="skyTextureRight" src="../assets/360-right-clean.JPG" /> */}
          <img id="skyTextureMiddle" src="../assets/360-middle-clean.JPG" />
          <img id="wallTexture" src="../assets/wall-background-close.JPG" />
        </a-assets>
        <Entity
          primitive="a-sky"
          src="#skyTextureMiddle"
          height="2304"
          width="2304"
          radius="7"
          theta-length="180"
          position="0 1 4"
          rotation="0 -90 0"
        />
        <Entity
          primitive="a-plane"
          src="#wallTexture"
          rotation="0 0 90"
          position="0 1.7 -2"
          height={climbingRoute.areaHeight}
          width={climbingRoute.areaWidth}
        />
        <Entity primitive="a-light" type="ambient" color="#625230" />
        <Entity
          primitive="a-light"
          type="point"
          color="#929292"
          intensity="1.5"
          position="2 5 5"
        />
        {climbingRoute.routeModels.map(_h => (
          <Entity
            key={`hold-${_h.id}`}
            primitive={_h.holdModelType}
            position={{
              x: _h.positionX - 1,
              y: _h.positionY,
              z: _h.positionZ - 1
            }}
            rotation={{
              x: _h.rotationX - 1,
              y: _h.rotationY,
              z: _h.rotationZ - 1
            }}
            scale={{ x: _h.scaleX, y: _h.scaleY, z: _h.scaleZ }}
            roughness={_h.roughness}
            color={_h.modelColor}
            radius={_h.radius}
            radius-tubular={_h.radiusTubular}
            arc={_h.arc}
            theta-length={_h.thetaLength}
            theta-start={_h.thetaStart}
            height={_h.height}
            width={_h.width}
            depth={_h.depth}
          />
        ))}
        <Entity primitive="a-camera" position="0 1.7 1">
          {/* <Entity
            primitive="a-cursor"
            animation__click={{
              property: 'scale',
              startEvents: 'click',
              from: '0.1 0.1 0.1',
              to: '1 1 1',
              dur: 150
            }}
          /> */}
        </Entity>
      </Scene>
    );
  }
}

const mapState = ({ climbingRoute }) => ({ climbingRoute });

const mapDispatch = dispatch => {
  return {
    fetchSingleClimbingRoute: id => dispatch(fetchSingleClimbingRoute(id))
  };
};

export default connect(mapState, mapDispatch)(RouteModel);
