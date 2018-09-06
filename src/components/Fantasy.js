import React from 'react'
import PropTypes from 'prop-types'

class Fantasy extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div>
        <p><strong>Fantasy Football</strong></p>
        <hr/>
        <p>Fantasy Football 101</p>
        <p>The Fantasy Show</p>
        <p>Create League</p>
        <p>Reactivate League</p>
        <p>Draft Now</p>
        <p>League Directory</p>
      </div>
    );
  }
}

export default Fantasy;
