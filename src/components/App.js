import React, { Component } from 'react';
import '../App.css';
import Nav from './Nav'
import hogs from '../porkers_data'
import HogsList from '../containers/HogsList';
import Filters from './Filters'

class App extends Component {

  state = {
    hogs: []
  }

  render() {
    return (
      <div className="App">
          <Nav/>
          <Filters filter={this.state.hogs} />
        <HogsList hogs={this.state.hogs} />
      </div>
    )
  }

  componentDidMount(){
    this.setState({hogs})
  }

}

export default App;
