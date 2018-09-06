import React from 'react'
import PropTypes from 'prop-types'

class Sites extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div>
        <p><strong>ESPN Sites</strong></p>
        <hr/>
        <p>FiveThirtyEight</p>
        <p>The Undefeated</p>
        <p>Doubletruck</p>
        <p>espnW</p>
        <p>ESPNFC</p>
        <p>X Games</p>
        <p>ESPN Deportes</p>
        <p>SEC Network</p>
        <p>SportsNation</p>
      </div>
    );
  }
}

export default Sites;
