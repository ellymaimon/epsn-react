import React from "react";
import './BodyComponent.css';
import LeftContainer from './LeftContainer'
// import MiddleContainer from './MiddleContainer'
// import RightContainer from './RightContainer'

class BodyComponent extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div className="bodyContainer">
        <LeftContainer/>
        {/* <MiddleContainer/>
        <RightContainer/> */}
      </div>
    );
  }
}

export default BodyComponent;
