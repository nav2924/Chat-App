import express from "express";
import dotenv from "dotenv";
import authRouters from "./routes/auth.routes.js";

const app = express();
const PORT = process.env.PORT || 5000;
dotenv.config();

app.get("/",(req, res) => {
    res.send(`Server running on ${PORT}`);
});

app.use("/api/auth",authRouters);

app.listen(5000 , () => console.log(`Server running on ${PORT}` )); 

