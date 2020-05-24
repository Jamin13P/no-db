import React, { Component } from "react";
import Chooser from "./Chooser";
import axios from "axios";

export default class Option extends Component {
  constructor() {
    super();

    this.state = {
      untrackedPlayers: [],
    };
  }

  componentDidMount() {
    axios
      .get("/api/untracked-players")
      .then((res) => {
        this.setState({
          untrackedPlayers: res.data,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  render() {
    const playerMap = this.state.untrackedPlayers.map((elem) => (
      <Chooser key={elem.id} trackPlayer={this.props.trackPlayer} data={elem} />
    ));

    return (
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          fontSize: 28,
        }}
      >
        {playerMap}
      </div>
    );
  }
}
