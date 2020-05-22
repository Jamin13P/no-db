import React from "react";
import Player from "./Player";

function Tracker(props) {
  return (
    <div>
      Tracker.js
      <Player editPlayer={props.editPlayer} removePlayer={props.removePlayer} />
    </div>
  );
}

export default Tracker;
