// leaderboardController.js

import * as leaderboardService from '../services/leaderboard-service.js';
import { setResponse, setErrorResponse } from './response-handler.js';

export const getLeaderboard = async (request, response) => {
  try {
    const challengeId = request.params.challengeId;
    const leaderboard = await leaderboardService.getLeaderboard(challengeId);
    setResponse(leaderboard, response);
  } catch (error) {
    setErrorResponse(error, response);
  }
};

export const addScore = async (request, response) => {
  try {
    const newScore = { ...request.body, challengeId: request.params.challengeId };
    const score = await leaderboardService.addScore(newScore);
    setResponse(score, response);
  } catch (error) {
    setErrorResponse(error, response);
  }
};

export const updateScore = async (request, response) => {
  try {
    const id = request.params.id;
    const updatedScore = { ...request.body, challengeId: request.params.challengeId };
    const score = await leaderboardService.updateScore(id, updatedScore);
    setResponse(score, response);
  } catch (error) {
    setErrorResponse(error, response);
  }
};

export const removeScore = async (request, response) => {
  try {
    const id = request.params.id;
    await leaderboardService.removeScore(id);
    setResponse({}, response);
  } catch (error) {
    setErrorResponse(error, response);
  }
};
