import React from 'react'


class Hog extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      detailed: false
    }
  }

  handleClick = () => {
    this.setState({detailed: !this.state.detailed})
  }

  render () {
    const { hogData } = this.props
    const details = <div>
                      <p>Weight: {hogData['weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water']}</p>
                      <p>Highest Medal: {hogData['highest medal achieved']}</p>
                    </div>
    return (
      <div className="pigTile">
        <h3>{hogData.name}</h3>
        <img src={require(`../hog-imgs/${hogData.name.toLowerCase().replace(/ /gi, '_')}.jpg`)} />
        <p>Specialty: {hogData.specialty}</p>
        <p>Greased: {hogData.greased ? "Yes" : "No"}</p>
        <p>Weight: {hogData['weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water']}</p>
        <button onClick={ this.handleClick }>DETAILS</button>
        {this.state.detailed ? details : null }
      </div>
    )
  }
}


export default Hog;

// const Hog = props => {
//
//   const { hogData } = props
//
//   return (
//     <div className="pigTile">
//       <h3>{hogData.name}</h3>
//       <img src={require(`../hog-imgs/${hogData.name.toLowerCase().replace(/ /gi, '_')}.jpg`)} />
//       <p>{hogData.specialty}</p>
//       <p>{hogData.greased ? "Greased" : "Not Greased"}</p>
//       <button onClick={ this.handleClick }>DETAILS</button>
//     </div>
//   )
//
// }
