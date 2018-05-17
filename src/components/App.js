import React, { Component } from 'react';
import '../App.css';
import Nav from './Nav'
import hogs from '../porkers_data';
import RenderHogs from './renderHogs.js'
import Filter from './Filter.js'
class App extends Component {
  state = {
    allHogs: hogs,
    filteredHogs: hogs,
    nameText: '',
    weightText: '',
    errorTrue: false
  }
  weightFilterHandler = (e) => {
    e.preventDefault()
    if (String(e.target.value).match(/^-?\d*\.?\d*$/)) {
      this.setState( {
    errorTrue: false,
     weightText: e.target.value,
     filteredHogs: this.state.allHogs.filter(hog => {
       return !!String(hog[['weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water']]).match(String(e.target.value))
     }
     )
   })
 } else {
  this.setState(
    {
      errorTrue: true
    }, console.log(this.state.errorTrue)
  )
 }
  }
  nameFilterHandler = (e) => {
    e.preventDefault()
   this.setState( {
     nameText: e.target.value,
     filteredHogs: this.state.allHogs.filter(hog => {
       return !!hog.name.toUpperCase().match(e.target.value.toUpperCase())
     })
   })
  }
  render() {
    let divStyle = {
      display: this.state.errorTrue ? 'block' : 'none'
    }
    // console.log(this.state.filteredHogs)
    return (
      <div className="App">
          < Nav />
          <Filter nameText={this.state.nameText} weightText={this.state.weightText} nameFilter = {this.nameFilterHandler} weightFilter= {this.weightFilterHandler} />
          <div style={divStyle} className='filterError'>
          "That's not a number"
          </div>
           <RenderHogs hogs={this.state.filteredHogs}/>

      </div>

    )
  }
}

export default App;
