// routes/index.js

const express = require('express');
const router = express.Router();
const matchController = require('../controllers/matchController');
const teamController = require('../controllers/teamController');
const playerController = require('../controllers/playerController');

router.get('/matches', matchController.getAllMatches);
router.post('/matches', matchController.createMatch);

router.get('/teams', teamController.getAllTeams);
router.post('/teams', teamController.createTeam);

router.get('/players', playerController.getAllPlayers);
router.post('/players', playerController.createPlayer);

module.exports = router;
