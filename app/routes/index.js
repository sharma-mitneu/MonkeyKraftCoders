import leaderboardRouter from './leaderboard-router.js'

export default (app) => { 
    app.use('/leaderboard',leaderboardRouter);
}