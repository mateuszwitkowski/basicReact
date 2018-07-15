import React from 'react';

class Player extends React.Component {

  render() {
    return (
      <div>
        <p>{this.props.player.name}</p>
        </div>
    )
  }
}

export default Player;