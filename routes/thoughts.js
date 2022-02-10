import express from 'express';

import { getThoughts, createThoughts} from '../controllers/posts.js';

const router = express.Router();

router.get('/', getThoughts);
router.post('/', createThoughts);

export default router;