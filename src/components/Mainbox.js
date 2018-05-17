import React from 'react';
import PigCard from './PigCard'
import hogs from '../porkers_data'

class Mainbox extends React.Component {
  state = {
    pigs: hogs,
  }

  filterByGreased = () => {
    this.setState({
      pigs: this.state.pigs.filter((hog) => {return hog.greased}),
    })
  }

  sortByWeight = () => {
    const hogWeight = 'weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water'
    this.setState({
      pigs: this.state.pigs.sort((a,b) => {return a[hogWeight] - b[hogWeight]})
    })
  }

  sortByName = () => {
    this.setState({
      pigs: this.state.pigs.sort((a, b) => { return a.name.toLowerCase().localeCompare(b.name.toLowerCase()); })
    })
  }

  clear = () => {
    this.setState({
      pigs: hogs
    })
  }

  render() {
    const pigs = this.state.pigs.map((hog, idx) => {
            return <PigCard key={idx} {...hog}/>
          })

    return (
      <div>
        <div className="filter">
          <button onClick={this.sortByName}>Sort by Name</button>
          <button onClick={this.sortByWeight}>Sort by Weight</button>
          <button onClick={this.filterByGreased}>Filter Greased</button>
          <button onClick={this.clear}>Clear Filter</button>
        </div>
        <hr></hr>
        <div className="ui grid container">
          { pigs }
        </div>
      </div>
    )
  }
}

export default Mainbox;
