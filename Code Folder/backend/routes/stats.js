// backend/routes/stats.js
import express from 'express';
import Review from '../models/Review.js';
import Submission from '../models/Submission.js';
import User from '../models/User.js';

const router = express.Router();

/* GET /api/stats
   → { users:123, submissions:456, reviews:789 }  */
router.get('/', async (_, res) => {
  const [users, submissions, reviews] = await Promise.all([
    User.estimatedDocumentCount(),
    Submission.estimatedDocumentCount(),
    Review.estimatedDocumentCount(),
  ]);

  res.json({ users, submissions, reviews });
});

export default router;
