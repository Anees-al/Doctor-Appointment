import express from 'express';
import { cheackAuth, createUser, getAllUsers, getUserById, login, logout, updateUserComment } from '../controllers/userController.js';
import autheticate from '../middlewares/authMiddleware.js'


const router=express.Router();

router.post('/createuser',createUser);
router.post('/login',login);
router.post('/logout',logout)
router.get('/getallusers',getAllUsers)
router.get('/getuserbyid/:id',getUserById)
router.patch('/updatecomment/:id',updateUserComment)
router.get('/check',autheticate,cheackAuth);
export default router;