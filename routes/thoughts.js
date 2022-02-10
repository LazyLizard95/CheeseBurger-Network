import express from 'express';

import { getThoughts, getSingleThought, updateThoughtById ,createThoughts, removeReaction, createReaction } from '../controllers/thoughts.js';

const router = express.Router();

router.get('/', getThoughts);
router.get('/:thoughtId', getSingleThought);
router.put('/:thoughtId', updateThoughtById);
router.get('/:thoughtId', removeThoughtById);

router.post('/', createThoughts);

router.get('/', removeReaction);
router.post('/', createReaction);

export default router;