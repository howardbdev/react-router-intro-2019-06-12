import React from 'react'


const PlayerCard = ({player}) => {
    return (
      player ?
      <div>
      <h4>{player.name} - {player.jerseyNumber}</h4>
      <p>Pos: {player.position}</p>
      <p>Bday: {player.birthday}</p>
      <p>Caps: {player.caps}</p>
      <p>Goals: {player.goals}</p>
      <p>Club: {player.club}</p>
      </div> :
      <h3>Player Card but no Player</h3>
    )
}

export default PlayerCard
