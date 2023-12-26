import mongoose from "mongoose";

let isConnected = false; // variable to tract connection status



export const connectToDB = async () => {
    mongoose.set("strictQuery", true);

    if(!process.env.MONGOOSEDB_URI) return console.log('') {

  }