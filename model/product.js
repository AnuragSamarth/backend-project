import mongoose from "mongoose";
import { Schema } from "mongoose";

const productSchema = new Schema({
    "title": {type: String, required: true, unique: true},
    "description": {type: String, required : true},
    "price": {type: Number, required: true, min: [0, 'Price should not be less then 0.']},
    "category": {type: String, required: true},
    // "image": {type: String, required: true},
    "rating": Number
})

export const Product = mongoose.model("Product", productSchema);