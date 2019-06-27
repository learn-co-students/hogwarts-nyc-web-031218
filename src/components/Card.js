import React, { Component } from "react";

class Card extends Component {
  constructor() {
    super();
    this.state = {
      show: false
    };
  }

  pigsNameChanged = () => {
    return this.props.pig.name
      .toLowerCase()
      .split(" ")
      .join("_");
  };

  changeStateShow = () => {
    this.setState({
      show: !this.state.show
    });
  };
  render() {
    return (
      <div className="ui four wide column" onClick={this.changeStateShow}>
        <h1> {this.props.pig.name} </h1>
        <img
          alt={`${this.props.pig.name}`}
          src={require(`../hog-imgs/${this.pigsNameChanged()}.jpg`)}
        />
        {this.state.show ? (
          <div>
            <p> Specialty: {this.props.pig.specialty} </p>
            <p> Weight: {this.props.pig.weight} </p>
            <p> Medal: {this.props.pig.medal} </p>
          </div>
        ) : (
          <div />
        )}
      </div>
    );
  }
}

export default Card;
