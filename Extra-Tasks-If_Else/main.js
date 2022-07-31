// Check if a number is odd or even in JavaScript
// 1 - Print “Number is even” if the number is divisible by 2.
// 2 - Else print “Number is odd” if the number returns a remainder when divided by 2.
//
// function isEvenorOdd(a){
//     if (a % 2 === 0){
//         console.log(`${a} = Number is even`);
//     }else {
//         console.log(`${a} = Number is odd`);
//     }
//     return a;
// }
// isEvenorOdd(+prompt('write a number'));


//Check if input variable is a number or not
// 1 - Print “Variable is not a number” if isNaN() returns true.
// 2 - Else print “Variable is a valid number” if isNaN() returns false.
//
// function isNumber(num){
//     if (isNaN(num)){
//         console.log('Variable is not a number');
//     }else{
//         console.log('Variable is a valid number');
//     }
// }
// isNumber(prompt('type here: '));


// Find the largest of two number
// 1 - Print num1 is the largest if num1>num2.
// 2 - Print num2 is the largest if num1<num2.
// 3 - Else print num1 and num2 are equal when num1==num2.
//
// function findLargest(num1,num2){
//     if (num1 > num2){
//         console.log(`${num1} is largest`);
//     } else if (num1 < num2){
//         console.log(`${num2} is largest`);
//     } else {
//         console.log(`They are equal`);
//     }
// }
// let x = +prompt();
// let y = +prompt();
// findLargest(x,y);


// Find the largest of three number
// 1 - Print num1 is the largest if num1>num2 and num1>num3.
// 2 - Print num2 is the largest if num2<num3.
// 3 - Else print num3.
//
// function findLargest(num1,num2,num3){
//     if (num1 > num2 && num1 > num3){
//         console.log(`${num1} is the largest`);
//     }else if(num2 > num3){
//         console.log(`${num2} is the largest`);
//     }else {
//         console.log(`${num3} is the largest`);
//     }
// }
// let x = +prompt();
// let y = +prompt();
// let z = +prompt();
// findLargest(x,y,z);


// Check if a triangle is equilateral, scalene, or isosceles
// 1 - Print “Equilateral triangle.” if values for all side1, side2 and side3 are equal.
// 2 - Print “Isosceles triangle.” if values for side1 is equal to side2 or side2 is equal to side3
// 3 - Else “Scalene triangle.” since values of all sides are unequal.
//
// function findTriangleType(a,b,c){
//     if (a === b && a === c && b ===c){
//         console.log(`Equilateral triangle`);
//     }else if(a === b || b === c){
//         console.log(`Isosceles triangle`);
//     }else {
//         console.log(`Scalene triangle`);
//     }
// }
// side1 = +prompt();
// side2 = +prompt();
// side3 = +prompt();
// findTriangleType(side1,side2,side3);


// Find the number is present in given range
// 1 - Print “Between the range” if num is between start and end values
// 2 - Else Print “Outside the range” since num is outside start and end values.
//
// function checklnRange(num,start,end){
//     if (num >= start && num <= end){
//         console.log(`${num} is Between the range ${start} and ${end}`);
//     } else {
//         console.log(`${num} is Outside the range`);
//     }
// }
// value = +prompt('put number: ');
// st = +prompt('put start: ');
// en = +prompt('put end: ');
// checklnRange(value,st,en);


// Perform arithmetic operations on two numbers
// 1 - Print result of num1+num2 if operation is “add”
// 2 - Print result of num1-num2 if operation is “subtract”
// 3 - Print result of num1*num2 if operation is “multiply”
// 4 - Print result of num1/num2 if operation is “divide”
// 5 - Print result of num1%num2 if operation is “modulus”
// 6 - Else print “Invalid operation”
//
// function evalNumbers(operation,num1,num2){
//     if(operation === '+'){
//         console.log(`${num1} + ${num2} = `,num1+num2);
//     }else if(operation === '-'){
//         console.log(`${num1} - ${num2} = `,num1-num2);
//     }else if(operation === '*'){
//         console.log(`${num1} * ${num2} = `,num1*num2);
//     }else if(operation === '/'){
//         console.log(`${num1} / ${num2} = `,num1/num2);
//     }else if(operation === '%'){
//         console.log(`${num1} % ${num2} = `,num1%num2);
//     } else {
//         console.log('Invalid operation');
//     }
// }
// oper = prompt('write the operation: ');
// value1 = +prompt('first number: ');
// value2 = +prompt('second number: ');
// evalNumbers(oper,value1,value2);


// Find check if a year is leap year or not
// 1 - If year is divisible by 4 and not divisible by 100 then print “leap year”.
// 2 - Or if year is divisible by 400 then print “leap year”.
// 3 - Else print “not a leap year”.
//
// function checkLeapYear(year){
//     if (year % 4 === 0 && year % 100 !== 0 || year % 400 === 0){
//         console.log(`${year} is leap year`);
//     }else {
//         console.log(`${year} is not a leap year`);
//     }
// }
// yer = +prompt('Write year: ');
// checkLeapYear(yer);


// Find the grade for input marks
// 1 - Print “S grade” if marks is between 90 and 100.
// 2 - Print “A grade” if marks is between 80 and 90.
// 3 - Print “B grade” if marks is between 70 and 80.
// 4 - Print “C grade” if marks is between 60 and 70.
// 5 - Print “D grade” if marks is between 50 and 60.
// 6 - Print “E grade” if marks is between 40 and 50.
// 7 - Print “Student has failed” if marks is between 0 and 40.
// 8 - Else print “Invalid marks”.
//
// function findGrade(mark){
//     if(mark >= 90 && mark <= 100){
//         console.log(`${mark} = S grade`);
//     }else if(mark >= 80 && mark < 90){
//         console.log(`${mark} = A grade`);
//     }else if(mark >= 70 && mark < 80) {
//         console.log(`${mark} = B grade`);
//     }else if(mark >= 60 && mark < 70) {
//         console.log(`${mark} = C grade`);
//     }else if(mark >= 50 && mark < 60) {
//         console.log(`${mark} = D grade`);
//     }else if(mark >= 40 && mark < 50) {
//         console.log(`${mark} = E grade`);
//     }else if (mark >= 0 && mark < 40){
//         console.log(`Student has failed`);
//     }else{
//         console.log(`Invalid marks!`);
//     }
// }
//
// rating = +prompt('write mark here');
// findGrade(rating);


// Find number of days in a given month
// 1 - If month is outside the range of 1 and 12 print “Invalid month”.
// 2 - If month is equal to 2 ie, February print “29 days” if leap year else print “28 days” .
// 3 - Else if month is equal to 4, 6, 9 or 11 print “30 days”.
// 4 - Else print “31 days”.
//
// function isLeapYear(year){
//     return(((year % 4 === 0) && (year % 100 !== 0)) || (year % 400 === 0));
// }
//
// function findDaysInMonth(month,year){
//     if(month < 1 || month > 12){
//         console.log('Invalid month');
//     }else if(month === 2){
//         if(isLeapYear(year)) {
//             console.log('29 days');
//         }else {
//             console.log('28 days');
//         }
//     }else if(month === 4 && month === 6 && month === 9 || month === 11){
//         console.log('30 days');
//     }else{
//         console.log('31 days');
//     }
// }
// let mon = +prompt('write number of month: ');
// let yer = +prompt('write year: ');
// findDaysInMonth(mon,yer);