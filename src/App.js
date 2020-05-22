import React, { Component } from "react";
import Header from "./components/Header"
import Option from "./components/Option"
import Tracker from "./components/Tracker"
import "./App.css";

export default class App extends Component {
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
    return (
      <div className="App">
        App.js
        <Header />
        <Option trackPlayer={this.trackPlayer} />
      </div>
    )
  }
}
