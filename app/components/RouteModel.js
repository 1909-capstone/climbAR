import 'aframe';
import { Entity, Scene } from 'aframe-react';
import React from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import { fetchSingleClimbingRoute } from '../redux/thunks/climbingRoutesThunks';

//TO DO: load actual gym floor image for ground
//TO DO: create a database for actual sky/gym env image for each wall/climbing route,
//make sure each climbing route is on the center of different gym location
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
          <img
            id="groundTexture"
            src="https://cdn.aframe.io/a-painter/images/floor.jpg"
          />
          <img id="wallTexture" src="../assets/wall-background-far.JPG.jpeg" />
          <img id="skyTexture" src="../assets/360-middle.jpeg" />
        </a-assets>
        <Entity
          primitive="a-sky"
          src="#skyTexture"
          height="2048"
          width="2048"
          radius="10"
          theta-length="180"
          position="0 0 8.5"
        />
        <Entity
          primitive="a-plane"
          color="#929292"
          rotation="-90 0 0"
          height="10"
          width="50"
        />
        <Entity primitive="a-light" type="ambient" color="#445451" />
        <Entity
          primitive="a-light"
          type="point"
          intensity="1.6"
          position="2 5 5"
        />
        <a-gltf-model
          id="wall"
          position="0 0 -3"
          rotation="0 100 0"
          src="../assets/climbing_wall/scene.gltf"
        ></a-gltf-model>
        <Entity
          primitive="a-plane"
          src="#wallTexture"
          color="#756b37"
          rotation="0 0 0"
          height={climbingRoute.areaHeight}
          width={climbingRoute.areaWidth}
          position="0 0 -1"
        />
        {climbingRoute.routeModels.map(_h => (
          <Entity
            key={`hold-${_h.id}`}
            primitive={_h.holdModelType}
            position={{
              x: _h.positionX - 1,
              y: _h.positionY,
              z: _h.positionZ
            }}
            rotation={{
              x: _h.rotationX - 1,
              y: _h.rotationY,
              z: _h.rotationZ
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
