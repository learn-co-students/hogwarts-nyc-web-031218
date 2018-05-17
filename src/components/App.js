import React, { Component } from 'react';
import '../App.css';
import Nav from './Nav'
import Mainbox from './Mainbox'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav />
        <Mainbox />
      </div>
    )
  }
}

export default App;
