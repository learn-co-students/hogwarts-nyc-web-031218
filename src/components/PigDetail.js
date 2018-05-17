import React from 'react';

const PigDetail = (props) => {
  const weight = props['weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water']

  return (
    <div>
      <p>Specialty: {props.specialty}</p>
      <p>{props.greased ? "Greased" : "Not greased"}</p>
      <p>Weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water: {weight}</p>
      <p>Highest Medal: {props['highest medal achieved']}</p>
    </div>
  )
}

export default PigDetail;
