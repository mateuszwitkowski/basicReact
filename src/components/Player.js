import React from 'react';
import PlayerForm from './PlayerForm';
import * as playersActions from '../store/players.actions';
import { connect } from 'react-redux';


class Player extends React.Component {
  constructor(props) {
    super(props);
    this.removePlayer = this.removePlayer.bind(this);
    this.editPlayer = this.editPlayer.bind(this);
  }

  removePlayer() {
    this.props.removePlayer(this.props.player.id);
  }

  editPlayer() {
    this.props.dispatch(playersActions.setEditedPlayer(this.props.player.id));
  }

  render() {
    return (
      <div>
        {this.props.editedPlayerId !== this.props.player.id ? (
          <div className="player-wrapper">
          <div className="player">
            <p className="player__name"><span className="player__name__title">Name: </span>{this.props.player.name}</p>
            <p className="player__position"><span className="player__position__title">Position: </span>{this.props.player.position}</p>
          </div>
          <div className="player-actions">
            <button className="player__button button" onClick={this.removePlayer} >Remove player</button>
            <button className="player__button button" onClick={this.editPlayer}>Edit player</button>
          </div>
          </div>
        ) : (
            <div>
              <PlayerForm player={this.props.player}/>
            </div>
          )}
      </div>
    )
  }
}

export default connect((state) => ({
  editedPlayerId: state.players.editedPlayerId
}))(Player);