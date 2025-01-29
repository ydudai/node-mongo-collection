import mongoose from "mongoose"

mongoose.connection.close();

export const connectDB = () => {
    mongoose.connection.close();
    mongoose.connect("mongodb+srv://ydudai:2tkIaFCiFXPsQYrF@cluster0.gfuz4.mongodb.net/MyDb").then(() => {
        console.log("Mongodb is connected")
        
    })
    .catch(error => {
        console.log(error)
    })
}

