import mongoose from "mongoose";

const  employeeSchema = new mongoose.Schema({
    name: String,
    department: String,
    age: Number,
    salary: Number
});

console.log("Models/model.js -- Create Employee Model")
export const Employee = mongoose.model("employees",employeeSchema);

export const dbName = () => {return mongoose.connection.name}

export const dbObject = () => {return mongoose.connection.db}