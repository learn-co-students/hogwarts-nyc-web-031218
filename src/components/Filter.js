import React from 'react';

class Filter extends React.Component {
  render() {
    return (
      <div className="filter">
        <button>Sort by Name</button>
        <button>Sort by Weight</button>
        <button>Filter Greased</button>
      </div>
    )
  }
}

export default Filter;
