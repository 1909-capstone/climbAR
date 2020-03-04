import React from 'react';
import { connect } from 'react-redux';
import Form from 'react-bootstrap/Form';
import { dispatchRouteFilters } from '../redux/thunks/climbingRoutesThunks';
import style from '../css/routeFilters.css';

class RouteFilters extends React.Component {
  constructor() {
    super();
    this.handleInput = this.handleInput.bind(this);
  }
  handleInput(e) {
    const name = e.target.name;
    const value =
      e.target.type === 'checkbox' ? e.target.checked : e.target.value;
    this.props.dispatchRouteFilters({ [name]: value });
  }
  render() {
    const {
      props: { routeFilters, user },
      handleInput
    } = this;
    return (
      <div className="route-filters-container">
        <Form.Group id="grade-filter">
          <Form.Label id="grade-label">Grade</Form.Label>
          <Form.Control
            id="grade-select"
            onChange={handleInput}
            name="grade"
            as="select"
            value={routeFilters.grade || 'VB'}
          >
            <option value="">All</option>
            <option value="VB">VB</option>
            <option value="V1">V1</option>
            <option value="V2">V2</option>
            <option value="V3">V3</option>
            <option value="V4">V4</option>
            <option value="V5">V5</option>
            <option value="V6">V6</option>
            <option value="V7">V7</option>
            <option value="V8">V8</option>
            <option value="V9">V9</option>
            <option value="V10">V10</option>
            <option value="V11">V11</option>
            <option value="V12">V12</option>
            <option value="V13">V13</option>
            <option value="V14">V14</option>
            <option value="V15">V15</option>
            <option value="V16">V16</option>
          </Form.Control>
        </Form.Group>
        <div>
          {user.userType ? (
            <div className="logedin-filters">
              <Form.Group id="complete-filter">
                <Form.Label id="complete-label">Completed</Form.Label>
                <Form.Check
                  id="complete-check"
                  onChange={handleInput}
                  name="completed"
                  type="checkbox"
                />
              </Form.Group>
              <Form.Group id="like-filter">
                <Form.Label id="like-label">Liked</Form.Label>
                <Form.Check
                  id="like-check"
                  onChange={handleInput}
                  name="liked"
                  type="checkbox"
                />
              </Form.Group>
            </div>
          ) : (
            ''
          )}
        </div>
      </div>
    );
  }
}

const mapState = ({ routeFilters, user }) => ({ routeFilters, user });
const mapDispatch = dispatch => {
  return {
    dispatchRouteFilters: filters => dispatch(dispatchRouteFilters(filters))
  };
};

export default connect(mapState, mapDispatch)(RouteFilters);
