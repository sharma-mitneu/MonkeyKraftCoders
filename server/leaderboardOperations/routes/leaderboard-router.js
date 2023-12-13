import express from 'express';
import * as leaderboardController from '../controllers/leaderboard-controller.js';

const router = express.Router();

// Routes for leaderboard
router.route('/')
  .get(leaderboardController.getLeaderboard)
  .post(leaderboardController.addScore);

router.route('/:id')
  .put(leaderboardController.updateScore)
  .delete(leaderboardController.removeScore);

export default router;
