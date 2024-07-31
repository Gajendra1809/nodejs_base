import { app } from "./app.js";
import connectDB from "./db/db.js"; 

connectDB()
    .then(() => {
        console.log("Connected to MongoDB");
        app.listen(3000,()=>{
            console.log("Listening on port 3000");
        })
    })
    .catch((err) => {
        console.log(err, "Database connection error");
    });

