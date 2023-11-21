// import { request, response } from 'express';
// import * as courseService from '../services/course-service.js';
// import { setResponse, setErrorResponse } from './response-handler.js';

// export const find = async(request, response) => {
// try{

//     const params= {...request.query};
//     const courses = await courseService.search(params);
//     setResponse(courses,response);

// } catch(err){
//    setErrorResponse(err,response);
// }

// }

// export const post =async (request,response) => {

//     try{

//         const newCourse = {...request.body};
//         const course = await courseService.save(newCourse);
//         setResponse(course,response);

//     }catch(err){
//         setErrorResponse(err,response);
//     }
// }

// export const get = async (request, response) => {
//     try{
//         const id = request.params.id;
//         const course = await courseService.findById(id);
//         setResponse(course,response);
//     }catch(err){
//         setErrorResponse(err, response);

//     }


// }

// export const put = async (request, response) => {
//     try{
//         const id = request.params.id;
//         const updatedCourse = {...request.body};
//         const course = await courseService.update(updatedCourse, id);
//         setResponse(course, response);
//     }catch(err){
//         setErrorResponse(err, response);
//     }

// }

// export const remove = async (request, response) => {
//     try{
//         const id = request.params.id;
//         const course = await courseService.remove(id);
//         setResponse({}, response);
//     }catch(err){
//         setErrorResponse(err, response);
//     }

// }

import { response } from 'express';
import * as courseService from '../services/challange-service.js';
import { setResponse, setErrorResponse } from './response-handler.js';

export const find = async(request, response) => {
try{

    const params= {...request.query};
    const courses = await courseService.search(params);
    setResponse(courses,response);

} catch(err){
   setErrorResponse(err,response);
}

}

export const post =async (request,response) => {

    try{

        const newCourse = {...request.body};
        const course = await courseService.save(newCourse);
        response.status(200)
        .json("user successfully created");

    }catch(err){
        setErrorResponse(err,response);
    }
}

export const get = async (request,response)=> {
try{

    const id = request.params.id;
    const course = await courseService.findById(id);
    setResponse(course,response);

}catch(err){
    setErrorResponse(err,response);
}


}

export const put = async(request,response)=> {

    try{
        const id = request.params.id;
        const updatedCourse={...request.body};
        const course = await courseService.update(updatedCourse,id);
        setResponse(course,response);
    

    }catch(err){
        setErrorResponse(err,response);
    }
}

export const remove = async(request,response)=>{

    try{

        const id= request.params.id;
        const course = await courseService.remove(id);
        response.status(200)
        .json("successfully deleted");

    }catch(err){
        setErrorResponse(err,response);
    }
}