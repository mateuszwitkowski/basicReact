import React from 'react';

class Player extends React.Component {
  constructor() {
    super();
    this.removePlayer = this.removePlayer.bind(this);
  }

  removePlayer() {
    this.props.removePlayer(this.props.player.id);
  }

  render() {
    return (
      <div>
        <p>{this.props.player.name}</p>
        <button onClick={this.removePlayer} >Remove player</button>
        </div>
    )
  }
}

export default Player;