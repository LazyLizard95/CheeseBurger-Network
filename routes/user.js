import express from 'express';

import { getUsers, getSingleUser, createUser, removeFriends, createFriends} from '../controllers/user.js';

const router = express.Router();

router.get('/', getUsers);
router.get('/:id', getSingleUser);
router.post('/', createUser);

router.delete('/', removeFriends);
router.post('/:userId/friends/:friendId', createFriends);

export default router; 