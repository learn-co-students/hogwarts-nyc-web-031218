import React, { Component } from 'react';
import '../App.css';
import Nav from './Nav'
import hogs from '../porkers_data'
import HogsList from '../containers/HogsList';

class App extends Component {

  state = {

    hogs: [],
    greasedFilter: false

  }

  handleAZSortClick = () => {
    const sortedHogs = hogs.sort((a,b)=>{
      console.log(a.name,b.name, a.name < b.name)
      if (a.name > b.name){
        return 1
      }else if (a.name < b.name){
        return -1
      }else{
        return 0
      }
    })

    console.log(sortedHogs, hogs)
    this.setState({
      hogs: sortedHogs
    })

  }


  handleGreasyClick = () => {

    console.log("Greeeeeeasy was Clicked")

    if(!this.state.greasedFilter){
      this.setState({
      hogs: hogs.filter((hog)=>{
        return hog.greased
      }),
      greasedFilter: true
      })
    }else{
      this.setState({
        hogs: hogs,
        greasedFilter: false
      })
    }
  }

  render() {
    return (
      <div className="App">
          <Nav handleGreasyClick={this.handleGreasyClick} handleAZSortClick={this.handleAZSortClick}/>
        <HogsList hogs={this.state.hogs} />
      </div>
    )
  }

  componentDidMount(){
    this.setState({hogs})
  }
}

export default App;
