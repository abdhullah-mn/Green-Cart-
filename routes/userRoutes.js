import express from 'express';
import {registerUser, login,isAuth,logout } from '../controllers/userController.js';
import authUser from '../middlewares/authUser.js';

const router = express.Router();

router.post('/register', registerUser);
router.post('/login', login);
router.get ('/is-Auth', authUser, isAuth);
router.get ('logout',authUser, logout);

export default router;