import React from 'react'
import TeamCard from './TeamCard.js'

const teams = [
  {
    name: "USA",
    number: 1
  },
  {
    name: "Thailand",
    number: 4
  },
  {
    name: "Brazil",
    number: 2
  },
  {
    name: "Canada",
    number: 3
  }
]


class Teams extends React.Component {
  constructor() {
    super()
    this.state = {
      teams
    }
  }

  render() {
    return (
      <div>
        <h2>TEAMS</h2>
        {this.state.teams.map(t => <TeamCard key={t.name} team={t}/>)}
      </div>
    )
  }
}

export default Teams
