import Challenge from '../models/challenge.js';

export const search = async (params = {}) =>{
 
    const challenges = await Challenge.find(params).exec();
    return challenges;

}

export const save = async (newChallenge) => {

    const challenge = new Challenge(newChallenge);
    return await challenge.save();
}

export const find = async(id) =>{

    const challenge = await Challenge.findById(id).exec();
    return challenge;
}

export const update = async (updatedChallenge,id)=>{
    const challenge =await Challenge.findByIdAndUpdate(id,updatedChallenge).exec();
    return challenge;
}

export const remove = async (id)=>{
    return await Challenge.findByIdAndRemove(id).exec();
}