import React from 'react';
import Player from './Player'

class PlayersList extends React.Component {
  constructor() {
    super();

    this.removePlayer = this.removePlayer.bind(this);
  }

  removePlayer(id) {
    this.props.removePlayer(id);
    // this.setState((state) => ({
    //   players: this.state.players.filter(player => player.id !== id)
    // }))
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