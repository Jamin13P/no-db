import React, { Component } from "react";

export default class Player extends Component {
  constructor(props) {
    super(props);

    const { data } = this.props;

    this.state = {
      editor: false,
      nameInput: data.name,
      maxRankInput: data.maxRank,
      maxMMRInput: data.maxMMR,
      matchesInput: data.matches,
      winsInput: data.wins,
      lossesInput: data.losses,
      abandonsInput: data.abandons,
    };
  }

  toggleEdit() {
    this.setState({
      editor: !this.state.editor,
    });
  }

  handleNameChange(e) {
    this.setState({
      nameInput: e.target.value,
    });
  }

  handleMaxRankChange(e) {
    this.setState({
      maxRankInput: e.target.value,
    });
  }

  handleMaxMMRChange(e) {
    this.setState({
      maxMMRInput: e.target.value,
    });
  }

  handleMatchesChange(e) {
    this.setState({
      matchesInput: e.target.value,
    });
  }

  handleWinsChange(e) {
    this.setState({
      winsInput: e.target.value,
    });
  }

  handleLossesChange(e) {
    this.setState({
      lossesInput: e.target.value,
    });
  }

  handleAbandonsChange(e) {
    this.setState({
      abandonsInput: e.target.value,
    });
  }

  addNewPlayer(){}

  saveEditPlayer() {
    const { data } = this.props;
    const ts = this.state;
    this.props.editPlayer(
      data.id,
      ts.nameInput,
      ts.maxRankInput,
      ts.maxMMRInput,
      ts.matchesInput,
      ts.winsInput,
      ts.lossesInput,
      ts.abandonsInput
    );
    this.toggleEdit();
  }

  render() {
    const { data } = this.props;
    return (
      <div className="tracked-players">
        <div className="name">
          {!this.state.editor ? (
            <p>{this.state.nameInput}</p>
          ) : (
            <input
              className="name-input"
              onChange={(e) => this.handleNameChange(e)}
              value={this.state.nameInput}
            />
          )}
        </div>
        <div className="rank">
          {!this.state.editor ? (
            <p>{this.state.maxRankInput}</p>
          ) : (
            <input
              className="rank-input"
              onChange={(e) => this.handleMaxRankChange(e)}
              value={this.state.maxRankInput}
            />
          )}
        </div>
        <div className="mmr">
          {!this.state.editor ? (
            <p>{this.state.maxMMRInput}</p>
          ) : (
            <input
              type="number"
              className="mmr-input"
              onChange={(e) => this.handleMaxMMRChange(e)}
              value={this.state.maxMMRInput}
            />
          )}
        </div>
        <div className="matches">
          {!this.state.editor ? (
            <p>{this.state.matchesInput}</p>
          ) : (
            <input
              type="number"
              className="matches-input"
              onChange={(e) => this.handleMatchesChange(e)}
              value={this.state.matchesInput}
            />
          )}
        </div>
        <div className="wins">
          {!this.state.editor ? (
            <p>{this.state.winsInput}</p>
          ) : (
            <input
              type="number"
              className="wins-input"
              onChange={(e) => this.handleWinsChange(e)}
              value={this.state.winsInput}
            />
          )}
        </div>
        <div className="losses">
          {!this.state.editor ? (
            <p>{this.state.lossesInput}</p>
          ) : (
            <input
              type="number"
              className="losses-input"
              onChange={(e) => this.handleLossesChange(e)}
              value={this.state.lossesInput}
            />
          )}
        </div>
        <div className="abandons">
          {!this.state.editor ? (
            <p>{this.state.abandonsInput}</p>
          ) : (
            <input
              type="number"
              className="abandons-input"
              onChange={(e) => this.handleAbandonsChange(e)}
              value={this.state.abandonsInput}
            />
          )}
        </div>
        <div className="buttons">
          {!this.state.editor ? (
            <button className="edit" onClick={() => this.toggleEdit()}>
              Edit
            </button>
          ) : (
            <button className="save" onClick={() => this.saveEditPlayer()}>
              Save
            </button>
          )}
          {!this.state.editor ? (
            <button
              className="remove"
              onClick={() => this.props.removePlayer(data.id)}
            >
              Remove
            </button>
          ) : (
            <button className="cancel" onClick={() => this.toggleEdit()}>
              Cancel
            </button>
          )}
        </div>
      </div>
    );
  }
}
