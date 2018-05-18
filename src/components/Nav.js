import piggy from '../porco.png';
import React from 'react';

const Nav = (props) => {
  return (
    <div className="navWrapper">
      <img src={piggy} className="App-logo" alt="piggy" />
      <span className="headerText">Hogwarts</span>
      <div className="TwirlyPig">
        <img src={piggy} className="App-logo" alt="piggy" />
      </div>
      <br></br>
      <br></br>
      <br></br>
      <h3 className="normalText">A React App for County Fair Hog Fans</h3>
      <div className="nav-buttons">
      <button onClick={()=> props.handleGreasyClick()}>Greased</button>
      <button onClick={()=> props.handleAZSortClick()}>A to Z</button>
      </div>
    </div>
  )
}

export default Nav
