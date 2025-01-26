// === Part 1: Thinking Functionally ===

const myArrayNumbers = [5, 8, 2, 12, 45];

myArrayNumbers.forEach((num, index) => { // print array content , index & value
    console.log(`Index: ${index}, Value: ${num}`);
  });

// = = = = = = = = = 
console.log("= = = = = = = = = = = = ");
// = = = = = = = = = 

  // Take an array of numbers and return the sum.

    let sum = 0 
    myArrayNumbers.forEach ( item => { sum += item; });
    console.log(sum);

    //another way to sum:
    const initialValue = 0; // another way to sum
const sumWithInitial = myArrayNumbers.reduce(
  (accumulator, currentValue) => accumulator + currentValue,
  initialValue,
);

console.log(sumWithInitial);
    
// Take an array of numbers and return the average. ???
let average = 0;
myArrayNumbers.forEach ((item) => {
    average += item
});
console.log(average / myArrayNumbers.length);
console.log(average);


//Take an array of strings and return the longest string.
const fruits = ["coconut", "pineapple", "tamarind", "guava", "passionfruit"];
const longestString = fruits.reduce((longest, current) => {
    return current.length > longest.length ? current : longest;
}, "");

console.log(`The longest string is: ${longestString}`);


// Take an array of strings, and a number and return an array of the strings that are longer than the given number. 
const filterStringByLenght = (arr, lenght) => { 
    return arr.filter((str) => str.lenght > lenght);
};

console.log(filterStringByLenght(fruits,3)); // not working
console.log(filterStringByLenght(fruits,6));



// Take a number, n, and print every number between 1 and n without using loops. Use recursion.
const printRecursion = (n, current = 1) =>  {
    if (current > n) return;
    console.log(current);
    printRecursion(n, current + 1);
};

printRecursion(7);

//  === Part 2: Thinking Methodically ===

const csv = [{ id: "42", name: "Bruce", occupation: "Knight", age: "41" },
    { id: "48", name: "Barry", occupation: "Runner", age: "25" },
    { id: "57", name: "Bob", occupation: "Fry Cook", age: "19" },
    { id: "63", name: "Blaine", occupation: "Quiz Master", age: "58" },
    { id: "7", name: "Bilbo", occupation: "None", age: "111" }];

console.log(csv);

// TODO: Sort the array by age.
// csv.sort((a,b) =>  parseInt(a.age) - parseInt(b, age));
// console.log(csv);


//  Filter the array to remove entries with an age greater than 50.
const filtered50 = csv.filter((entry) => parseInt(entry.age) <= 50);
console.log(filtered50);


// Map the array to change the “occupation” key to “job” and increment every age by 1.
const mapcsv = csv.map(({ occupation, age, ...rest}) => ({
    ...rest,
    job: occupation,
    age: parseInt(age) + 1,
}));
console.log(mapcsv);


// Use the reduce method to calculate the sum of the ages.
const sumOfAge = csv.reduce((sum, entry) => sum + parseInt(entry.age), 0);
console.log(sumOfAge);


// Then use the result to calculate the average age.
const averageAge = sumOfAge / csv.length;
console.log(averageAge);


// === Part 3: Thinking Critically ===

// Take an object and increment its age field.
const incrementAge = (obj) => {
    obj.age = parseInt(obj.age) + 9;
};
const randomPerson = { name: "Fabio", age: '29'};
incrementAge(randomPerson);
console.log(randomPerson);


// Take an object, make a copy, and increment the age field of the copy. Return the copy.
const copyIncrementAge = (obj) => {
    return { ...obj, age: parseInt(obj.age) + 9 };
  };
  const anotherPerson = { name: "Berto", age: "34" };
  const newPerson = copyIncrementAge(anotherPerson);
  console.log(newPerson);
  console.log(anotherPerson);
  // Original remains unchanged