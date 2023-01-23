import express from "express";
import {signup, signin} from "../controllers/auth.js"

const router = express.Router();

//Create a user
router.post("/signup", signup)

//signin
router.post("/signin",signin)

//google auth
router.post("/google",)

export default router;