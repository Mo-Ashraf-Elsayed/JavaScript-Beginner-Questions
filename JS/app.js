/**
 * Task 1
 */

// var num = +prompt("Enter Num");
// console.log(num);

/**
 * Task 2
 */

// var num = +prompt("Enter Num");
// if (num % 3 == 0 && num % 4 == 0) {
//   console.log("YES");
// } else {
//   console.log("NO");
// }

/**
 * Task 3
 */

// var num1 = +prompt("Enter The First Num");
// var num2 = +prompt("Enter The Second Num");
// var max = num1;
// if (max < num2) {
//   max = num2;
// }
// console.log(max);

/**
 * Task 4
 */

// var num = +prompt("Enter Num");
// if (num < 0) {
//   console.log("Negative");
// } else {
//   console.log("Positive");
// }

/**
 * Task 5
 */

// var num1 = +prompt("Enter The First Num");
// var num2 = +prompt("Enter The Second Num");
// var num3 = +prompt("Enter The Third Num");

// if (num1 > num2 && num1 > num3) {
//   console.log("Max Num Is " + num1);
// } else if (num2 > num1 && num2 > num3) {
//   console.log("Max Num Is " + num2);
// } else {
//   console.log("Max Num Is " + num3);
// }
// if (num1 < num2 && num1 < num3) {
//   console.log("Min Num Is " + num1);
// } else if (num2 < num1 && num2 < num3) {
//   console.log("Min Num Is " + num2);
// } else {
//   console.log("Min Num Is " + num3);
// }

// =====================================================Another Solution=======================================
// var max = num1;
// var min = num1;
// if (max < num2) {
//   max = num2;
// }
// if (max < num3) {
//   max = num3;
// }
// if (min > num2) {
//   min = num2;
// }
// if (min > num3) {
//   min = num3;
// }
// console.log("The Max Num Is " + max);
// console.log("The Min Num Is " + min);

/**
 * Task 6
 */

// var num = +prompt("Enter Num");

// if (num % 2 == 1) {
//   console.log("Odd");
// } else if (num % 2 == 0) {
//   console.log("Even");
// }

/**
 * Task 7
 */

// ======================Empty=================

/**
 * Task 8
 */

// var character = prompt("Write Character");
// if (
//   character === "a" ||
//   character === "i" ||
//   character === "e" ||
//   character === "o" ||
//   character === "u" ||
//   character === "A" ||
//   character === "I" ||
//   character === "E" ||
//   character === "O" ||
//   character === "U"
// ) {
//   console.log("Vowel");
// } else {
//   console.log("Consonant");
// }

/**
 * Task 9
 */

// var num = +prompt("Write Num");
// for (var i = 1; i <= num; i++) {
//   console.log(i);
// }

/**
 * Task 10
 */

// var num = +prompt("Write Num");
// for (var i = 1; i <= 12; i++) {
//   console.log(num + " X " + i + " = " + num * i);
// }

/**
 * Task 11
 */

// var num = +prompt("Write Num");
// for (var i = 0; i <= num; i++) {
//   if (i % 2 == 0) {
//     console.log(i);
//   }
// }

/**
 * Task 12
 */

// var num1 = +prompt("Write The First Num");
// var num2 = +prompt("Write The Second Num");
// var resault = 1;
// for (var i = 0; i < num2; i++) {
//   resault *= num1;
// }
// console.log(resault);

/**
 * Task 12
 */

// var num1 = +prompt("Enter Marks of five subjects \n First");
// var num2 = +prompt("Second");
// var num3 = +prompt("Third");
// var num4 = +prompt("Fourth");
// var num5 = +prompt("Fifth");
// console.log("Total marks = " + (num1 + num2 + num3 + num4 + num5));
// console.log("Average = " + (num1 + num2 + num3 + num4 + num5) / 5);
// console.log(
//   "Percentage = " + ((num1 + num2 + num3 + num4 + num5) * 100) / 500 + "%"
// );

/**
 * Task 13
 */

// var num = +prompt("Enter Month Number");
// if (num === 2) {
//   console.log("Days in Month: 28/29");
// } else if (
//   num === 1 ||
//   num === 3 ||
//   num === 5 ||
//   num === 7 ||
//   num === 8 ||
//   num === 10 ||
//   num === 12
// ) {
//   console.log("Days in Month: 31");
// } else if (num === 4 || num === 6 || num === 9 || num === 11) {
//   console.log("Days in Month: 30");
// } else {
//   console.log("This Is Not A Month");
// }

/**
 * Task 14
 */

// var num1 = +prompt("Enter Marks of five subjects \n Physics");
// var num2 = +prompt("Chemistry");
// var num3 = +prompt("Biology");
// var num4 = +prompt("Mathematics");
// var num5 = +prompt("Computer");
// function degreeCalculator(num) {
//   if (num <= 100 && num >= 90) {
//     console.log("Grad A");
//   } else if (num >= 80) {
//     console.log("Grad B");
//   } else if (num >= 70) {
//     console.log("Grad C");
//   } else if (num >= 60) {
//     console.log("Grad D");
//   } else if (num >= 40) {
//     console.log("Grad E");
//   } else if (num < 40) {
//     console.log("Grad F");
//   }
// }
// degreeCalculator(num1);
// degreeCalculator(num2);
// degreeCalculator(num3);
// degreeCalculator(num4);
// degreeCalculator(num5);

/**
 * Task 15
 */

// var num = +prompt("Enter Month Number");
// switch (num) {
//   case 1:
//   case 3:
//   case 5:
//   case 7:
//   case 8:
//   case 10:
//   case 12:
//     console.log("Days in Month: 31");
//     break;
//   case 2:
//     console.log("Days in Month: 28/29");
//     break;
//   case 4:
//   case 6:
//   case 9:
//   case 11:
//     console.log("Days in Month: 30");
//     break;
//   default:
//     console.log("This Is Not A Month");
// }

/**
 * Task 16
 */

// var character = prompt("Write Character");
// switch (character) {
//   case "a":
//   case "i":
//   case "e":
//   case "o":
//   case "u":
//   case "A":
//   case "I":
//   case "E":
//   case "O":
//   case "U":
//     console.log("Vowel");
//     break;
//   default:
//     console.log("Consonant");
// }

/**
 * Task 17
 */

// var num1 = +prompt("Write The First Num");
// var num2 = +prompt("Write The Second Num");
// switch (true) {
//   case num1 > num2:
//     console.log("The Max Num Is " + num1);
//     console.log("The Min Num Is " + num2);
//     break;
//   case num1 < num2:
//     console.log("The Max Num Is " + num2);
//     console.log("The Min Num Is " + num1);
//     break;
//   default:
//     console.log("The First Num Is " + num1);
//     console.log("The Second Num Is " + num2);
// }

/**
 * Task 18
 */

// var num = +prompt("Write Num");
// switch (true) {
//   case num % 2 == 0:
//     console.log("Even");
//     break;
//   default:
//     console.log("Odd");
// }

/**
 * Task 19
 */

// var num = +prompt("Write Num");
// switch (true) {
//   case num > 0:
//     console.log("Positive");
//     break;
//   case num < 0:
//     console.log("Negative");
//     break;
//   case num == 0:
//     console.log("Zero");
//     break;
//   default:
//     console.log("This Is Not A Num");
// }

/**
 * Task 20
 */

// var num1 = +prompt("Write The First Num To Calc");
// var ArithOpreator = prompt("Write The Arithmetic Operator");
// var num2 = +prompt("Write The Second Num To Calc");
// switch (ArithOpreator) {
//   case "+":
//     console.log("Resault: " + (num1 + num2));
//     break;
//   case "-":
//     console.log("Resault: " + (num1 - num2));
//     break;
//   case "*":
//     console.log("Resault: " + num1 * num2);
//     break;
//   case "**":
//     console.log("Resault: " + num1 ** num2);
//     break;
//   case "/":
//     console.log("Resault: " + num1 / num2);
//     break;
//   case "%":
//     console.log("Resault: " + (num1 % num2));
//     break;
//   default:
//     console.log("Yor Wrote A Wrong Arithmetic Operator");
// }
