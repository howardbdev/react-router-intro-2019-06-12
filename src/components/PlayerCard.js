import React from 'react'

const PlayerCard = ({player}) => {
    const {
      name,
      image_url,
      jersey_number,
      position,
      birthday,
      caps,
      goals,
      club
    } = player
    return (
      <div>
        <h2>{ name }</h2>
        <p>Jersey number: { jersey_number }</p>
        <p>Position: { position }</p>
        <p>Birthday: { birthday }</p>
        <p>Caps: { caps }</p>
        <p>Goals: { goals }</p>
        <p>Club: { club }</p>
      </div>
    )
}

export default PlayerCard
