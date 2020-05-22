import React, { Component } from "react";
import Header from "./components/Header";
import Option from "./components/Option";
import Tracker from "./components/Tracker";
import "./App.css";

export default class App extends Component {
  constructor() {
    super();

    this.state = {
      trackedPlayers: [],
    };
    this.trackPlayer = this.trackPlayer.bind(this);
    this.editPlayer = this.editPlayer.bind(this);
    this.removePlayer = this.removePlayer.bind(this);
  }

  componentDidMount() {}

  trackPlayer() {}

  editPlayer(
    id,
    newName,
    newMaxRank,
    newMaxMMR,
    newMatches,
    newWins,
    newLosses,
    newAbandons,
    newWinPercent
  ) {}

  removePlayer(id) {}

  render() {
    return (
      <div className="App">
        App.js
        <Header />
        <Option trackPlayer={this.trackPlayer} />
        <Tracker
          trackedPlayers={this.state.trackedPlayers}
          editPlayer={this.editPlayer}
          removePlayer={this.removePlayer}
        />
      </div>
    );
  }
}
