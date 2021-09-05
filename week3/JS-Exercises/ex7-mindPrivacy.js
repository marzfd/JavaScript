'use strict';

const employeeRecords = [
  {
    name: 'John',
    occupation: 'developer',
    gender: 'M',
    email: 'john.doe@somewhere.net',
    salary: 50000,
  },
  {
    name: 'Jane',
    occupation: 'manager',
    gender: 'F',
    email: 'jane.eyre@somewhere.net',
    salary: 60000,
  },
];

// salary and gender are private information !

function filterPrivateData(arr) {
  
  // new array containing employee data without the private data.
  const newEmployeeRecords = employeeRecords.map(
    ({ name, occupation, email }) => ({ name, occupation, email})
  );
  return newEmployeeRecords;
}

console.log(filterPrivateData(employeeRecords));