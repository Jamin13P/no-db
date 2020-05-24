import React, { Component } from "react";

export default class Chooser extends Component {
  constructor() {
    super();

    this.state = {
      selectedChooser: false,
    };
  }

  clickChooser() {
    const { data } = this.props;
    this.props.trackPlayer(
      data.name,
      data.maxRank,
      data.maxMMR,
      data.matches,
      data.wins,
      data.losses,
      data.abandons,
      data.winPercent
    );
  }

  render() {
    return (
      <div>
        <p onClick={() => this.clickChooser()}>{this.props.data.name}</p>
      </div>
    );
  }
}
