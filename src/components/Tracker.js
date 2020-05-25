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
    <div className="tracker" style={{ fontSize: 20 }}>
      <h1>Tracker</h1>
      <div className="table">
        <section className="control">
          <div className="control-name">
            <p>Name</p>
          </div>
          <div className="control-rank">
            <p>Max Rank</p>
          </div>
          <div className="control-mmr">
            <p>Max MMR</p>
          </div>
          <div className="control-matches">
            <p>Matches</p>
          </div>
          <div className="control-wins">
            <p>Wins</p>
          </div>
          <div className="control-losses">
            <p>Losses</p>
          </div>
          <div className="control-abandons">
            <p>Abandons</p>
          </div>
          <div className="control-buttons">
            <p>Edit/Remove</p>
          </div>
        </section>
        {playerMap}
      </div>
    </div>
  );
}

export default Tracker;
