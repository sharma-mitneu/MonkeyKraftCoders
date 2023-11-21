import leaderboardRouter from './leaderboard-router'

export default (app) => { 
    app.use('/leaderboard',leaderboardRouter);
}