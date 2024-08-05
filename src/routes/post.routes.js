import { Router } from "express";
import { upload } from "../middlewares/multer.middleware.js";
import { getAllPosts, create, deletePost } from "../controllers/post.controller.js";


const router = Router();

router.get('/posts', getAllPosts);
router.post('/posts', upload.single('image') , create);
router.delete('/deletepost/:id', deletePost);

export default router