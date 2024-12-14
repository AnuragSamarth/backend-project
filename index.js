import express from "express";
import morgan from "morgan"
import mongoose from "mongoose";
import path from "path"
import { routes } from "./routes/product.js";
import {connectDb} from "./helper/db.js"
const port = 8080;

const app = express()
app.use(express.json())
app.use(morgan("dev"))
app.use('/products', routes)


app.listen(port, ()=>{
    console.log(`Server Started at http://localhost:${port}`)
})