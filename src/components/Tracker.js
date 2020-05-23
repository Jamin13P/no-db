import React from "react";
import Player from "./Player";

function Tracker(props) {
  const playerMap = props.trackedPlayers.map((elem) => (
    <Player
      key={elem.id}
      editPlayer={props.editPlayer}
      removePlayer={props.removePlayer}
      data={elem}
    />
  ));
  return (
    <div style={{ fontSize: 20 }}>
      <h1>Tracker</h1>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        {playerMap}
      </div>
    </div>
  );
}

export default Tracker;
