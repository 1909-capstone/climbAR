import React, { Component } from 'react';
import Holds from './Holds';

class CreateRoute extends Component {
  render() {
    return (
      <div>
        {' '}
        Route Creator Create your routes
        <div>
          <Holds />
        </div>
      </div>
    );
  }
}

export default CreateRoute;
