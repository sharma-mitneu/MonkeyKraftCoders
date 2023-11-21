import express from 'express';
import * as leaderboardController from '../controllers/leaderboardController.js';

const router = express.Router();

// Routes for leaderboard
router.route('/api/challenges/:challengeId/leaderboard')
  .get(leaderboardController.getLeaderboard)
  .post(leaderboardController.addScore);

router.route('/api/challenges/:challengeId/leaderboard/:id')
  .put(leaderboardController.updateScore)
  .delete(leaderboardController.removeScore);

export default router;
