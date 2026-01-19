import express from 'express';
import { createUser, getAllUsers, getUserById, login, logout, updateUserComment } from '../controllers/userController.js';


const router=express.Router();

router.post('/createuser',createUser);
router.post('/login',login);
router.post('/logout',logout)
router.get('/getallusers',getAllUsers)
router.get('/getuserbyid/:id',getUserById)
router.patch('/updatecomment/:id',updateUserComment)
export default router;