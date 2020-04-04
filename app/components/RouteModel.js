import 'aframe';
import { Entity, Scene } from 'aframe-react';
import React from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import { fetchSingleClimbingRoute } from '../redux/thunks/climbingRoutesThunks';

class RouteModel extends React.Component {
  constructor() {
    super();
    this.state = {
      cameraZ: 10
    };
    this.zoomIn = this.zoomIn.bind(this);
    this.waitingForRouteModel = this.waitingForRouteModel.bind(this);
    this.loadingScreen = this.loadingScreen.bind(this);
  }
  zoomIn() {
    const {
      zoomIn,
      state: { cameraZ }
    } = this;
    if (cameraZ <= 1) return;
    this.setState({ cameraZ: cameraZ - 0.2 });
    setTimeout(() => {
      zoomIn();
    }, 1);
  }
  componentDidMount() {
    const paramsId = this.props.match.params.id;
    this.props.fetchSingleClimbingRoute(paramsId);
    this.zoomIn();
  }
  loadingScreen() {
    const { cameraZ } = this.state;
    return (
      <Scene>
        <a-assets>
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
          position="0 1 -1"
          rotation="0 -90 0"
        />
        <Entity
          primitive="a-light"
          type="point"
          color="#929292"
          intensity="1.5"
          position="-4 5 5"
        />
        <a-ring
          id="loading"
          visible="true"
          position="0 1.25 3"
          color="teal"
          radius-inner="0.3"
          radius-outer="0.35"
          scale="2 1.5 0.5"
          animation="property: rotation; to: 0 360 0; loop: true; dur: 10000"
        >
          <Entity
            position="0.8 0 0"
            scale="2 2 2"
            text={{ value: 'Loading...' }}
          ></Entity>
        </a-ring>
        <Entity primitive="a-light" type="ambient" color="#ffffff" />
        <Entity primitive="a-camera" position={`0 1.7 ${cameraZ}`}></Entity>
      </Scene>
    );
  }

  waitingForRouteModel() {
    const { climbingRoute } = this.props;
    if (!climbingRoute.routeImage && !climbingRoute.routeModels) {
      console.log('waiting for route model');
      return true;
    }
    return false;
  }
  render() {
    const {
      props: { climbingRoute },
      state: { cameraZ },
      waitingForRouteModel,
      loadingScreen
    } = this;
    if (waitingForRouteModel()) return loadingScreen();
    return (
      <Scene>
        <a-assets>
          <img id="skyTextureMiddle" src="../assets/360-middle-clean.JPG" />
          <img id="wallTexture" src="../assets/wall-background-close.JPG" />
          {climbingRoute.routeImage && (
            <img
              id="userUpload"
              src={`..${climbingRoute.routeImage.filePath}`}
            />
          )}
        </a-assets>
        {climbingRoute.routeImage && (
          <Entity
            primitive="a-sky"
            src="#userUpload"
            height="2304"
            width="2304"
            radius="7"
            theta-length="180"
            position="0 1 4"
            rotation="0 -90 0"
          />
        )}
        {!climbingRoute.routeImage && (
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
        )}
        {!climbingRoute.routeImage && (
          <Entity
            primitive="a-plane"
            src="#wallTexture"
            rotation="0 0 0"
            position="0 1.7 -2"
            height="4.4"
            width="4"
          />
        )}
        {!climbingRoute.routeImage && (
          <Entity
            primitive="a-light"
            type="point"
            color="#929292"
            intensity="1.5"
            position="-4 5 5"
          />
        )}
        {!climbingRoute.routeImage &&
          climbingRoute.routeModels.map(_h => (
            <Entity
              key={`hold-${_h.id}`}
              primitive={_h.hold.modelType}
              position={{
                x: (_h.positionX / 15) * 2.8 - 1,
                y: (_h.positionY / 20) * 3.8,
                z: _h.positionZ - 1
              }}
              rotation={{
                x: _h.rotationX - 1,
                y: _h.rotationY,
                z: _h.rotationZ - 1
              }}
              scale={{ x: _h.scaleX, y: _h.scaleY, z: _h.scaleZ }}
              roughness={_h.roughness}
              color={climbingRoute.holdColor}
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
        <Entity primitive="a-light" type="ambient" color="#625230" />
        <Entity primitive="a-camera" position={`0 1.7 ${cameraZ}`}></Entity>
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
