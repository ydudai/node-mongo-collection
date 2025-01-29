

function addEmployee() {
    let employeeData = getEmployeeData();

    saveAllData(employeeData);


}


async function deleteEmployee() {

    // Get data from html document
    const maxAge = document.getElementById("maxage").value;

    try {
        if (typeof axios === 'undefined') {
            console.error('Axios is not loaded!');
            return;
        }

        const response = await axios.delete("http://localhost:3000/delete?maxAge=" + maxAge);

        console.log(response.data);

        if (response.statusText == "OK") {
            console.log("Employee is deleted")
        }

        return response;
    } catch (e) {
        console.log(e.message);
        alert(e.message);
        throw e;
    }
}


async function renameDepartment() {
    // Get data from html document
    const oldDepartment = document.getElementById("olddepartment").value;
    const newDepartment = document.getElementById("newdepartment").value;

    try {
        if (typeof axios === 'undefined') {
            console.error('Axios is not loaded!');
            return;
        }

        const response = await axios.put("http://localhost:3000/update?oldDepartment=" + oldDepartment + "&newDepartment=" + newDepartment);

        console.log(response.data);

        if (response.statusText == "OK") {
            console.log("Employee is deleted")
        }

        return response;
    } catch (e) {
        console.log(e.message);
        alert(e.message);
        throw e;
    }
   

}


function getEmployeeData() {
    // Get data from html document
    const employeeName = document.getElementById("fullname").value;
    const department = document.getElementById("department").value;
    const age = document.getElementById("age").value;
    const salary = document.getElementById("salary").value;
    // Set data to object

    let employeeData = {
        name: employeeName,
        department: department,
        age: age,
        salary: salary
    }
    return employeeData;
}


async function saveAllData(employeeData) {
    try {
        if (typeof axios === 'undefined') {
            console.error('Axios is not loaded!');
            return;
        }

        const response = await axios.post("http://localhost:3000/", employeeData);

        console.log(response.data);

        if (response.statusText == "OK") {
            console.log("Employee is saved on Mongo db ")
        }

        return response;
    } catch (e) {
        console.log(e.message);
        alert(e.message);
        throw e;
    }
}
