import Leaderboard from '../models/leaderboard.js';

export const getLeaderboard = async (challengeId) => {
  try {
    const leaderboard = await Leaderboard.find({ challengeId }).exec();
    return leaderboard;
  } catch (error) {
    throw new Error(`Error getting leaderboard: ${error.message}`);
  }
};

export const addScore = async (newScore) => {
  try {
    const score = new Leaderboard(newScore);
    return await score.save();
  } catch (error) {
    throw new Error(`Error adding score: ${error.message}`);
  }
};

export const updateScore = async (id, updatedScore) => {
  try {
    const score = await Leaderboard.findByIdAndUpdate(id, updatedScore, { new: true }).exec();
    return score;
  } catch (error) {
    throw new Error(`Error updating score: ${error.message}`);
  }
};

export const removeScore = async (id) => {
  try {
    return await Leaderboard.findByIdAndRemove(id).exec();
  } catch (error) {
    throw new Error(`Error removing score: ${error.message}`);
  }
};
