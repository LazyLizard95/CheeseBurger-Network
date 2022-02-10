import express from 'express';

import { getThoughts, createThoughts, getReaction, createReaction } from '../controllers/thoughts.js';

const router = express.Router();

router.get('/', getThoughts);
router.post('/', createThoughts);

router.get('/', getReaction);
router.post('/', createReaction);

export default router;