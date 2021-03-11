//Normal Addition of ARRAY
const sample1 = [12,15,67,89,55];
const sample2= [13,17,31,63,87];
const sample3= [43,86,89];
const connectArray = sample1.concat(sample2).concat([15]).concat(sample3);
console.log(connectArray);


//ES6 ARRAY Addition

const sample1 = [12,15,67,89,55];
const sample2= [13,17,31,63,87];
const sample3= [43,86,89];
const connectArray = [...sample1,...sample2,15,...sample3];
console.log(connectArray);

//Noraml Technique of Getting Maximum Value of an Array


const driverSalary = 650;
const nurseSalary = 450;
const guardSalary = 550;
const maximumSalary = Math.max(driverSalary,nurseSalary,guardSalary);
console.log(maximumSalary);

const moneyList = [450,670,980,760];
//const maxMoneyList = Math.max(moneyList);
const maxMoneyList = Math.max(...moneyList);
console.log(maxMoneyList);


