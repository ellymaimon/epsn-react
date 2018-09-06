import React from 'react';
import './Banner.css';

class Banner extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div className="bannerImg">
        <img  src="https://via.placeholder.com/1000x125"/>
      </div>
    );
  }
}

export default Banner;
