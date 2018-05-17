import React from 'react';

class PigCard extends React.Component {

  state = {
    clicked: false,
    hiding: false
  }

  pigClick = (e) => {

    this.setState((prevState) => {
      return {clicked: !prevState.clicked}
    })
  }

  hideClicked = (e) => {
    this.setState((prevState) => {
      return {hiding: !prevState.hiding}
    })
  }

  pigDeets = () => {
    if(this.state.clicked)
      return (
          <div>
            <p>{this.props.specialty}</p>
            <p>{this.props.greased}</p>
            <p>{this.props.medal}</p>
            <p>{this.props.weight}</p>
          </div>)
  }

  render(){
    let imgSmart = require('../hog-imgs/' + this.props.name.split(' ').join('_').toLowerCase() + '.jpg')

    if(!this.state.hiding){
      return (
        <div className='pigTile' onClick={this.pigClick}>
          <h1 name='piggy' >{this.props.name}</h1>
          <img alt='no Pic' src={imgSmart} ></img>
          {this.pigDeets()}
          <br/>
          <button onClick={this.hideClicked}>Hide Hog</button>
        </div>
      )
    } else {
        return (<div></div>)
    }
  }
}

export default PigCard
