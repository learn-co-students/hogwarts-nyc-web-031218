import React, { Component } from 'react';

export default class Filter extends React.Component {
  state = {
    searchText: '',
  }

  render () {

    return (
      <div>
        <form>
        Filter Pigs by Name: <input type='text' onChange={this.props.nameFilter} value={this.props.nameText}/>
        Filter Pigs by Weight: <input type='text' onChange={this.props.weightFilter} value={this.props.weightText}/>
        </form>
      </div>
    )
  }
}
