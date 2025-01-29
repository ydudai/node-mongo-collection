import { Employee } from "../models/model.js"

export const createEmployee = (employee) => {
    console.log("Controller/Employee.js - Create Employee ");
    Employee.create(employee);
}