
2. / Write a JavaScript function to get a copy of the object 
// where the keys become the values and the values are the keys.

function newRreverseObject(obj) {
    const reversedObj = {};
    for (const key in obj) {
      if (obj.hasOwnProperty(key)) {
        reversedObj[obj[key]] = key;
      }
    }
    return reversedObj;
  }
  
  const originalObject = { a: 1, b: 2, c: 3 };
  const reversedObject = newRreverseObject(originalObject);
  console.log(reversedObject);




3.  Given a year, return the century it is in. The first century spans from the year 1 
up to and including the year 100, the second - from the year 101 up to and including the year 200, etc.

function centuryFromYear(year) {
  return (year + 99) / 100; 

const year = 2023;
const century = centuryFromYear(year);
console.log(century); 



4. // Given an object or an array, return if it is empty.
//        An empty object contains no key-value pairs.
//        An empty array contains no elements.

function isEmpty(obj) {
    if (Array.isArray(obj)) {
      return obj.length === 0;
    }
    if (typeof obj === 'object' && obj !== null) {
      return Object.keys(obj).length === 0;
    }
    return true; 
  }
  
  const emptyArray = [];
  const nonEmptyArray = [1, 2, 3];
  const emptyObject = {};
  const nonEmptyObject = { key: 'value' };
  const nonObject = 'not an object';
  
  console.log(isEmpty(emptyArray));         // Output: true
  console.log(isEmpty(nonEmptyArray));     // Output: false
  console.log(isEmpty(emptyObject));       // Output: true
  console.log(isEmpty(nonEmptyObject));    // Output: false
  console.log(isEmpty(nonObject));         // Output: true



  5.  Given an object or array obj, return a compact object. A compact object is the same as 
    the original object, except with keys containing falsy values removed. This operation 
    applies to the object and any nested objects. Arrays are considered objects where the indices are keys.
      A value is considered falsy when Boolean(value) returns false.


??????




      

6.//   Given an array of integers, find the pair of 
//adjacent elements that has the largest product and return that product.
// Example:
// For inputArray = [3, 6, -2, -5, 7, 3], the output should be 21
  

function adjacentElementsProduct(inputArray) {
    if (inputArray.length < 2) {
      
      return undefined;
    }
  
    let maxProduct = inputArray[0] * inputArray[1];
  
    for (let i = 1; i < inputArray.length - 1; i++) {
      const product = inputArray[i] * inputArray[i + 1];
      if (product > maxProduct) {
        maxProduct = product;
      }
    }
  
    return maxProduct;
  }
  
  const inputArray = [3, 6, -2, -5, 7, 3];
  const result = adjacentElementsProduct(inputArray);
  console.log(result); // Output: 21  
