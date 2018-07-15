import React, { Component } from 'react';
import './App.css';

import PlayersList from './components/PlayersList';
import AddPlayerForm from './components/AddPlayerForm';
import * as playersActions from './store/players.actions';
import { connect } from 'react-redux';

class App extends Component {

  constructor(props) {
    super(props);
   
    this.addPlayer = this.addPlayer.bind(this);
    this.removePlayer = this.removePlayer.bind(this);
  }

  addPlayer(playerData) {
    this.props.dispatch(playersActions.addPlayer(playerData));
  }

  removePlayer(id) {
    this.props.dispatch(playersActions.removePlayer(id));
  }

  render() {
    return (
      <div>
        <PlayersList players={this.props.players} removePlayer={this.removePlayer}/>
        <AddPlayerForm addPlayer={this.addPlayer}/>
      </div>
    );
  }
}

export default connect((state) => ({
  players: state.players.players
}))(App);
