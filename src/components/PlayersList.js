import React from 'react';
import Player from './Player';

import { connect } from 'react-redux';

class PlayersList extends React.Component {
  constructor(props) {
    super(props);

    this.removePlayer = this.removePlayer.bind(this);
  }

  removePlayer(id) {
    this.props.removePlayer(id);
  }

  render() {
    return (
      <div>
        {
          this.props.players.map(player => (<Player key={player.id.toString()} player={player} removePlayer={this.removePlayer} />))
        }
      </div>
    )
  }

}

export default PlayersList;