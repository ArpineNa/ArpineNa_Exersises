//Reduce:
//1 .we have  array of objects , group them by age

const people = [
    { name: 'Alice', age: 25 },
    { name: 'Bob', age: 30 },
    { name: 'Charlie', age: 25 },
    { name: 'David', age: 30 },
];

const groupedByAge = people.reduce((acc, person) => {
    const age = person.age;
    if (!acc[age]) {
        acc[age] = [];
    }
    acc[age].push(person);
    return acc;
}, {});

//console.log(groupedByAge);

//2. Given an array of words, 
//group them by their length and count how many words have each length.

const words = ["apple", "banana", "cat", "dog", "elephant", "fox"];

const wordLengthCount = words.reduce((count, word) => {
    const length = word.length;
    if (!count[length]) {
        count[length] = 0;
    }
    count[length]++;
    return count;
}, {});

// { '3': 3, '5': 1, '6': 1, '8': 1 } ????? senc em stanum, 
//bayc petq e stacver // { 3: 2, 5: 2, 6: 2 } 

//console.log(wordLengthCount);


//3. You are given a two-digit integer n. Return the sum of its digits

function sumOfDigits(n) {
    if (n >= 10 && n <= 99) {
        const digitSum = n
            .toString() 
            .split('')   
            .reduce((acc, digit) => acc + parseInt(digit, 10), 0);

        return digitSum;
    } else {
        return "Input is not a two-digit integer.";
    }
}


const n = 47; 
const result = sumOfDigits(n);
console.log(result);
