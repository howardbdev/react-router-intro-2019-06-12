import React from 'react'

const TeamCard = ({team}) => {
    return (
      <div>
        <h4>{team.name} - {team.number}</h4>
      </div>
    )
}

export default TeamCard
