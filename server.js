import express from "express";
import initialize from './app/app.js'

const app = express();
const port = 3500;

initialize(app);

app.listen(port, () => {
    console.log('Server is listening to port 3500');
});
