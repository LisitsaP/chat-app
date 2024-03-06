import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import authRoutes from "./routes/auth.routes.js";
import  messageRoutes from "./routes/message.routes.js"
import  userRouts from "./routes/user.routes.js";
import connectToMongoDB from "./db/connectMongoDB.js";



const app = express();
dotenv.config();

app.use(express.json());// to parce the incoming requests with JSON playload(from req.body)
app.use(cookieParser());


const PORT = process.env.PORT || 5000;

// app.get("/", (req, res) => {
//     res.send("Hello my World");
//     }); 
    
app.use("/api/auth", authRoutes );
app.use("/api/messages", messageRoutes );
app.use("/api/users", userRouts);      

app.listen(PORT, () => {
    connectToMongoDB();
    console.log(`Server Running on port ${PORT}`)
});
