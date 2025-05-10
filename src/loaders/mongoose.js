import mongoose from "mongoose";

export default async function mongoLoader(dburl) {
    try {
        await mongoose.connect(dburl);
    } catch (error) {
        console.log("Error connecting to Mongo DB", error)
    }
}