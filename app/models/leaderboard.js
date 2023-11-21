import mongoose  from "mongoose";

const Schema = mongoose.Schema;

const leaderboardSchema = new Schema({
    rank: {
        type: Number,
        required: true
    },
    username: {
        type: String,
        required: true
    },
    score: {
    score: Number,
    required: true
    }
  }
);

const leaderBoardModel = mongoose.model('leaderboard', leaderboardSchema);

export default leaderBoardModel;

