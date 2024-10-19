// models/team.js

const mongoose = require("mongoose");

const Team = mongoose.model(
    "Team",
    new mongoose.Schema({
        name: { type: String, required: true },
        players: [{ type: mongoose.Schema.Types.ObjectId, ref: "Player" }],
    })
);

module.exports = Team;
