import React from 'react';
import logo from './logo.svg';
import './App.css';
import Players from './components/Players.js'
import Teams from './components/Teams.js'
import Home from './components/Home.js'
import { Switch, Route, Link, NavLink, withRouter } from 'react-router-dom'

// I changed back to just props so that you can throw in a debugger and see what withRouter gives you... you can see the same thing by looking at the Players or Teams component in the React dev tools
const App = (props) =>  {

  const handleClick = () => {
    if (props.location.pathname === "/teams") {
      // note that the history received through Router or withRouter is unique amongst props -- it is mutable!!!
      props.history.push("/players")
    } else {
      props.history.push("/teams")
    }
  }

  return (
    <div className="App">
      <div>
        <NavLink to="/players">Players | </NavLink>
        <NavLink to="/teams">Teams</NavLink>
      </div>
      <Switch>
        <Route exact path="/players" component={Players} />
        <Route exact path="/teams" component={Teams} />
        <Route component={Home} />
      </Switch>
      <button onClick={handleClick}>Team and Players toggle!</button>
    </div>
  );
}

// a comment as I'm not sure I mentioned this during lecture but it's important:
// note on withRouter(): you may not need to use it!
// each component rendered through a Route match will automatically receive history, match, and location props
// so it might be rare that you would actually need withRouter() in your code -- often changes to the url will happen from within components that already have the router props (history, match, location) -- but I needed it for this example because App is not rendered as a result of matching a Route and therefore doesn't automatically receive those props...
export default withRouter(App);
