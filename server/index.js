import { connectDB } from "./config/db.js";
import { createEmployee } from "./controllers/enployee.js"
import Express from "express"
import cors from "cors"
import { dbName, dbObject } from "./models/model.js";

// --- Create express server and listen to clients
const app = Express();
app.use(Express.json());
app.use(cors(
    { origin: "*" })
)
app.listen(3000, () => {
    console.log("Listening on 3000...");
})


// --- Connect to MongoDB 
connectDB();


// CREATE a new employee 
app.post("/", (req, res) => {
    const data = req.body;
    console.log(data);

    // This is en example of data
    // 
    // const employee = {
    //     name: "yonatan",
    //     department: "account",
    //     age: 26,
    //     salary: 5000
    // }

    createEmployee(data);
    res.send("OK");
})


// Delete  employees according to Comparison operator
app.delete("/delete", (req, res) => {
    const query = req.query;
    const maxAge = parseInt(query.maxAge);
    console.log("maxAge: " + maxAge);
    console.log("dbName: " + dbName());
    const db = dbObject();
    db.collection('employees').deleteMany({ age: { $gt: maxAge } })

    res.send("OK");
})


app.put("/update", (req, res) => {
    const query = req.query;
    const oldDepartment = query.oldDepartment;
    const newDepartment = query.newDepartment;
      
    console.log("old department: " + oldDepartment);
    console.log("new department: " + newDepartment);
    
    console.log("dbName: " + dbName());
    const db = dbObject();

    // Update all documents where name equals oldDepartment
    db.collection('employees').updateMany(
        { department: oldDepartment }, 
        { $set: {newDepartment} }  
    );

    res.send("OK");

})