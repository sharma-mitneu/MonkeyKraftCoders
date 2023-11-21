import mongoose  from "mongoose";

const Schema = mongoose.Schema;

const leaderboardSchema = new Schema({
    rank: {
        type: Number
    },
    username: {
        type: String
    },
    score: {
        score: Number
    }
  }
);

const leaderBoardModel = mongoose.model('leaderboard', leaderboardSchema);

export default leaderBoardModel;

