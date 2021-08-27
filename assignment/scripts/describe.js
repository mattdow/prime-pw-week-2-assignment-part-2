// WHAT IS THIS EVEN DOING?

// For questions 1-3, each code block is syntactically and logically correct. Your job is to describe what is happening.
// They are in isolation -- variables in one question do not affect other questions.
// Describe the code as it would be run, and make sure you give us the console.log's value at the end.
// (Don't just say 'we console log the variable' -- instead say something like 'we console log 'yes'')


// 0. WRITE YOUR DESCRIPTION HERE
// //EXAMPLE. We make a variable called number and set it to 1 as a number.
// Then we increment the number variable. Number is now 2.
// We check if number is greater than or equal to 2. 2 is equal to 2, so
// we console.log 'yes'.

//CODE
/*
let number = 1;

number++;

if (number >= 2) {
  console.log('yes');
}

*/


// 1. WRITE YOUR DESCRIPTION HERE
// We create a variable called name and assign it a value of the string 'Dane'.
// We check if the variable name is equal to the string 'Mary'. If it is, we
// console.log 'Hi, Mary!'. Since the name variable doesn't match 'Mary', we instead
// console.log 'How do you do?'.

//CODE
/*
let name = 'Dane';

if (name === 'Mary') {
  console.log('Hi, Mary!');
} else {
  console.log('How do you do?');
}


*/

// 2. WRITE YOUR DESCRIPTION HERE
// We create a variable named secret and leave it unassigned. We create a
// variable code and assign it a value of 123. We then check if code exactly
// equals the number 123. code does equal 123, so we assign secret the value
// 'super' and then double the value of code (to 246). We then check if the
// variable code is greater than 250. Since code === 246, this is not true and we
// don't change the variable secret to 'duper'.
// We then console.log the value of secret, which is 'super'.

//CODE
/*
let secret;

let code = 123;

if(code === 123) {
  secret = 'super';
  code = code * 2;
}

if (code > 250) {
  secret = 'duper'
}

console.log(secret)

*/

// 3. WRITE YOUR DESCRIPTION HERE
// We create a variable isStudent and set its value to true. We create a variable
// age and set it to 34. We create a variable zip and set it to 55407.
// We check if both isStudent is true and zip is greater than 80000. zip is less
// than 80000, so we do not print 'You're a student on the West Coast!' to the
// console log. We then check if either isStudent is false or age is less than
// 30. Neither are true, so we don't print 'What are your hobbies?' to the console
// log. We then check if isStudent is true. It is, so we print 'Welcome to Prime!'
// to the console log. Since that last condition was satisfied, we don't execute
// the action in the final else statement.

//CODE
/*
let isStudent = true;
let age = 34;
let zip = 55407;

if (isStudent === true && zip > 80000 ) {
  console.log(`You're a student on the West Coast!`);
} else if (isStudent === false || age < 30) {
  console.log('What are your hobbies?');
} else if (isStudent === true) {
  console.log('Welcome to Prime!');
} else {
  console.log('How about the weather?')
}

*/




// REVERSE
// Now, for questions 4-6, we'll give you a description and some code.
// Some of the code will NOT match the description.
// Comment above the problem code, and describe a potential solution.
// Look closely -- things are logically incorrect or missing and wrong in the code!

// EXAMPLE
// 0. (DESCRIPTION OF CORRECT BEHAVIOR)
// We make a variable called number and set it to 1 as a number.
// Then we increment the number variable. Number is now 2.
// We check if number is greater than or equal to 2.
// -- it is, so we console.log 'yes'

//CODE
/*
let number = 1;

// FIX - number-- decrements number, but the instructions ask to increment.
// Should be number++.
number--;

if (number >= 2) {
  console.log('yes');
}

*/



//4. We start with three variables -- colorOne is set to 'blue' and
// colorTwo is set to 'red', and mix is set to true. We check if mix is true
// -- it is, so we set colorOne and colorTwo to 'purple'

/*
let colorOne = 'red';
let colorTwo = 'blue';
let mix = true;

if (mix === true) {
  colorOne = 'purple';
// FIX: Here we should also assign colorTwo = 'purple' to meet the description.
}
*/

//5. We start with two variables -- temp is set to 40 and time is set to 4.
// We check if temp is higher than 39 and if time is greater or equal to  4
// -- they are so we console.log 'throw away the food!'

/*
let temp = 40;
const time = 4;

// Fix: The || operator is OR, should be changed to the AND operator &&
if (temp > 39 || time >= 4) {
  console.log('throw away the food!');
}
*/

//6. We start with two variables -- age is set to 21 and minAge is set to 21.
// We check if age is greater than or equal to minAge
// -- it is, so we console.log 'enter'.

/*
let age = 21;
const minAge = 21;

// FIX: this if statement checks if age is less than or equal to minAge.
// Beacuse age = 21 which is <= 21, 'no entry' will be printed to the console. To fix, we should
// change the if statement to
// if(minAge >= age)
// then change the action to
// console.log('enter')
// The else action should be changed to
// console.log('no entry')

if(minAge <= age) {
  console.log('no entry');
} else {
  console.log('enter');
}
*/
