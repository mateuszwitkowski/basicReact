import React from 'react';
import { connect } from 'react-redux';
import * as playersActions from '../store/players.actions';

class PlayerForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props && this.props.player
      ? this.props.player
      : {
        name: '',
        position: '',
        id: null
      }

    this.savePlayer = this.savePlayer.bind(this);
    this.createPlayer = this.createPlayer.bind(this);
    this.updatePlayer = this.updatePlayer.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  savePlayer(event) {
    event.preventDefault();
    if (this.state.id) {
      this.updatePlayer(this.state);     
    } else {
      this.createPlayer(this.state);     
    }
  }

  createPlayer(player) {
    player.id = + new Date();
    this.props.dispatch(playersActions.addPlayer(player));
  }

  updatePlayer(player) {
    this.props.dispatch(playersActions.updatePlayer(player));
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  render() {
    return (
      <form onSubmit={this.savePlayer}>
        <input name="name" value={this.state.name} onChange={this.handleChange} placeholder="Name(s) and surname(s)" />
        <select name="position" value={this.state.position} onChange={this.handleChange} placeholder="Position">
          <option value="Goalkeeper">Goalkeeper</option>
          <option value="Defender">Defender</option>
          <option value="Midfielder">Midfielder</option>
          <option value="Attacker">Attacker</option>
        </select>
        <button type="submit">{this.state.id ? 'Save changes' : 'Add player'}</button>
      </form>
    )
  }
}

export default connect()(PlayerForm);