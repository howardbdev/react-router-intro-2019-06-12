import React from 'react'

const PlayerCard = ({player}) => {
    return (
      <div>
        <h4>{player.name} - {player.number}</h4>
      </div>
    )
}

export default PlayerCard
