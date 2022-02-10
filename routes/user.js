import express from 'express';

import { getUsers, createUser, getFriends, createFriends} from '../controllers/user.js';

const router = express.Router();

router.get('/', getUsers);
router.post('/', createUser);

router.get('/', getFriends);
router.post('/', createFriends);

export default router;