import React from 'react';

class Greased extends React.Component {
  render(){
    return (
      <div>
        <label>Greased ? </label>
        <br/>
        <input type='checkBox' onChange={this.props.greasedFunc}></input>
        <br/>
      </div>
    )
  }
}

export default Greased
