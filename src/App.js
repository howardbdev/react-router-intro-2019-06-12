import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Players from './components/Players.js'
import PlayerCard from './components/PlayerCard'
import Teams from './components/Teams.js'
import Home from './components/Home.js'
import { Switch, Route, Link, NavLink, withRouter } from 'react-router-dom'
import api from './utilities/api.js'



// I changed back to just props so that you can throw in a debugger and see what withRouter gives you... you can see the same thing by looking at the Players or Teams component in the React dev tools
class App extends React.Component {
  state = {
    players: []
  }

  componentDidMount() {
    api.get('/players')
      .then(players => this.setState({
        players
      }))
  }

  handleClick = () => {
    if (this.props.location.pathname === "/teams") {
      // note that the history prop received through Router or withRouter is unique amongst props -- it is mutable!!!
      this.props.history.push("/players")
    } else {
      this.props.history.push("/teams")
    }
  }

  render () {
    return (
      <div className="App">
        <div>
          <NavLink to="/players">Players | </NavLink>
          <NavLink to="/teams">Teams</NavLink>
        </div>
        <Switch>
          <Route exact path="/players" render={props => <Players players={this.state.players} {...props}/>} />
          <Route exact path="/teams" component={Teams} />
          <Route component={Home} />
        </Switch>
        <button onClick={this.handleClick}>Team and Players toggle!</button>
      </div>
    );
  }
}

export default withRouter(App);

// a comment as I'm not sure I mentioned this during lecture but it's important:
// note on withRouter(): you may not need to use it!
// each component rendered through a Route match will automatically receive history, match, and location props
// so it might be rare that you would actually need withRouter() in your code -- often changes to the url will happen from within components that already have the router props (history, match, location) -- but I needed it for this example because App is not rendered as a result of matching a Route and therefore doesn't automatically receive those props...

// Now you might be thinking, "How in the world would I do this if I'm using Redux/?? -- I don't have access to history from my action creator files!"
// True enough, but remember history is just an object, and unlike most props, it is mutable... which means you can just pass it along as an argument to an action creator!
// below is some pseudocode around that situation...
// Imagine an addPlayer action creator that's async, and if the player is successfully created we want to route to that new player's show page...
// from here, or any component that uses this action creator:
// `props.addPlayer(player, props.history)`
// and in the corresponding action creator:
// const addPlayer = (player, history) => {
//   return dispatch => {
//     return fetch(url + options & headers)
//      .then(r=>r.json())
//      .then(resp => {
//        if (failure) {
//          (handle failure)
//          (show error message and allow new form subit, perhaps)
//        } else {
//          (success )
//          dispatch((action to update state with the resp))
//          and here's the point, finally:
//          history.push("/players/${resp.player.id}")
//          (I didn't yet build this route ^^ in this example, as we didn't get to dynamic routing... next time!)
//        }
//    })
//  }
//}
