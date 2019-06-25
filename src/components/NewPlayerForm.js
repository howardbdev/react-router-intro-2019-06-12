import React, { Component } from 'react';

class NewPlayerForm extends Component {
  state = {
      name: "",
      jersey_number: "",
      position: "",
      birthday: "",
      caps: "",
      goals: "",
      club: ""
  }

  handleChange = ({target: {name, value}}) => this.setState({
    [name]: value
  })

  render() {
    const { handleSubmit } = this.props
    return (
      <form onSubmit={event => handleSubmit(event, this.state)}>
        <input
          onChange={this.handleChange}
          type="text"
          name="name"
          placeholder="name"
          value={this.state.name}
        /><br/>
        <input
          onChange={this.handleChange}
          type="text"
          name="jersey_number"
          placeholder="jersey_number"
          value={this.state.jersey_number}
        /><br/>
        <input
          onChange={this.handleChange}
          type="text"
          name="position"
          placeholder="position"
          value={this.state.position}
        /><br/>
        <input
          onChange={this.handleChange}
          type="text"
          name="birthday"
          placeholder="birthday"
          value={this.state.birthday}
        /><br/>
        <input
          onChange={this.handleChange}
          type="text"
          name="caps"
          placeholder="caps"
          value={this.state.caps}
        /><br/>
        <input
          onChange={this.handleChange}
          type="text"
          name="goals"
          placeholder="goals"
          value={this.state.goals}
        /><br/>
        <input
          onChange={this.handleChange}
          type="text"
          name="club"
          placeholder="club"
          value={this.state.club}
        /><br/>
        <input type="submit" value="Add Player"/>
      </form>
    );
  }

}

export default NewPlayerForm;
