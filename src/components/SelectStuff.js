import React from 'react';

class SelectStuff extends React.Component {
  render(){
    return (
      <div>
        <select value={this.props.selectOption} onChange={this.props.sortBy}>
          <option value='weight'>weight</option>
          <option value='name'>name</option>
          </select>
          <br/>
      </div>
    )
  }
}

export default SelectStuff
