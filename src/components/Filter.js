import React, { Component } from "react";

class Filter extends Component {
  constructor() {
    super();
    this.state = {
      filter: false
    };
  }

  filterGreasedPigs = e => {
    if (this.state.filter) {
      this.setState({
        filter: !this.state.filter
      });
      this.props.getPigsData();
    } else {
      const greasy = this.props.pigs.filter(pig => pig.greased === true);
      this.setState({
        filter: !this.state.filter
      });
      this.props.updatePigsState(greasy);
    }
  };

  handleClick = e => {
    if (e.target.value === "name") {
      this.orderPigsByName();
    } else if (e.target.value === "weight") {
      this.orderPigsByWeight(e);
    } else {
    }
  };

  orderPigsByName = e => {
    let sorted = this.props.pigs.sort(function(a, b) {
      var nameA = a.name.toUpperCase();
      var nameB = b.name.toUpperCase();
      if (nameA < nameB) {
        return -1;
      }
      if (nameA > nameB) {
        return 1;
      }
      return 0;
    });
    this.props.updatePigsState(sorted);
  };

  orderPigsByWeight = e => {
    let sorted = this.props.pigs.sort(function(a, b) {
      return a.weight - b.weight;
    });
    this.props.updatePigsState(sorted);
  };

  render() {
    return (
      <div>
        <select onChange={this.handleClick}>
          <option value="select" selected="selected" disabled>
            Select
          </option>
          <option value="name"> Name </option>
          <option value="weight"> Weight </option>
        </select>
        <button type="submit" onClick={this.updatePigsState}>
          Sort
        </button>
        <span>
          Filter Greased Pigs:
          <input type="checkbox" onClick={this.filterGreasedPigs} />
        </span>
      </div>
    );
  }
}

export default Filter;
