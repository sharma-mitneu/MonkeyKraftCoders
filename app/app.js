import cors from 'cors';
import express from 'express';
import mongoose from 'mongoose';


const initialize = (app) => {

    app.use(cors());
    app.use(express.json());
    app.use(express.urlencoded());
    mongoose.connect
    
    //TODO: MongoDB connection

    //TODO: Initialize routes
    
    registerRouter(app);
}

export default initialize;