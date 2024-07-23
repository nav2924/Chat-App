import mongoose from "mongoose";

const connectToMongoDB = async () => {
	try {
		await mongoose.connect('mongodb+srv://navi29012004:Jimmy29012004@nvn2924.hqfagcg.mongodb.net/?retryWrites=true&w=majority&appName=Nvn2924');
		console.log("Connected to MongoDB");
	} catch (error) {
		console.log("Error connecting to MongoDB", error.message);
	}
};

export default connectToMongoDB;
