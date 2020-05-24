import React, { Component } from "react";

export default class Player extends Component {
  constructor() {
    super();

    this.state = {
      editor: false,
      nameInput: "",
      maxRankInput: "",
      maxMMRInput: "",
      matchesInput: "",
      winsInput: "",
      lossesInput: "",
      abandonsInput: "",
      winPercentInput: "",
    };
  }

  toggleEdit() {}

  handleChange(e) {}

  saveNewInfo() {}

  render() {
    return (
      <div className="table">
        <div className="name">
          <p>{this.props.data.name}</p>
        </div>
        <div className="rank">
          <p>{this.props.data.maxRank}</p>
        </div>
        <div className="mmr">
          <p>{this.props.data.maxMMR}</p>
        </div>
        <div className="matches">
          <p>{this.props.data.matches}</p>
        </div>
        <div className="wins">
          <p>{this.props.data.wins}</p>
        </div>
        <div className="losses">
          <p>{this.props.data.losses}</p>
        </div>
        <div className="abandons">
          <p>{this.props.data.abandons}</p>
        </div>
        <div className="win-percent">
          <p>{this.props.data.winPercent}</p>
        </div>
      </div>
    );
  }
}
