import React from 'react';

const HideCard = (props) => {
  return (
    <div>
      <button id="hide-pig" onClick={props.toggleHidePig}>{props.pigText}</button>
    </div>
  )
}

export default HideCard;
