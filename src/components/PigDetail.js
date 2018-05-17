import React from 'react';

const PigDetail = (props) => {
  const weight = props['weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water']

  return (
    <div className="minPigTile normalText">
      <p><b>{props.greased ? "Greased" : "Not greased"}</b></p>
      <p><b>Specialty:</b> {props.specialty}</p>
      <p><b>Weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water</b>: {weight}</p>
      <p className="achievementText"><b>Highest Medal</b>: {props['highest medal achieved']}</p>
    </div>
  )
}

export default PigDetail;
