// 1.
// Define a function max() that takes two numbers as arguments and returns the largest of them. Use the if-then-else construct available in JavaScript.
// A:

function max(num1, num2){
    // Your answer here
    if (num1 > num2) {
      return num1 + " is greater";
    } else {
      return num2 + " is greater";
    }
}


// 2.
// Define a function maxOfThree() that takes three numbers as arguments and returns the largest of them.
// A:

function maxOfThree(num1, num2, num3){
    // Your answer here
    if (num1 > num2 && num1 > num3) {
      return num1 + " is largest.";
    } else if (num2 > num1 && num2 > num3) {
      return num2 + " is largest.";
    } else {
      return num3 + " is largest.";
    }
}


// 3.
// Write a function that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.
// A:

function isVowel(char){
    // Your answer here
    if (char === "a" || char === "e" || char ===  "i" || char === "o" || char === "u") {
      return true;
    } else {
      return false;
    }
}


// 4.
// Write a function called `sum` that takes two parameters and returns the sum of those 2 numbers.
// A:
function sum(num1, num2){
  return num1 + num2;
}


// 5.
// Write a function named `avg` that takes 3 parameters and returns the average of those 3 numbers.
// A:
function avg(x, y, z){
  return ((x+y+z) / 3);
}


// 6.
// Write a function called `getLength` that takes one parameter (a string) and returns the length
// A:
function getLength(string){
  return string.length;
}


// 7.
// Write a function called `greaterThan` that takes two parameters
// and returns `true` if the second parameter is greater than the first.
// Otherwise the function should return `false`.
// A:
function greaterThan(x, y){
  if (y > x) {
    return true;
  } else {
    return false;
  }
}


// 8.
// Write a function called `greet` that takes a
// single parameter and returns a string that
// is formated like "Hello, Name!" where *Name*
// is the parameter that was passed in.
// A:
function greet(name){
  return "Hello, " + name;
}


// 9.
// Write a function called `madlib` that takes 4 or more parameters (words).
// The function should insert the words into a pre-defined sentence.
// Finally the function should return that sentence.
// Note: When I say words and sentence I mean strings. For example:
// words: "quick", "fox", "fence"
// sentence: "quick brown fox jumps over the fence"
// A:
function madlib(noun1, verb1, noun2, noun3){
  return "The " + noun1 + " went to " + verb1 + " the " + noun2 + " yesterday with a " + noun3;
}
