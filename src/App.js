import React, { Component } from 'react';
import './App.css';

import PlayersList from './components/PlayersList';
import PlayerForm from './components/PlayerForm';
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
      <div className="container">
        <PlayersList players={this.props.players} removePlayer={this.removePlayer}/>
        <PlayerForm/>
      </div>
    );
  }
}

export default connect((state) => ({
  players: state.players.players
}))(App);
