import mongoose from "mongoose";

const Schema =mongoose.Schema;

const ChallengeSchema = new Schema({
    title:{
        type:String,
       
    },

    description:{
        type:String,
     
    },
    solutionSubmission: {
        name: {
            type:String,
            require: true
        },
        description: {
            type:String,
            require: true
        }
    }
  });

const ChallengeModel = mongoose.model('challenge', ChallengeSchema);

export default ChallengeModel;
