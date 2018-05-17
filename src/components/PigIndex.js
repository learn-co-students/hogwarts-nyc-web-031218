import React from 'react';
import hogs from '../porkers_data';
import PigCard from './PigCard';

class PigIndex extends React.Component {

  state = {
    greased: false,
    weight: false,
    name: false,
    option: '',
    nameText: ''
  }



  greased = () => {
    this.setState((prevState) => {
      return {greased: !prevState.greased}
    })
  }

  nameSearch = (e) => {
    e.persist()
    this.setState(() => {
      return {nameText: e.target.value}
    })
  }

  sortWeight = (e) => {
    e.persist()
    this.setState(() => {
      let returnObj = {
        option: e.target.value
      }
      if(e.target.value === 'name'){
        returnObj.name = true
        returnObj.weight = false
      } else {
        returnObj.name = false
        returnObj.weight = true
      }
      return returnObj
    })
  }

  render(){
    let allPigs = hogs

    if(this.state.greased){
       allPigs = hogs.filter(hog => { return hog.greased})
    }

    if(this.state.weight){
      allPigs = allPigs.sort((a, b) => { return a.weight - b.weight})
    }

    if(this.state.name){
      allPigs = allPigs.sort((a, b) => {
        if (a.name > b.name) {
          return 1
        }
        if (a.name < b.name){
          return -1
        }
        return 0
      })
    }

    if(this.state.nameText){
      allPigs = allPigs.filter(hog=>{return hog.name.toLowerCase().includes(this.state.nameText.toLowerCase())})
      console.log(this.state.nameText)
    }

    const allHogs = allPigs.map(hog => {
      return <PigCard name={hog.name} specialty={hog.specialty} medal={hog.medal} weight={hog.weight}/>
    })
    return (
        <div id='center'>
          <label>Greased ? </label>
          <br/>
          <input type='checkBox' onChange={this.greased}></input>
          <br/>
          <input type='text' placeholder='name' onKeyUp={this.nameSearch}></input>

          <select value={this.state.option} onChange={this.sortWeight}>
            <option value='weight'>weight</option>
            <option value='name'>name</option>
          </select>
          <br/>
          {allHogs}
        </div>
    )
  }
}

export default PigIndex;
