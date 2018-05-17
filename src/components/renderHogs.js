import React, { Component } from 'react';
import RenderHog from './renderHog.js'
import Uuid from 'uuid'
export default class RenderHogs extends React.Component {



  getHogs = () => {
    return this.props.hogs.map(hog => {
      return <RenderHog key={Uuid()} hog={hog} />
    })
  }

  render() {
    return (
      <div className="ui grid container">
      {this.getHogs()}
      </div>
    )
  }
}
//   {
//    name: 'Mudblood',
//    specialty: 'Mediocre magic',
//    greased: false,
//    'weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water': 2.0,
//    'highest medal achieved': 'bronze'
//  }
