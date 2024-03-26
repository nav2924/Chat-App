import express from "express";
import dotenv from "dotenv";
import messageroutes from "./routes/message.routes.js";
import authRouters from "./routes/auth.routes.js";
import connectToMongoDB from "./db/connectToMongoDB.js";
import cookieParser from "cookie-parser";
import userRoutes from "./routes/user.routes.js";
const app = express();
const PORT = process.env.PORT || 5000;

dotenv.config();

app.use(express.json());
app.use(cookieParser());

app.use("/api/auth",authRouters);
app.use("/api/messages",messageroutes);
app.use("/api/users",userRoutes);

app.listen(PORT , () => {
    connectToMongoDB();
    console.log(`Server running on ${PORT}`);
}); 

