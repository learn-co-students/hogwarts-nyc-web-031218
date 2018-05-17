import React, { Component } from 'react';
import '../App.css';
import Nav from './Nav'
import hogs from '../porkers_data';
import Filter from './Filter';
import HogContainer from './HogContainer';
import Hog from './Hog';

class App extends Component {

  state = {
    hogs: this.props.hogs,
    filteredHogs: null,
    isGreased: null,
    sort: null,
    weight: null
  }

  handleGrease = (e) => {
    console.log(e.target);
    console.log(e.target.value);
    let value = (e.target.value === 'true')
    this.setState({isGreased: value})
  }

  handleSort = (e) => {
    console.log(e.target);
    console.log(e.target.value);
    this.setState({
      sort: e.target.value
    })
  }

  handleWeight = (e) => {
    console.log(e.target);
    console.log(e.target.value);
    this.setState({
      weight: e.target.value
    })
  }

  // hogsList = () => {
  //   return this.state.isGreased !== null ?
  //    this.state.hogs.filter((hog) => {
  //     return hog.greased === this.state.isGreased
  //   }) : this.state.hogs;
  // }

  hogsList = () => {
    if (this.state.isGreased !== null){
      return this.state.hogs.filter((hog) => {
       return hog.greased === this.state.isGreased
     })
   }
   else if (this.state.sort !== null){
     // let value =  this.state.hogs.sort((a, b) => {
     //   console.log(a, b);
     //   return a.name - b.name
     return this.state.sort === "az" ? this.state.hogs.sort((a, b) => {return a.name[0] < b.name[0] ? -1 : 1}) : this.state.hogs.sort((a, b) => {return a.name[0] > b.name[0] ? -1 : 1})
     }
     else if (this.state.weight !== null){
       let item = 'weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water'
       return this.state.weight === "lh" ? this.state.hogs.sort((a, b) => {return a[item] < b[item] ? -1 : 1}) : this.state.hogs.sort((a, b) => {return a[item] > b[item] ? -1 : 1})
       }
    else {
      return this.state.hogs;
    }
  }


  render() {
      console.log("sort", this.state.sort);
      console.log("greased", this.state.isGreased);
    return (
      <div className="App">
        <Nav />
        <Filter handleGrease={this.handleGrease} handleSort={this.handleSort} handleWeight={this.handleWeight}  />
        <HogContainer hogs={this.hogsList()}/>
      </div>
    )
  }
}

App.defaultProps = {
    hogs
  }

export default App;
