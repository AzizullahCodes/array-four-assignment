//  array assignment 
// =============================================================================
// 1.
// Flatten and Filter
// Write a function that flattens a 2D array and filters out even numbers.

// Input: [[1, 2], [3, 4, 5], [6]]
// Output: [1, 3, 5]


// ans 
 var array = [[1, 2], [3, 4, 5], [6]];
 var newArray = array[0].concat(array[1],array[2]);
 console.log(newArray);
// ===================================================================================
// ✅ Question 2: Insert and Replace
//nested if complexity
// ans 
// var student = ['waseem','Ali','Hadi','Saqi','Jnab'];
// var check  = prompt('Enter what name you want to check');
// if (student.indexOf(check) !== -1){var checkIndex = student.indexOf(check);{
//     var newName = prompt('enter new name you want to give')
//     {student[checkIndex] = newName;
//         alert(student)
//     }
// }  
// }
// else{alert('not')}
// =========================================================================

// ✅ Question 3: Reverse and Remove
// Create an array of 6 fruits.

// Reverse the array.

// Then remove the first and last fruit.

// Return the final array.
// ans 
// var fruits = ['apple','mango','grapes','lemon','orange','dates'];
// fruits.reverse();
// alert(fruits);
// fruits.shift();
// alert(fruits);
// fruits.pop();
// alert(fruits); 
// ================================================================================
// ✅ Question 4: Middle Insert
// Create an array of 4 cities.

// Add "Lahore" exactly in the middle of the array (not at start or end).
// ans 
// var cities = ['Lahore','Islamabad','Rawalpindi','Karachi'];
// cities.splice(2,0,'Mianwali');
// alert(cities);
// =================================================================================
// ✅ Question 5: Find and Remove
// You have an array of 7 items.
// Find the index of "apple".
// If it exists, remove it from the array.
// If not, add "apple" at the end of the array.
// ans 

 var fruits = ['apple','mango','grapes','lemon','orange','dates','guava'];
 var ind = fruits.indexOf('apple');
 if (ind !== -1){fruits.splice(ind,1)
 {alert(fruits)}
 }
 else{fruits.push(ind)
     alert(fruits)
 }
// ======================================================================
// ✅ Question 6: Compare Two Arrays
// You have two arrays:
// let arr1 = ["a", "b", "c"];
// let arr2 = ["b", "c", "d"];
// Check if the first item of arr1 exists in arr2.

// If yes, remove it from both arrays.

// If no, add it to arr2.
// ans 
// let arr1 = ["a", "b", "c"];

// let arr2 = ["b", "c", "d"];
// if (arr1[0] !== arr2[0]||
//     arr1 [0]!== arr2[1]||
//     arr1[0] !== arr2[2]){arr2.unshift(arr1[0])
//         {alert(arr2)}
//     }
// =====================================================================================
// ✅ Question 7: Clean Duplicates
// You have:
// let items = ["pen", "book", "pen", "eraser", "book", "pen"];
// Remove the second and third "pen" and the second "book".
// ans 
// let items = ["pen", "book", "pen", "eraser", "book", "pen"];
// items.splice(2,1);
// items.pop();
// items.pop();
// alert(items)
// =======================================================================================
// ✅ Question 8: Check First and Last
// You have an array of colors:
// ["red", "blue", "green", "red"]
// Check if the first and last elements are the same.

// If yes, remove both.

// If no, add "yellow" at the start and end.

// ans
// var array = ["ed", "blue", "green", "red"];
// if (array[0] === array[3]){array.shift();
//     array.pop();
//     {alert(array)}
// }
// else{array.unshift('yellwo');
//     array.push('yellow');
//     {alert(array)}
// }
// ================================================================================
// 🔥 Complex Assignment (Level 2 – Logic Focus)
// 🧠 Question 9: Smart Contact List
// You have an array:
// let contacts = ["Usman", "Ali", "Zara", "Ali", "Adeel", "Hira"];
// Rules:

// If "Ali" appears more than once, remove the second one.

// If "Zara" is not the first contact, move it to the start.

// If "Hira" is at the end, replace it with "Hira Khan".

// ans
 let contacts = ["Usman", "Ali", "Zara", "Ali", "Adeel", "Hira"];
 var ind = contacts.indexOf('Ali');
 console.log(ind);
 var last = contacts.lastIndexOf('Ali');
 console.log(last)
 if(contacts.lastIndexOf('Hira') !== -1){contacts.splice(last,1)
 {alert(contacts)}
 {var indexOfZara = contacts.indexOf('Zara')
    if(indexOfZara !== 0){contacts.unshift(contacts[indexOfZara])}
     {alert(contacts)}
    {var lst = contacts.pop();
         if(lst === 'Hira'){contacts.splice(lst,0,'Hira Khan')}
     {alert(contacts)}
        
//     }
// }
// }
// ------------------------------------------------------------------------------------------------------
// 🧠 Question 10: Advanced Product Basket
// let basket = ["milk", "bread", "eggs", "butter"];
// Rules:

// Add "jam" exactly in the middle.

// If "butter" is at index 3, remove both "bread" and "butter".
// ans 
// var basket = ["milk", "bread", "eggs", "butter"];
// basket.splice(2,0,'jam');
// console.log(basket)
// var jamIndex = basket.indexOf('eggs');
// console.log(jamIndex)
// if(jamIndex === 3){basket.splice(jamIndex,2)};
// console.log(basket)
// -------------------------------------------------------------------------------------------
// 🧠 Question 11: Username Checker
// let usernames = ["admin", "user1", "guest", "admin", "visitor"];
// Rules:

// Remove duplicate "admin", keep only one.

// If "guest" exists, move it to the end.

// If "user1" is missing, add it at index 1.
// ans 
// let usernames = ["admin", "user1", "guest", "admin", "visitor"];

// // 1. Remove duplicate "admin"
// let firstAdminIndex = usernames.indexOf("admin");
// let secondAdminIndex = usernames.lastIndexOf("admin");
// if (firstAdminIndex !== secondAdminIndex) {
//   usernames.splice(secondAdminIndex, 1); // remove second one
// }

// // 2. Move "guest" to the end
// let guestIndex = usernames.indexOf("guest");
// if (guestIndex !== -1) {
//   let guest = usernames.splice(guestIndex, 1)[0]; // remove guest
//   usernames.push(guest); // add to end
// }

// // 3. Ensure "user1" exists at index 1
// if (usernames.indexOf("user1") === -1) {
//   usernames.splice(1, 0, "user1"); // add at index 1 if missing
// }

// console.log(usernames);
// ----------------------------------------------------------------------------------------------------
// 🔥 Question 12: Notification Manager
// let notifications = ["email", "sms", "push", "email", "in-app"];
// Rules:

// Remove the second "email" if it exists.

// If "push" is not the first item, move it to index 0.

// If "in-app" exists, replace it with "popup".
// ans
// let notifications = ["email", "sms", "push", "email", "in-app"];
// var firstIndexEmail = notifications.indexOf("email");
// var lastIndexEmail = notifications.lastIndexOf("email");
// console.log(firstAdminIndex);
// console.log(lastIndexEmail);
// if(firstIndexEmail !== lastIndexEmail){notifications.splice(lastIndexEmail,1)
// {var pushIndex = notifications.indexOf("push")
//     if(pushIndex !== 0){notifications.unshift("push")}
//     console.log(notifications)
//     {var indexInApp = notifications.indexOf("in-app")
//         if(notifications.indexOf("in-app") !== -1){notifications.splice("in-app",1,"popup")}
//         console.log(notifications)
//     }
// }
// }
// ..................................................................................................
// 🔥 Question 13: Task Organizer
// let tasks = ["todo", "in-progress", "review", "done", "in-progress"];
// Rules:

// Remove the second "in-progress".

// If "review" is after "done", swap their positions.

// If "todo" is not at the start, move it to the beginning.
// let tasks = ["todo","in-progress", "review", "done", "in-progress"];
// var firstInprogress = tasks.indexOf("in-progress");
// var secondInProgress = tasks.lastIndexOf("in-progress");
// if(firstInprogress !== secondInProgress){tasks.splice(secondInProgress,1)
// {var indReview = tasks.indexOf("review")
//     var indDone = tasks.indexOf("done")
//     {var indexTodo = tasks.indexOf("todo")
//         if(indexTodo === 0){console.log('todo is at the beginning')}
//         else{console.log('Todo is not at beginning')}
    
// }}}
// ===================================================================================================
// ✅ Question 14: Predict Output
// let x = 3;
// console.log(++x); // ?
// console.log(x++); // ?
// console.log(x);   // ?
// ans 
// var x = 3;
// console.log(++x);
// // 4
// console.log(x++);
// // 4 
// console.log(x);
// // 5
    
// ====================================================================================
// ans 
// ✅ Question 15: Compare Values
// let m = 4;
// let n = m++ + ++m;
// // What is the value of m and n after this expression?
// var m = 4;
// var n = m++ + ++m;
// //       4  + 6
// console.log(n);
// console.log(m)
// ===================================================================================
// ✅ Question 16: Use in Conditions
//  let num = 10;
// if (++num === 11) {
//    console.log("Pre-increment matched");
// }
//  if (num++ === 11) {
//    console.log("Post-increment matched");
//  }
//  console.log(num);

// ===================================================================================
// 🧠 Logic-Building Assignments = 17 (Without Loops)
// Check for Three Identical Values

// Given an array of 5 numbers, check if any three values are the same. Return "Yes" if true, otherwise "No".
// var array = [22,33,22,59,22];
// if(array[0] === array[1]||
//     array[0] === array[2]|| 
//     array[0]  === array[3]||
//      array[0] === array[4] ){console.log('yes')}
//      else{console.log('no')}
// =========================================================================
// question 18
// Middle Value Detector
// input: An array like [10, 20, 30]
// Output: 20 (middle value)
// If all three values are equal, output: "All Equal"
// ans 
// var number = [20,20,40];
// var middle = number[1];
// if(number[0] === number[1] && number[1] === number[2]){console.log('All equal')}
// else{console.log(middle)}
// ===========================================================================================
// question no 19 
let arr = [10, 20, 30];

// Store values
let first = arr[0];
let middle = arr[1];
let last = arr[2];

// Create new array with first and last swapped
let result = [last, middle, first];

console.log(result); // Output: [30, 20, 10]
// ================================================================================
// question no 20 
// var fruits = ['apple','mango','banana','orange','grapes']
// // swap second and last 
// var firstt = fruits[0];
// var second = fruits[1];
// var third = fruits[2];
// var fourth = fruits[3];
// var fifth  = fruits[4];
// var newArray = [firstt,fifth,third,fourth,second];
// console.log(newArray);
// =============================================================================
// question no 21
// Simulate Queue + Stack
// Given an array: simulate adding one element at the end,
//  removing one from the beginning, and then adding one element 
//  at the beginning. Return the final array.
// ans 
var fruits = ['apple','mango','grapes',false,];
fruits.push('orange');
console.log(fruits);
fruits.shift();
console.log(fruits);
fruits.unshift(true);
console.log(fruits);
// ===========================================================================
// question no 21
// Manual Reverse (3 Elements)

// Given an array of exactly 3 elements, create a new array 
// that reverses it manually using push, pop, shift, and unshift.
//  Don't use .reverse().
var students = ['Mubin','Ahmed','Server'];
var firstStudent = students[0];
var secondStudent = students[1];
var thirdStudent = students[2];
var newArray = [thirdStudent,secondStudent,firstStudent];
console.log(newArray);
// ===========================================================================
// question no 22 
// Given an array of 3 numbers, return a new array with the same values in 
// descending order, using only if/else and array methods 
// (no loops or sort method).
var numbers = [50,80,20];
var firstNumber  = numbers[0];
var secondNumber = numbers[1];
var thirdNumber = numbers[2];
var arrange = [secondNumber,firstNumber,thirdNumber];
console.log(arrange);