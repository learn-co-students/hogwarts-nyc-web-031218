import React from 'react';
import TheHog from '../components/TheHog'

class HogsList extends React.Component {
  constructor(){
    super();

    this.state = {
    }
  }

  render() {
    const Hog = this.props.hogs.map(mappedHogs => {
      // return console.log(mappedHogs["specialty"])
      return <TheHog key={mappedHogs.name} hogInfo={mappedHogs}/>
    })

    return (

      <div className="ui grid container">
        {Hog}
      </div>
    )
  }
}


export default HogsList;
