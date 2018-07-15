import React from 'react';
import { connect } from 'react-redux';

class AddPlayerForm extends React.Component {
  constructor() {
    super();
    this.state = {
      name: '',
      position: '',
      id: null
    }

    this.addPlayer = this.addPlayer.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  addPlayer(event) {
    event.preventDefault();
    this.setState(
      (state) => ({
        id: + new Date()
      }),
      () => this.props.addPlayer(this.state)
    )
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  render() {
    return (
      <form onSubmit={this.addPlayer}>
        <input name="name" value={this.state.name} onChange={this.handleChange} placeholder="Name(s) and surname(s)" />
        <select name="position" value={this.state.position} onChange={this.handleChange} placeholder="Position">
          <option value="Goalkeeper">Goalkeeper</option>
          <option value="Defender">Defender</option>
          <option value="Midfielder">Midfielder</option>
          <option value="Attacker">Attacker</option>
        </select>
        <input type="submit" value="Add player" />
      </form>
    )
  }
}

export default AddPlayerForm;