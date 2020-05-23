import React, { Component } from "react";

export default class Chooser extends Component {
  constructor() {
    super();

    this.state = {
      selectedChooser: false,
    };
  }

  checkChooser() {
      
  }

  render() {
    return <div>{this.props.data.name}</div>;
  }
}
