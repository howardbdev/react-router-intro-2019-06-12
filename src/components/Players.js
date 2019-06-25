import React from 'react'
import { Link } from 'react-router-dom'

const Players = ({players}) => {
  return (
    <div>
      <h2>PLAYERS</h2>
      {players ? players.map(p => (<><Link to={`/players/${p.jersey_number}`}>{p.name}</Link><br/></>)) : null}
    </div>
  )
}

export default Players
