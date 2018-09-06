import React from 'react'
import PropTypes from 'prop-types'

class QuickLinks extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div>
        <p><strong>Quick Links</strong></p>
        <hr/>
        <p>U.S Open</p>
        <p>Fantasy Football: PPR Rankings</p>
        <p>Fantasy Football: Draft Now</p>
      </div>
    );
  }
}

export default QuickLinks;
