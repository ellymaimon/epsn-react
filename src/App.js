import React, { Component } from 'react';
import Header from './components/Header';
import Banner from './components/Banner';
import BodyComponent  from './components/BodyComponent'
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Banner />
        <BodyComponent />
      </div>
    );
  }
}

export default App;
