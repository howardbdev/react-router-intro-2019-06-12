import React from 'react'
import PlayerCard from './PlayerCard.js'

const players = [
  {
    name: "Alex Morgan",
    number: 12
  },
  {
    name: "Carly Lloyd",
    number: 30
  },
  {
    name: "Crystal Dunne",
    number: 20
  },
  {
    name: "Alyssa Naeher",
    number: 1
  },
  {
    name: "Becky Sauerbrunn",
    number: 4
  },
]

class Players extends React.Component {
  constructor() {
    super()
    this.state = {
      players
    }
  }

  render() {
    return (
      <div>
        <h2>PLAYERS</h2>
        {this.state.players.map(p => <PlayerCard key={p.name} player={p}/>)}
      </div>
    )
  }
}

export default Players
