import React from 'react';

const HogDetails = (props) => {
  console.log(props)
    return (
    <div id="hog-deets">
    <h3 id="hog-title">Specialty</h3>{props.hogs.specialty}
    <h3 id="hog-title">Weight Ratio</h3>{props.hogs['weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water']}
    <h3 id="hog-title">Highest Medal</h3>{props.hogs['highest medal achieved']}
    <h3 id="hog-title">Greased ?</h3>{JSON.stringify(props.hogs.greased)}
    </div>
  );
}


export default HogDetails
