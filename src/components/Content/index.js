import React, { Component } from 'react';
import PropTypes from 'prop-types';

class content extends Component {
  render() {
    const {body} = this.props;
    return (
      <div>
        {body}
      </div>
    );
  }
}
 

content.propTypes = {
   body: PropTypes.object.isRequired,
};

export default content;
