import cors from 'cors';
import express from 'express';
import mongoose from 'mongoose';
import registerRouter from './routes/index.js';
import models from './models/index.js';

const initialize = (app) => {

    app.use(cors());
    app.use(express.json());
    app.use(express.urlencoded());
    mongoose.connect("mongodb+srv://chipkarp:Pranali2215@info6150fall2023.e2aki.mongodb.net/coursedb?retryWrites=true&w=majority");

    registerRouter(app);

    //Mongodb connection

    //Initialize routes


}

export default initialize;