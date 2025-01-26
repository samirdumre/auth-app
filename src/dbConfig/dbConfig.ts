import mongoose from "mongoose";

export async function connect() {
    try{
        mongoose.connect(process.env.MONGO_URL!)
        const connection = mongoose.connection;

        connection.on('connected', () => {
            console.log("MongoDB connected successfully"); 
        })

        connection.on('error', (err) => {
            console.error("MongoDB connection error. Please make sure that MongoDB is running " , err)
            process.exit()
        })



    } catch(error) {
        console.error("Error", error);
    }
}