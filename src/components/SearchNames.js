import React from 'react';

class SearchNames extends React.Component {
  render(){
    return (<input type='text' placeholder='name' onChange={this.props.nameSearch}></input>)
  }
}

export default SearchNames
