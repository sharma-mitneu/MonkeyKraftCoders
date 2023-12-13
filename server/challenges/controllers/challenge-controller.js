import { response } from 'express';
import * as challengeService from '../services/challenge-service.js';
import { setResponse, setErrorResponse } from './response-handler.js';

export const find = async(request, response) => {
try{

    const params= {...request.query};
    const challenges = await challengeService.search(params);
    setResponse(challenges,response);

} catch(err){
   setErrorResponse(err,response);
}

}

export const post =async (request,response) => {

    try{

        const newChallenge = {...request.body};
        const challenge = await challengeService.save(newChallenge);
        setResponse(challenge,response);

    }catch(err){
        setErrorResponse(err,response);
    }
}

export const get = async (request,response)=> {
try{

    const id = request.params.id;
    const challenge = await challengeService.findById(id);
    setResponse(challenge,response);

}catch(err){
    setErrorResponse(err,response);
}


}

export const put = async(request,response)=> {

    try{
        const id = request.params.id;
        const updatedChallenge={...request.body};
        const challenge = await challengeService.update(updatedChallenge,id);
        setResponse(challenge,response);
    

    }catch(err){
        setErrorResponse(err,response);
    }
}

export const remove = async(request,response)=>{

    try{

        const id= request.params.id;
        const challenge = await challengeService.remove(id);
        setResponse({},response);

    }catch(err){
        setErrorResponse(err,response);
    }
}

export const submitSolution = async (req, res) => {
    try {
      const challengeId = req.params.challengeId;
      const { solution } = req.body;
      const submissionResult = await challengeService.submitSolution(challengeId, solution);
      setResponse(submissionResult, res);
    } catch (error) {
      setErrorResponse(error, res);
    }
  }
