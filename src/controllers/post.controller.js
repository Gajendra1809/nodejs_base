// post.controller.js 
import Post from "../models/post.model.js";
import { success, failure } from "../utils/response.js";


export const getAllPosts = async (req, res) => {
    try {
        const posts = await Post.find();
        success(res, "Posts fetched successfully", posts)
    } catch (error) {
        failure(res, "Something went wrong")
    }
}

export const create = async (req, res) => {
    try {
        const post = await Post.create({
            title: req.body.title,
            content: req.body.content,
            user_id: req.body.user_id
        });
        success(res, "Post created successfully", post)
    } catch (error) {
        failure(res, "Something went wrong")
    }
    
}