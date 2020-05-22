const stats = require("./statController")

module.exports = {
    getAllPlayers: (req, res) => {
        res.status(200).send(stats)
    }
}