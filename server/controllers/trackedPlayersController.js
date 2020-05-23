const players = [{id: 0, name: "Dalton", maxRank: "Platinum I", maxMMR: 4499, matches: 58, wins: 36, losses: 22, abandons: 0, winPercent: 62.07}];
let id = 1;

module.exports = {
  getTrackedPlayers: (req, res) => {
    res.status(200).send(players);
  },

  trackPlayer: (req, res) => {
    const {
      name,
      maxRank,
      maxMMR,
      matches,
      wins,
      losses,
      abandons,
      winPercent,
    } = req.body;

    const newPlayer = {
      id,
      name,
      maxRank,
      maxMMR,
      matches,
      wins,
      losses,
      abandons,
      winPercent,
    };

    players.push(newPlayer);

    id++;

    res.status(200).send(players);
  },

  editPlayer: (req, res) => {
    const { player_id } = req.params;
    const {
      newName,
      newMaxRank,
      newMaxMMR,
      newMatches,
      newWins,
      newLosses,
      newAbandons,
      newWinPercent,
    } = req.body;

    const index = players.findIndex((elem) => elem.id === +player_id);

    if (index === -1) {
      return res.status(404).send("Player not found");
    }

    const updatedPlayer = {
      id: +player_id,
      name: newName || players[index].name,
      maxRank: newMaxRank || players[index].maxRank,
      maxMMR: newMaxMMR || players[index].maxMMR,
      matches: newMatches || players[index].matches,
      wins: newWins || players[index].wins,
      losses: newLosses || players[index].losses,
      abandons: newAbandons || players[index].abandons,
      winPercent: newWinPercent || players[index].winPercent,
    };

    players[index] = updatedPlayer;

    res.status(200).send(players);
  },

  deletePlayer: (req, res) => {
    const { player_id } = req.params;

    const index = players.findIndex((elem) => elem.id === +player_id);

    if (index === -1) {
      return res.status(404).send("Player not found");
    }

    players.splice(index, 1);

    return res.status(200).send(players);
  },
};
