import React from 'react';
import PigDetail from './PigDetail'
import HideCard from './HideCard'

class PigCard extends React.Component {
  state = {
    isHidden: true,
    showPig: true,
    pigText: "Hide Card"
  }

  toggleHidden = () => {
    this.setState({
      isHidden: !this.state.isHidden
    })
  }

  toggleHidePig = () => {
    this.setState({
      showPig: !this.state.showPig,
    }, () => {
      this.setState({
        pigText: this.state.showPig ? "Hide Card" : "Show Card"
      })
    })
  }

  render() {
    const divStyle = {
      display: (this.state.showPig ? 'block' : 'none'),
    }

    return (
      <div className="ui four wide column">
        <div className="pigTile">
          <div style={divStyle} onClick={this.toggleHidden}>
            <h3>{this.props.name}</h3>
            <img src={this.props.image} alt="" />
            {!this.state.isHidden && <PigDetail {...this.props} />}
          </div>

          <HideCard pigText={this.state.pigText} toggleHidePig={this.toggleHidePig}/>
        </div>
      </div>
    )
  }
}

export default PigCard;
