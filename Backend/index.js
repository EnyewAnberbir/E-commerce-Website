import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";

import userRouter from "./routes/user_route.js";
import authRouter from "./routes/auth.route.js";

dotenv.config();

mongoose
.connect(process.env.mongodb)
.then(() =>{
    console.log("Connected to MongoDB");
})
.catch((err) =>{
    console.log(err);

});


const app = express();
app.use(express.json())

const port = 3000
app.listen(port, () =>{
    console.log(`Server is running on port ${port}`)
})

app.use("/api/user", userRouter)
app.use("/api/auth", authRouter)