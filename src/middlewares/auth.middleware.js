import jwt from "jsonwebtoken";
import User from "../models/user.model.js";
import { failure } from "../utils/response.js";

export const authenticate = async (req, res, next) => {
    const token = req.headers.authorization;
    if (!token) {
        failure(res, "Token is required");
    }
    try {
        const decoded = jwt.verify(token, "secret_");
        console.log(decoded)
        const user = await User.findOne({ _id: decoded.id });
        req.user = user
        next();
    } catch (error) {
        failure(res, "Invalid token, unauthenticated user")
    }
};