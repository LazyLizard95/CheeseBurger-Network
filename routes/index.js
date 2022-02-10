import express from 'express';
const router = express.Router();
import thoughts from './thoughts.js';
import user from './user.js';


router.use('/api/thoughts', thoughts);
router.use('/api/users', user);

export default router;