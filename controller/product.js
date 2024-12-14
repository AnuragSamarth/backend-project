import mongoose from "mongoose";
import { Product } from "../model/product.js";

export function createProduct(req,res){
    const product = new Product(req.body);
    // product.save((err, doc) => {
    //     console.log({err, doc})
    // })
    product.title = 'phone X';
    product.description = 'sadkjfhaskdfdsalik';
    product.category = "smart phone";
    product.price = 345;
    product.save(({err, doc}) => {
        console.log({err, doc})
    })
    res.json(req.body)
}