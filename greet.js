// 1.Write a function called greet that takes a name 
// as an argument and logs a greeting message with the name. 
// Use call and apply to invoke the greet function

function greet(name) {
    console.log(this.name, `Hello my friend`);
  }

  let name = {
    name: 'Anna'
};
    
  
  greet.call (name);
  greet.apply([name]); ??? Anun@ chkardac

// Output  

Anna Hello my friend
undefined Hello my friend



// 2.Create a function called calculate that takes two numbers and 
// performs a mathematical operation specified by a callback function.
//  Use the call method to pass the arguments to the callback function.

function calculate(num1, num2, callback) {
    return callback.call(null, num1, num2);
  }
  
   function add(x, y) {
    return x + y;
  }
  
    function subtract(x, y) {
    return x - y;
  }

  function multiply(x, y) {
    return x * y;
  }
  
    function divide(x, y) {
    if (y === 0) {
      return "Cannot divide by zero";
    } else{
         return x / y; 
    }
    }
  
  const num1 = 10;
  const num2 = 5;
  
  const result1 = calculate(num1, num2, add);
  console.log(`Addition: ${num1} + ${num2} = ${result1}`);
  
  const result2 = calculate(num1, num2, subtract);
  console.log(`Subtraction: ${num1} - ${num2} = ${result2}`);
  
  const result3 = calculate(num1, num2, multiply);
  console.log(`Multiplication: ${num1} * ${num2} = ${result3}`);
  
  const result4 = calculate(num1, num2, divide);
  console.log(`Division: ${num1} / ${num2} = ${result4}`);


// Output  
Addition: 10 + 5 = 15
Subtraction: 10 - 5 = 5
Multiplication: 10 * 5 = 50
Division: 10 / 5 = 2


3. Create 2 objects customers and teachers . 
  Write function that will count yearly salary of customers and teachers.

  
const customer = { 
    name: "Armen", 
    monthlySalary: 7000,
}; 
const teacher = { 
    name: "Ani", 
    monthlySalary: 6000,
}; 
function count(yearlySalary) { 
 const yearlySalary = (this.name + monthlySalary * 12);
return yearlySalary;
} 

console.log(yearlySalary)
calculate.call(yearlySalary); 
calculate.apply([yearlySalary]); 


// Output  chem stanuuuummm ;((((
