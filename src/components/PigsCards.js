import React, { Component } from "react";
import Card from "./Card";

class PigsCards extends Component {
  renderPig = () => {
    return this.props.pigs.map(pig => <Card pig={pig} key={pig.name} />);
  };

  render() {
    return <div className="ui grid container">{this.renderPig()}</div>;
  }
}

export default PigsCards;
