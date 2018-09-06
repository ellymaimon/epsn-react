import React from 'react'
import PropTypes from 'prop-types'

class Customize extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div>
        <p><strong>Customize ESPN</strong></p>
        <hr/>
        <button>Sign Up</button>
        <button>Log In</button>
      </div>
    );
  }
}

export default Customize;
