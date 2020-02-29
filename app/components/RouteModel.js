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
          <img
            id="groundTexture"
            src="https://cdn.aframe.io/a-painter/images/floor.jpg"
          />
          <img
            id="skyTexture"
            src="https://cdn.aframe.io/a-painter/images/sky.jpg"
          />
        </a-assets>
        <Entity sloper />
        <Entity
          primitive="a-sky"
          height="2048"
          radius="30"
          src="#skyTexture"
          theta-length="90"
          width="2048"
        />
        <Entity primitive="a-light" type="ambient" color="#445451" />
        <Entity
          primitive="a-light"
          type="point"
          intensity="2"
          position="2 4 4"
        />
        <Entity
          text={{ value: 'ClimbAr!', align: 'center' }}
          position={{ x: 0, y: 2, z: -1 }}
        />
        <a-gltf-model
          id="wall"
          position="0 0 -3"
          rotation="0 100 0"
          src="../assets/climbing_wall/scene.gltf"
        ></a-gltf-model>
        {/* <Entity
          primitive="a-plane"
          src="#groundTexture"
          rotation="0 0 0"
          height={climbingRoute.areaHeight}
          width={climbingRoute.areaWidth}
          position="0 0 -1"
        /> */}
        {climbingRoute.routeModels.map(_h => (
          <Entity
            key={`hold-${_h.id}`}
            primitive="a-box"
            position={{
              x: _h.coordinateX - 1,
              y: _h.coordinateY,
              z: _h.coordinateZ
            }}
            scale={{ x: 0.05, y: 0.05, z: 0.05 }}
          />
        ))}
        <Entity primitive="a-camera" position="0 1.75 0">
          {/* <Entity primitive="a-cursor" animation__click={{property: 'scale', startEvents: 'click', from: '0.1 0.1 0.1', to: '1 1 1', dur: 150}}/> */}
        </Entity>
        <Entity
          primitive="a-plane"
          src="#groundTexture"
          rotation="-90 0 0"
          height="100"
          width="100"
        />
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
