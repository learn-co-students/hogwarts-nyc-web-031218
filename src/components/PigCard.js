import React from 'react';
import PigDetail from './PigDetail'

class PigCard extends React.Component {
  state = {
    isHidden: true
  }

  toggleHidden = () => {

    this.setState({
      isHidden: !this.state.isHidden
    })
  }


  render() {
    // console.log(this.props)
    return (
      <div onClick={this.toggleHidden} className="ui eight wide column">
        <p>{this.props.name}</p>
        <img src={this.props.image} alt="" />
        {!this.state.isHidden && <PigDetail {...this.props} />}
      </div>
    )
  }
}

export default PigCard;
