// post.controller.js 
import Post from "../models/post.model.js";
import { success, failure } from "../utils/response.js";

export const getAllPosts = async (req, res) => {
    try {
        const posts = await Post.find();
        success(res, "Posts fetched successfully", posts)
    } catch (error) {
        failure(res, error.message)
    }
}

export const create = async (req, res) => {
    try {
        const image = req.file ? req.file.filename : "";

        const post = await Post.create({
            title: req.body.title,
            content: req.body.content,
            image: image,
            user_id: req.user._id
        });
        success(res, "Post created successfully", post)
    } catch (error) {
        failure(res, error.message)
    }
}

export const deletePost = async (req, res) => {
    try {
        const post = await Post.findByIdAndDelete(req.params.id);
        if(!post) {
            failure(res, "Post not found")
        }
        success(res, "Post deleted successfully", post)
    } catch (error) {
        failure(res, error.message)
    }
}

