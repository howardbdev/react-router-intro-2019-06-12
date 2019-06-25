import React from 'react'


class PlayerCard extends React.Component {

  render(){
      return (
        this.props.player ?
        <div>
        <h4>{this.props.player.name} - {this.props.player.jerseyNumber}</h4>
        <p>{this.props.player.position}</p>
        <p>{this.props.player.birthday}</p>
        <p>{this.props.player.caps}</p>
        <p>{this.props.player.goals}</p>
        <p>{this.props.player.club}</p>
        </div> :
        <h3>Player Card but no Player</h3>
      )
    }
}

export default PlayerCard
