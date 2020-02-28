import React from 'react';
import style from '../css/holds.css';
import Hold from './Hold';
import { connect } from 'react-redux';
import { fetchHolds } from '../redux/thunks/holdThunks';

class Holds extends React.Component {
  componentDidMount() {
    this.props.fetchHolds();
  }
  render() {
    const { holds } = this.props;
    return (
      <div>
        <div>Holds</div>
        <div className="holds_container">
          {holds.map((h, i) => ( 
            <Hold hold={h} key={`hold-${i}`} />
          ))}
        </div>
      </div>
    );
  }
}

const mapState = ({ holds }) => ({ holds });
const mapDispatch = dispatch => {
  return {
    fetchHolds: () => dispatch(fetchHolds())
  };
};

export default connect(mapState, mapDispatch)(Holds);
