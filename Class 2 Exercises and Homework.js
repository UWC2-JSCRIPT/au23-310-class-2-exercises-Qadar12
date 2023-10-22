// 1. Create an object representation of yourself
// Should include:
// - firstName
// - lastName
// - 'favorite food'
// - bestFriend (object with the same 3 properties as above)

const info = {
  firstName: "Qadar",
  lastName: "Omar",
  "favorite food": "pasta",
  bestFriend: {
    firstName: "Erich ",
    lastName: "Bachman",
    "favorite food": "yogurt",
  },
};

// 2. console.log best friend's firstName and your favorite food

console.log(
  `my best friend's name is ${info.bestFriend.firstName}and my favorite food is ${info["favorite food"]}`
);

// 3. Create an array to represent this tic-tac-toe board
// -O-
// -XO
// X-X

const board = [
  ["-", "O", "-"],
  ["-", "X", "O"],
  ["X", "-", "X"],
];

// 4. After the array is created, 'O' claims the top right square.
// Update that value.

board[0][2] = "O";

// 5. Log the grid to the console.

console.log(`
${board[0]}
${board[1]}
${board[2]}`);

// 6. You are given an email as string myEmail, make sure it is in correct email format.
// Should be 1 or more characters, then @ sign, then 1 or more characters, then dot, then one or more characters - no whitespace
// i.e. foo@bar.baz
// Hints:
// - Use rubular to check a few emails: https://rubular.com/
// - Use regexp test method https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/test

// email validation
const regex = new RegExp("(^[a-zA-Z0-9_.]+[@]{1}[a-z0-9]+[.][a-z]+$)");

const validEmail = "foo@bar.baz";
const invalidEmail = "foo@ bar. baz";
console.log(regex.test(validEmail)); // true
console.log(regex.test(invalidEmail)); // false

// 7. You are given an assignmentDate as a string in the format "month/day/year"
// i.e. '1/21/2019' - but this could be any date.
// Convert this string to a Date
const assignmentDate = "1/21/2019";
const convertToDate = new Date(assignmentDate);
console.log(convertToDate); // Mon Jan 21 2019 00:00:00

// 8. Create a new Date instance to represent the dueDate.
// This will be exactly 7 days after the assignment date.

const dueDateMill = convertToDate.setDate(convertToDate.getDate() + 7); // 1548662400000

const dueDate = new Date(dueDateMill);
console.log(dueDate); // convert to date Mon Jan 28 2019 00:00:00

// 9. Use dueDate values to create an HTML time tag in format
// <time datetime="YYYY-MM-DD">Month day, year</time>
// I have provided a months array to help
const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

// get the two digit month value from the due date - 01
const numMonth = (dueDate.getMonth() + 1).toString().padStart(2, "0");

// convert dueDate to a string
const dateString = dueDate.toString();

// use split to access values
const splitDate = dateString.split(" ");
console.log(splitDate);
//['Mon', 'Jan', '28', '2019', '00:00:00', 'GMT-0800', '(Pacific', 'Standard', 'Time)']

// 10. log this value using console.log

const timeTag = `<time datetime="${splitDate[3]}-${numMonth}-${splitDate[2]}">${months[0]} ${splitDate[2]}, ${splitDate[3]}</time>`;
console.log(timeTag);
//<time datetime="2019-01-28">January 28, 2019</time>
