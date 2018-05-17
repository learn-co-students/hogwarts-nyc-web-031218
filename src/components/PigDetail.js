import React from 'react';


class PigDetail extends React.Component{

  render(){
    // console.log(this.props)
    const weight = this.props['weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water']

    return (
      <div>
        <p>Specialty: {this.props.specialty}</p>
        <p>{this.props.greased ? "Greased" : "Not greased"}</p>
        <p>Weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water: {weight}</p>
        <p>Highest Medal: {this.props['highest medal achieved']}</p>
      </div>
    )
  }


}

export default PigDetail
