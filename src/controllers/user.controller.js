// user.controller.js
import jsonwebtoken  from "jsonwebtoken";
import User from "../models/user.model.js";
import { success, failure } from "../utils/response.js";

export const register = async (req, res) => {
    try {
        const user = await User.create({
            name: req.body.name,
            email: req.body.email,
            password: req.body.password,
        });
        success(res, "User created successfully", user)
    } catch (error) {
        failure(res, "Something went wrong")
    }
};

export const login = async (req, res) => {
    try {
        const user = await User.findOne({ email: req.body.email });
        if (!user || user.password !== req.body.password) {
            failure(res, "Invalid email or password")
        }
        const token = jsonwebtoken.sign({ id: user._id }, "secret_", { expiresIn: "1d" });
       
        success(res, "User logged in successfully", token)
    } catch (error) {
        failure(res, "Something went wrong")
    }
};

export const logout = (req, res) => {
    try {
        success(res, "User logged out successfully")
    } catch (error) {
        failure(res, "Something went wrong")
    }
}

export const getUser = async (req, res) => {
    const user = await User.findById(req.params.id);
    res.send(user);
}

export const getAllUsers = async (req, res) => {
    const users = await User.find();
    res.send(users);
}

export const updateUser = async (req, res) => {
    try {
        const user = await User.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if(!user) {
            failure(res, "User not found")
        }
        success(res, "User updated successfully", user)
    } catch (error) {
        failure(res, "Something went wrong")
    }
}
export const deleteUser = async (req, res) => {
    try {
        const user = await User.findByIdAndDelete(req.params.id);
        if(!user) {
            failure(res, "User not found")
        }
        success(res, "User deleted successfully", user)
    } catch (error) {
        failure(res, "Something went wrong")
    }
}