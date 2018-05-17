import React, { Component } from 'react';
import '../App.css';
import Nav from './Nav'
import hogs from '../porkers_data'
import HogsList from '../containers/HogsList';

class App extends Component {

  state = {
    hogs: []
  }

  render() {
    return (
      <div className="App">
          <Nav/>
        <HogsList hogs={this.state.hogs} />
      </div>
    )
  }

  componentDidMount(){
    this.setState({hogs})
  }

}

export default App;
