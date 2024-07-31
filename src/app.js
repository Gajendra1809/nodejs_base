import express from "express";
import bodyParser from "body-parser";

import userRouter from "./routes/user.routes.js";
import adminRouter from "./routes/admin.routes.js";
import postRouter from "./routes/post.routes.js";

import { authenticate } from "./middlewares/auth.middleware.js";

const app = express();

//middleware
app.use(bodyParser.json());

app.use("/users",userRouter);
app.use("/admin",authenticate ,adminRouter);
app.use("/post",authenticate, postRouter);

app.get("/tests", (req, res) => {
    res.send("Hello World");
})

export {app}