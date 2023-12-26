import mongoose from "mongoose";


const productSchema = new mongoose.Schema({
    url: {
        type: String,
        required: true,
        unique: true
    },
    currency: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    }, 
    currentPrice: {
        type: Number,
        required: true
    },
    originalPrice: {
        type: Number,
        required: true
    },
    priceHistory: {
})