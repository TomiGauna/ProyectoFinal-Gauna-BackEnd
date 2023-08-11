import { Router } from "express";
import passport from 'passport';
import cookieParser from "cookie-parser";
import { register, failRegister, login, githubCallback, failLogin, currentUser, logout } from '../controllers/sessionsController.js';

const router = Router();
router.use(cookieParser());

router.post('/register', passport.authenticate('register', { failureRedirect: '/api/sessions/failregister' }), register);
router.get('/failregister', failRegister);

router.post("/login", passport.authenticate('login', { session: false, failureRedirect: '/api/sessions/faillogin'}), login);
router.get('/faillogin', failLogin);

router.get('/current', passport.authenticate("current", { session: false }), currentUser);

router.get('/github', passport.authenticate('github', { scope: ['user:email'] }), async (req, res) => { });
router.get('/githubcallback', passport.authenticate('github', { failureRedirect: 'api/sessions/login' }), githubCallback);

router.get("/logout", logout);

export default router;