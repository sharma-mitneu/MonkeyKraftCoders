import challengeRouter from './challenge-route.js';

export default(app) => {
    app.use('/challenges',challengeRouter);
    
}