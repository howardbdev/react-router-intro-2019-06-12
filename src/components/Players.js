import React from 'react'
import PlayerCard from './PlayerCard.js'
import { Link } from 'react-router-dom'


const Players = ({players}) => {
  return (
    <div>
      <h2>PLAYERS</h2>
      {players.map(p => <PlayerCard key={p.name} player={p}/>)}
    </div>
  )
}

export default Players
