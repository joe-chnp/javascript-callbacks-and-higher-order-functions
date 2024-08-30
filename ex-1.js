// Exercise #1: For Each Function

function forEach(array, operation) {
  // Start coding here
  return operation(array);
};

function add5000(array){
    for (let salary of array){
  newEmployeeSalaries.push(salary+5000);
    };
    return newEmployeeSalaries;
};

const employeeSalaries = [20005, 40000, 32000, 14500, 344000];
const newEmployeeSalaries = [];

forEach(employeeSalaries,add5000)

// Using `forEach` function here
//newEmployeeSalaries = forEach(employeeSalaries, operation);

console.log(newEmployeeSalaries); // [25005, 45000, 37000, 19500, 349000]
