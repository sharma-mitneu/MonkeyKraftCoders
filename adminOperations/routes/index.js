// import courseRouter from './course-route.js';
// export default (app) => {
//     app.use('/course',courseRouter);


// }


import courseRouter from './challange-route.js';

export default(app) => {
    app.use('/courses',courseRouter);
    
}
