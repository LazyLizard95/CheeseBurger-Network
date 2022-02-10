import express from 'express';

import { getUser, createUser} from '../controllers/posts.js';

const router = express.Router();

router.get('/', getUser);
router.post('/', createUser);

export default router;