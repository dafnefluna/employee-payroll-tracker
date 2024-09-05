// Get a reference to the #add-employees-btn element
const addEmployeesBtn = document.querySelector('#add-employees-btn');

const collectEmployees = function() {
    let employees = [];
    let trackEmployeeData = true;
    while (trackEmployeeData) {
  let firstName = prompt( `Please Enter First Name`);
  let lastName = prompt( `Please Enter Last Name`);
  let salary = parseFloat(prompt( `Please Enter Salary`)) || 0;

  let currentEmployee = {
    firstName: firstName,
    lastName: lastName,
    salary: salary,
  };
  employees.push(currentEmployee);
    trackEmployeeData = confirm( `Do you want to add another employee?`);
    }
    return employees;
}

const displayAverageSalary = function(employeesArray) {
  // console.log(employeesArray)
  // TODO: Calculate and display the average salary
  let totalSalary = 0
  for (let i = 0; i < employeesArray.length; i++) {
   totalSalary =totalSalary + employeesArray[i].salary;
   console.log(totalSalary)
  }
  const averageSalary = totalSalary/employeesArray.length;
  console.log(averageSalary);
  // next step is making it into money.
  const number = averageSalary;
  // const currencyDisplay = number.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
  const currencyDisplay = number.toFixed(2);
  console.log (currencyDisplay);

  console.log(`The average employee salary between our ${employeesArray.length} employee(s) is $${currencyDisplay}`) 
  // return totalSalary/=employeesArray.length; 
}


// Select a random employee
const getRandomEmployee = function(employeesArray) {
  // TODO: Select and display a random employee
  const randomIndex = Math.floor(Math.random() * employeesArray.length);
  const randomEmployee = employeesArray[randomIndex];
  console.log("Congratulations to " + randomEmployee.firstName + " " + randomEmployee.lastName + ", our random drawing winner!");
}


/*
  ====================
  STARTER CODE
  Do not modify any of the code below this line:
*/

// Display employee data in an HTML table
function displayEmployees(employeesArray) {
  // Get the employee table
  const employeeTable = document.querySelector('#employee-table');

  // Clear the employee table
  employeeTable.innerHTML = '';

  // Loop through the employee data and create a row for each employee
  for (let i = 0; i < employeesArray.length; i++) {
    const currentEmployee = employeesArray[i];

    const newTableRow = document.createElement("tr");

    const firstNameCell = document.createElement("td");
    firstNameCell.textContent = currentEmployee.firstName;
    newTableRow.append(firstNameCell);

    const lastNameCell = document.createElement("td");
    lastNameCell.textContent = currentEmployee.lastName;
    newTableRow.append(lastNameCell);

    const salaryCell = document.createElement("td");
    // Format the salary as currency
    salaryCell.textContent = currentEmployee.salary.toLocaleString("en-US", {
      style: "currency",
      currency: "USD"
    });

    newTableRow.append(salaryCell);

    employeeTable.append(newTableRow);
  }
}

const trackEmployeeData = function() {
  const employees = collectEmployees();

  console.table(employees);

  displayAverageSalary(employees);

  console.log('==============================');

  getRandomEmployee(employees);

  employees.sort(function(a,b) {
    if (a.lastName < b.lastName) {
      return -1;
    } else {
      return 1;
    }
  });

  displayEmployees(employees);
}

// Add event listener to 'Add Employees' button
addEmployeesBtn.addEventListener('click', trackEmployeeData);

