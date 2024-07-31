import { Router } from "express";
import { getAllPosts, create } from "../controllers/post.controller.js";


const router = Router();

router.get('/posts', getAllPosts);
router.post('/posts', create);

export default router