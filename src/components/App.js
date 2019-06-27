import React, { Component } from "react";
import "../App.css";
import Nav from "./Nav";
import Filter from "./Filter";
import PigsCards from "./PigsCards";
import hogs from "../porkers_data";

class App extends Component {
  constructor() {
    super();

    this.state = {
      pigs: [],
      filters: {
        greased: null,
        sort: ""
      }
    };
  }

  componentDidMount() {
    this.getPigsData();
  }

  getPigsData = () => {
    this.setState({
      pigs: hogs
    });
  };

  updatePigsState = filteredPigs => {
    this.setState({
      pigs: filteredPigs
    });
  };

  render() {
    return (
      <div className="App">
        <Nav />
        <Filter
          updatePigsState={this.updatePigsState}
          pigs={this.state.pigs}
          getPigsData={this.getPigsData}
        />
        <br />
        <PigsCards pigs={this.state.pigs} />
      </div>
    );
  }
}

export default App;
