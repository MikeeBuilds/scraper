import mongoose from "mongoose";

let isConnected = false; // variable to tract connection status



export const connectToDB = async () => {
    mongoose.set("strictQuery", true);

    if(!process.env.MONGODB_URI) return console.log('MONGODB_URI is not defined'); {

     if(isConnected) return console.log(); // if already connected, do nothing
  };