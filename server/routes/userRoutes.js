import express from "express";
import { getPublishedCreation, getUserCreations, toggleLikeCreation } from "../controllers/userController.js";
import { auth } from "../middlewares/auth.js";

const userRouter = express.Router();

userRouter.get('/get-user-creations', auth, getUserCreations)
userRouter.get('/get-published-creations', auth, getPublishedCreation)
userRouter.post('/toggle-like-creations', auth, toggleLikeCreation)

export default userRouter;