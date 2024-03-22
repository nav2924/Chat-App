import mongoose, { mongo } from "mongoose";

const connectToMongoDB = async () => {
    try{
        await mongoose.connect(process.env.MONGO_DB_URI);
        console.log("Connected to MongoDB");
    } catch (error){
        console.log("Error connection to MongoDb",error.message);
    }
};

export default connectToMongoDB;
