import express from "express";
import { decode } from "node-base64-image"

import { postSave, postServer ,fileSave ,getSinglePost} from "../controllers/postController.js";

const postRouter = express.Router()


postRouter.get("/",postServer)
postRouter.post("/single",getSinglePost)
postRouter.post("/",postSave)
postRouter.post("/file",fileSave)


export default postRouter