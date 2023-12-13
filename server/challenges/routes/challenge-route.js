import express from 'express';
import * as  challengeContoller from '../controllers/challenge-controller.js';

const router = express.Router();

router.route('/')
   .get(challengeContoller.find)
   .post(challengeContoller.post);


router.route('/..id')
   .get(challengeContoller.get)
   .put(challengeContoller.put)
   .delete(challengeContoller.remove)
export default router;