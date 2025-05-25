//  array assignment 
// =============================================================================
// 1.
// Flatten and Filter
// Write a function that flattens a 2D array and filters out even numbers.

// Input: [[1, 2], [3, 4, 5], [6]]
// Output: [1, 3, 5]


// ans 
// var array = [[1, 2], [3, 4, 5], [6]];
// var newArray = array[0].concat(array[1],array[2]);
// console.log(newArray);
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

// var fruits = ['apple','mango','grapes','lemon','orange','dates','guava'];
// var ind = fruits.indexOf('apple');
// if (ind !== -1){fruits.splice(ind,1)
// {alert(fruits)}
// }
// else{fruits.push(ind)
//     alert(fruits)
// }
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
// ✅ Question 7: Check First and Last
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