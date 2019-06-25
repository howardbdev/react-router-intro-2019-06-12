import React from 'react'
import PlayerCard from './PlayerCard.js'
import { Link } from 'react-router-dom'

const Players = ({ players }) => {


// what I want is to be able to click on a player's name and go to a show page for that player (PlayerCard)
    return (
      <div>
        <h2>PLAYERS</h2>
        {players.map(p => <p><Link
                                          player={p}
                                          to={`/players/${p.jerseyNumber}`}>{p.name}</Link></p>)
        }
      </div>
    )
}

export default Players
