import React from 'react';
import HogDetails from './HogDetails'


// const hC = (event) => {
//   event.preventDefault()
//   console.log(event)
// }

class TheHog extends React.Component {
  constructor(){
    super();

    this.state = {
      isClicked: false
    }
  }

  clickHandle = (event) => {
    event.preventDefault()
    console.log(event.target)
      this.setState({
        isClicked: true
      })
  }

  render() {
    console.log(this.props)
    let betterUrl = require(`../hog-imgs/${this.props.hogInfo.name.split(" ").join("_").toLowerCase()}.jpg`)
    return(

      <div className="hogCard" onClick={this.clickHandle}>
      <h2 id='hog-name'>{this.props.hogInfo.name}</h2>
      <img src={betterUrl} alt=""></img>
      <h2 id='hog-details'> {this.state.isClicked ? <HogDetails hogs = {this.props.hogInfo}/> : null} </h2>
      </div>

    )
  }
}


export default TheHog;
