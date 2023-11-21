// import express from 'express';
// import initialize from './app/app.js';

// const app = express();
// const port = 3001;
// initialize(app);
// //app.get('/', (request, response) => response.send('Hello World'));

// app.listen(port, () => console.log(`Server is listening at port ${port})`));




import express from 'express';
import initialize from './app.js';

const app=express();
const port = 3000;
initialize(app);
app.listen(port, ()=> console.log(`Server is listening at port ${port}`));