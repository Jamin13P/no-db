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
    const {data} = this.props
    return (
      <div className="tracked-players">
        <div className="name">
          <p>{data.name}</p>
        </div>
        <div className="rank">
          <p>{data.maxRank}</p>
        </div>
        <div className="mmr">
          <p>{data.maxMMR}</p>
        </div>
        <div className="matches">
          <p>{data.matches}</p>
        </div>
        <div className="wins">
          <p>{data.wins}</p>
        </div>
        <div className="losses">
          <p>{data.losses}</p>
        </div>
        <div className="abandons">
          <p>{data.abandons}</p>
        </div>
        <div className="win-percent">
          <p>{data.winPercent}</p>
        </div>
        <div className="buttons">
          <button className="edit" onClick={() => this.toggleEdit()}>Edit</button>
          <button className="remove" onClick={() => this.props.removePlayer(data.id)}>Remove</button>
        </div>
      </div>
    );
  }
}
