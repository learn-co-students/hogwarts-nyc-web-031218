import React, { Component } from 'react';

export default class RenderHog extends React.Component {

  state = {
    hideHog: false,
    displayDetails: false
  }

  getImgSrc = (name) => {
  return "../hog-imgs/" + name.split(" ").join('_') + '.jpg'
  }

  imgClickHandler = () => {
    this.setState(
      {
        displayDetails: !this.state.displayDetails
      }
    )
  }
  hideHog = () => {
    this.setState(
      {
        hideHog: !this.state.hideHog
      }
    )
  }
  render() {
    this.getImgSrc('piggy')
      let displayStyle = {
        display: this.state.displayDetails ? 'block' : 'none'
      }
      let hogHide = {
        display: this.state.hideHog ? 'none' : 'block'
      }
        return (
          <div style={hogHide} className = "ui eight wide column">
            <h3>
            {this.props.hog.name}
            </h3>
            <button onClick={this.hideHog}>Hide Hog</button>
            <img onClick={this.imgClickHandler} src={this.getImgSrc(this.props.hog.name)}/>
            <ul style={displayStyle}>
              <li>Specialty: {this.props.hog.specialty}</li>
              <li>This pig is {this.props.hog.greased ? 'greased' : 'not greased'}</li>
              <li>Weight Ratio: {this.props.hog['weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water']}</li>
              <li>Highest Medal Achieved: {this.props.hog['highest medal achieved']}</li>
            </ul>
          </div>
        )
  }
}
