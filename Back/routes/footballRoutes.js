const express = require('express');
const router = express.Router();
const { getMatches, getTeam, getStandings } = require('../controllers/footballController');

router.get('/matches', getMatches);
router.get('/team', getTeam);
router.get('/standings/:competition', getStandings);

module.exports = router;
