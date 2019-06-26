import React from 'react'
import NewPlayerForm from './NewPlayerForm'
import PlayerCard from './PlayerCard'

import { NavLink, Switch, Route, Redirect } from 'react-router-dom'


const Players = ({players, handleSubmit}) => {
  return (
    <div className="Players">
      <div>
        {players.map(p => <><NavLink key={p.jersey_number} to={`/players/${p.jersey_number}`}>{p.name}</NavLink><br/></>)}
      </div>

      <Switch>
        <Route exact path="/players/new" render={props => <NewPlayerForm handleSubmit={handleSubmit} {...props}/>}/>} />

        <Route
          exact
          path="/players/:jersey_number"
          render={({ match }) => {
            const playerJerseyNumber = match.params.jersey_number
            const player = players.find(p => p.jersey_number === playerJerseyNumber)
            return <PlayerCard player={player}/>
          }
        }/>

      </Switch>
    </div>
  )
}

export default Players
