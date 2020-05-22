const express = require("express");
const app = express();
const trackedCtrl = require("./controllers/trackedPlayersController");
const untrackedCtrl = require("./controllers/untrackedPlayerController");
const SERVER_PORT = 4513;

app.use(express.json());

// Untracked players endpoint
app.get("/api/untracked-players", untrackedCtrl.getAllPlayers);

// Tracked players endpoints
app.get("/api/tracked-players", trackedCtrl.getTrackedPlayers);
app.post("/api/tracked-players", trackedCtrl.trackPlayer);
app.put("/api/tracked-players/:player_id", trackedCtrl.editPlayer);
app.delete("/api/tracked-players/:player_id", trackedCtrl.deletePlayer);

app.listen(SERVER_PORT, () => console.log(`Tracking on port ${SERVER_PORT}`));
