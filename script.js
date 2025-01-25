// === Part 1: Thinking Functionally ===

const myWordsArray = [] //for practice purpose and experiment results
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
    
//TODO: Take an array of numbers and return the average. ???
let average = 0;
myArrayNumbers.forEach ((item) => {
    average += item
});
console.log(average / myArrayNumbers.length);
console.log(average);



//TODO: Take an array of strings and return the longest string.


//TODO: Take an array of strings, and a number and return an array of the strings that are longer than the given number. 


// TODO: Take a number, n, and print every number between 1 and n without using loops. Use recursion.



//  === Part 2: Thinking Methodically ===

const csv = [{ id: "42", name: "Bruce", occupation: "Knight", age: "41" },
    { id: "48", name: "Barry", occupation: "Runner", age: "25" },
    { id: "57", name: "Bob", occupation: "Fry Cook", age: "19" },
    { id: "63", name: "Blaine", occupation: "Quiz Master", age: "58" },
    { id: "7", name: "Bilbo", occupation: "None", age: "111" }];

console.log(csv);

// TODO: Sort the array by age.


// TODO: Filter the array to remove entries with an age greater than 50.


// TODO: Map the array to change the “occupation” key to “job” and increment every age by 1.


// TODO: Use the reduce method to calculate the sum of the ages.


// TODO: Then use the result to calculate the average age.


// === Part 3: Thinking Critically ===

// TODO: Take an object and increment its age field.
// TODO: Take an object, make a copy, and increment the age field of the copy. Return the copy.