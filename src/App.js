import React, { Component } from "react";
import "./App.css";

class App extends Component {
  constructor() {
    super();

    this.state = {
      trackedPlayers: []
    }
    this.trackPlayer = this.trackPlayer.bind(this)
    this.editPlayer = this.editPlayer.bind(this)
    this.deletePlayer = this.deletePlayer.bind(this)
  }

  componentDidMount(){}

  trackPlayer(){}

  editPlayer(id, newName, newMaxRank, newMaxMMR, newMatches, newWins, newLosses, newAbandons, newWinPercent){}

  deletePlayer(id){}

  render() {
    return <div className="App"></div>;
  }
}

export default App;
