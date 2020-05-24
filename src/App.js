import React, { Component } from "react";
import Header from "./components/Header";
import Option from "./components/Option";
import Tracker from "./components/Tracker";
import axios from "axios";
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

  componentDidMount() {
    axios
      .get("/api/tracked-players")
      .then((res) => {
        this.setState({
          trackedPlayers: res.data,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  trackPlayer(
    name,
    maxRank,
    maxMMR,
    matches,
    wins,
    losses,
    abandons,
    winPrecent
  ) {
    const body = {
      name,
      maxRank,
      maxMMR,
      matches,
      wins,
      losses,
      abandons,
      winPrecent,
    };
    axios
      .post("/api/tracked-players", body)
      .then((res) => {
        this.setState({
          trackedPlayers: res.data,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }

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
  ) {
    const body = {
      newName,
      newMaxRank,
      newMaxMMR,
      newMatches,
      newWins,
      newLosses,
      newAbandons,
      newWinPercent,
    };
    axios
      .put(`/api/tracked-players/${id}`, body)
      .then((res) => {
        this.setState({
          trackedPlayers: res.data,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  removePlayer(id) {
    axios
      .delete(`/api/tracked-players/${id}`)
      .then((res) => {
        this.setState({
          trackedPlayers: res.data,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  render() {
    return (
      <div className="App">
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
