import React from 'react';

class Filter extends React.Component{

state = {

}

// handleSubmit = (e) => {
//   e.preventDefault()
//   this.props.happy()
// }






render() {

  return (
    <form>
      Sort:
      <select onChange={this.props.handleSort} name="text">
        <option defaultValue hidden>Filter By</option>
        <option value="az">A - Z</option>
        <option value="za" >Z - A</option>
      </select>

      Greased:
      <input onChange={this.props.handleGrease} type="radio" id="yes" name="isGreased" value="true" />
      <label htmlFor="yes">Yes</label>
      <input onChange={this.props.handleGrease} type="radio" id="no" name="isGreased" value="false" />
      <label htmlFor="no">No</label>

      Weight:
      <select onChange={this.props.handleWeight} name="text">
        <option defaultValue hidden>Filter By</option>
        <option value="lh">Light to Heavy</option>
        <option value="hl" >Heavy to Light</option>
      </select>

    </form>
  )
 }
}

export default Filter;
