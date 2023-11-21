import cors from 'cors';
import express from 'express';
import mongoose from 'mongoose';


const initialize = (app) => {

    app.use(cors());
    app.use(express.json());
    app.use(express.urlencoded());
    mongoose.connect
    //TODO: MongoDB connection
    //mongoose.connect('mongodb+srv://sharmamit:o8A6bx573AMxIYXg@mdbtestuser01.ituwg.mongodb.net/courseDB?retryWrites=true&w=majority');
    registerRouter(app);

    //TODO: Initialize routes

}

export default initialize;