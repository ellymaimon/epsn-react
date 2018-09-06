import React from 'react';
import './Header.css'

class Header extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return(
      <div className="navBar">
        <div className="navLeft">
          <a className="link" href="#">NFL</a>
          <a className="link"href="#">NBA</a>
          <a className="link" href="#">MLB</a>
          <a className="link" href="#">NCAAF</a>
          <a className="link" href="#">Soccer</a>
          <a className="link" href="#">Tennis</a>
        </div>
        <div className="navRight">
          <a className="link" href="#">Watch</a>
          <a className="link" href="#">Listen</a>
          <a className="link" href="#">Fantasy</a>
        </div>
      </div>
    )
  }
}

export default Header;
