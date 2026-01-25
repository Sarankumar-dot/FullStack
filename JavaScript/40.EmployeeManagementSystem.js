// creating a function constructor to get all the employee details from user

function Employee(id,name,dept,salary){
    this.id = id;
    this.name = name;
    this.dept = dept;
    this.salary = salary;
}

// employee array
// in which all the details are in the form of objects
const employeeDetails = [];

// addding employee
let id = 1;
function addEmp(name,dept,salary){
   const employee = new Employee(id,name,dept,salary);
   employeeDetails.push(employee);
   id++;
}


console.log();
console.log("printing all employee details")
// listing employees 
function displayDetails(){
let res = employeeDetails.forEach((value)=>{
   console.log(`Id : ${value.id} , Name : ${value.name} , Dept : ${value.dept} , Salary : ${value.salary} `);
})
}


// for each does not return any value so we are printing it


console.log();
// filtering particular employee
function FindEmployee(id){
        return employeeDetails.filter((value) =>{
            return (value.id == id);
        })

}



// updating employees

function updateEmployee(name,newName){
    return employeeDetails.forEach((value) => {
        if(value.name == name){
            value.name = newName;
        }
    })

    // if(employeeDetails[id]){
    //     Object.assign(employeeDetails[id],updateDetails);
    // }else{
    //     console.log(`empolyees id ${id} not found`);
    // }
}


// getting distinct employees to perform freeze and seal methods
function getEmployeeById(empId) {
    return employeeDetails.find(emp => emp.id === empId);
}


function freezeEmployeeById(empId) {

    let emp = getEmployeeById(empId);

    if (emp) {
        Object.freeze(emp);
        console.log(`Employee ID ${empId} is frozen ❄️`);
    } else {
        console.log("Employee Not Found");
    }
}

function sealEmployeeById(empId) {

    let emp = getEmployeeById(empId);

    if (emp) {
        Object.seal(emp);
        console.log(`Employee ID ${empId} is sealed 🔒`);
    } else {
        console.log("Employee Not Found");
    }
}


// ------------------ TEST INPUTS ------------------

addEmp("Saran", "CSBS", 400000);
addEmp("Kumar", "IT", 300000);
addEmp("Ravi", "ECE", 250000);
addEmp("Priya", "CSE", 500000);

console.log("\n--- Display All Employees ---");
displayDetails();

console.log("\n--- Find Employee ID 2 ---");
console.log(FindEmployee(2));

console.log("\n--- Update Employee Name Ravi → Ravikumar ---");
updateEmployee("Ravi", "Ravikumar");
displayDetails();

console.log("\n--- Seal Employee ID 1 ---");
sealEmployeeById(1);
updateEmployee("Saran", "Sarankumar");

console.log("\nAfter Sealing Employee 1:");
displayDetails();

console.log("\n--- Freeze Employee ID 2 ---");
freezeEmployeeById(2);
updateEmployee("Kumar", "KumarUpdated");

console.log("\nAfter Freezing Employee 2:");
displayDetails();







