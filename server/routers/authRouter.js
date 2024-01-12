import express from "express";
import { login, signup } from '../controllers/auth';

const router = express.Router();

router.get('/login', login);

router.post('/signup', signup);

export default router;