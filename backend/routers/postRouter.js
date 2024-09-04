import express from "express";
import { decode } from "node-base64-image"

import { postSave, postServer ,fileSave ,getSinglePost, auth, updatePost} from "../controllers/postController.js";
import { authCheck } from "../middleware/authCheck.js";
import {  renewToken } from "../middleware/refreshToken.js";

const postRouter = express.Router()


postRouter.get("/",postServer)
postRouter.put("/",authCheck,updatePost)
postRouter.post("/single",getSinglePost)
postRouter.post("/",postSave)
postRouter.post("/file",fileSave)
postRouter.get("/auth",auth)


export default postRouter