import React from 'react'
import { Route, Switch, Link } from 'react-router-dom'
import PlayerCard from './PlayerCard.js'
import NewPlayerForm from './NewPlayerForm.js'


const Players = ({players, handleSubmit}) => {
  return (
    <div className="Players">
      <div>
        {players ? players.map(p => (<><Link to={`/players/${p.jersey_number}`}>{p.name}</Link><br/></>)) : null}
      </div>
      <div>
        <Route exact path="/players/new" component={props => <NewPlayerForm {...props} handleSubmit={handleSubmit}/>}/>
        <Route exact path="/players/:jersey_number" render={props => {
              console.log(props.match)
              const player = players.find(p => p.jersey_number === props.match.params.jersey_number)
              return <PlayerCard player={player ? player : {}} {...props}/>
            }
          }
        />
      </div>
    </div>
  )
}

export default Players
