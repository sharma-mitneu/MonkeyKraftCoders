import express from 'express';
import initialize from './app.js';

const app=express();
const port = 3000;
initialize(app);
app.listen(port, ()=> console.log(`Server is listening at port ${port}`));