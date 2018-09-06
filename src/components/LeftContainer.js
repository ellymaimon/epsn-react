import React from 'react'
import PropTypes from 'prop-types'
import SubscribeNow from './SubscribeNow'
import QuickLinks from './QuickLinks'
import Customize from './Customize'
import Fantasy from './Fantasy'
import Sites from './Sites'

class LeftContainer extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div>
        <SubscribeNow/>
        <QuickLinks/>
        <Customize/>
        <Fantasy/>
        <Sites/>
      </div>
    );
  }
}

export default LeftContainer;
