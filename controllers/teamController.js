// controllers/teamController.js

const Team = require('../models/Team');

exports.getAllTeams = async (req, res) => {
    try {
        const teams = await Team.find();
        res.json(teams);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.createTeam = async (req, res) => {
    const team = new Team({
        name: req.body.name,
        players: req.body.players,
    });

    try {
        const newTeam = await team.save();
        res.status(201).json(newTeam);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};
