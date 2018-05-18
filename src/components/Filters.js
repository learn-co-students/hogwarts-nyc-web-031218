import React from 'react'

class Filters extends React.Component{
  constructor(){
    super();

    this.state = {
      hogs: []
    }
  }



  greaseHandler = (event) => {
    const greasyPigs = (this.props.filter).filter(pig => {return pig.greased === true})
    console.log(greasyPigs)
  }
  nameHandler = (event) => {
    const namedPigs = [(this.props.filter[0].name),(this.props.filter[1].name),
    (this.props.filter[2].name),(this.props.filter[3].name),(this.props.filter[4].name),
    (this.props.filter[5].name),(this.props.filter[6].name),(this.props.filter[7].name),
    (this.props.filter[8].name),(this.props.filter[9].name),(this.props.filter[10].name),
    (this.props.filter[11].name),(this.props.filter[12].name)]
    console.log(namedPigs.sort())
  }
  weightHandler = (event) => {
    console.log(event.target)
  }

  render() {
    return(
      <div className="Filter and Sort Hogs">
        <br></br>
        <button id="filter" onClick={this.greaseHandler}>Filter By: Greased Up Pigs</button>
        <button id="sortName" onClick={this.nameHandler}>Sort By: A to Z</button>
        <button id="sortWeight"onClick={this.weightHandler}>Sort By: Weight</button>
      </div>
    )
  }

}

export default Filters
