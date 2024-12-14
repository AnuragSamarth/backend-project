import mongoose from "mongoose"


export const connectDb = async () => {
    try {
        const connection = await mongoose.connect(process.env.MONGODB_URL, {
            dbName: "Ecommerce-BP"
        })
        console.log("db connected");
    } catch (error) {
        console.log(error, 'failed to connect with database.')
    }
}
connectDb()