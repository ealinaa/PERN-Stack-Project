import express from 'express'
import { login, logout, signup, getMe, } from '../controllers/auth.controller.js'
import protectRoute from '../middleware/protectRoute.js'


const router = express.Router()

router.get("/me",protectRoute, getMe)//whenever u want to create message we would like to protect the route
router.post("/login", login)
router.post("/logout", logout)
//http://localhost:5000 /api/auth/signup
router.post("/signup", signup)


export default router