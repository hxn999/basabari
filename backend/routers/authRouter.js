import express from "express";


import { createUser, logIn ,logOut,getProfile} from "../controllers/authController.js";
import { authCheck } from "../middleware/authCheck.js";

const authRouter = express.Router()

authRouter.post("/login",logIn)
authRouter.post("/profile",authCheck,getProfile)
authRouter.delete("/login",logOut)
authRouter.post("/create",createUser)

export default authRouter