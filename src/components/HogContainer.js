import React from 'react';
import Hog from './Hog'

class HogContainer extends React.Component{

render() {
  const hogs = this.props.hogs.map((hog) => {
    return <Hog key={hog.name} hogData={hog} />
  })
  return (
    <div>{hogs}</div>
  )
 }
}

export default HogContainer;
