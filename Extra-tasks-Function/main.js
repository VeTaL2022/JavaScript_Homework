// 1. Write a JavaScript function to print the “Hello World” message
// Function `displayMessage()` prints “Hello World” string using console.log() function.
// function displayMessage(){
//     console.log('Hello World');
// }
// displayMessage();

// 2. Write a function that returns the square of a number
// Function `findSquare()` returns the square of the input number which is passed as an argument in the function call.
// const findSquare = (n) => n*n;
// console.log(findSquare(5));
// console.log(findSquare(12));
// console.log(findSquare(15));

// 3. Write a function to convert Celsius to Fahrenheit
// Function `calFahrenheit()` returns the converted Celsius value to Fahrenheit value based on the formula
// `(Celsius × 9/5) + 32 = Fahrenheit`
// const calFahrenheit = (cel) => (cel * 9/5) + 32;
// console.log(calFahrenheit(15));

// 4. Write a function to find the area of a given Rectangle
// Function `rectangleArea()` returns the rectangle area provided the width and height as the argument.
// const rectangleArea = (a,b) => a*b;
// console.log(rectangleArea(8,14));

// 5. Write a function to find the area and perimeter of a Circle
// Function `circleValues()` returns the perimeter and area of the circle provided the radius as an argument for the function call.
// const circleValues = (r) => `Area = ${+(Math.PI*r**2).toFixed(2)}, Perimeter = ${+(2*Math.PI*r).toFixed(2)}`;
// console.log(circleValues(3));

// 6. Write a function to reverse a number
// Function `reverseNum()` returns the reversed number for the given argument number value.
// function reverseNum(num){
//     return parseFloat(num.toString().split('').reverse().join(''));
// }
// console.log(reverseNum(7254));

// 7. Write a function to generate a random number
// Function `genRandom()` return a generated random integer number between the provided start and end range.
// function getRandom(start,end){
//     return +Math.floor(Math.random() * end) + start;
// }
// console.log(getRandom(0,999));

// 8. Write a function to add unlimited numbers
// Function `addNumber()` return the sum of all the number passed as arguments of the function.
// const addNumber = (...a) => {
//    return a.reduce((total,num) => total+num);
// }
// console.log(addNumber(214,573,78,26,9));

// 9. Write a function to combine unlimited arrays
// Function `addArrays()` return the concatenated array by combining all the arrays passed as an argument of the function.
// const addArrays = (...a) =>{
//     return a.reduce((total,arr) => total.concat(arr));
// }
// console.log(addArrays([54,2,1,76,4],[567,0,-293]));

// 10. Write a function to find the count of a letter in a string
// Function `letterCount()` return the count of letter in a given string.
// function letterCount(str,c){
//     let count = 0;
//     str = str.toLowerCase();
//     for(let i=0;i<str.length;i++){
//         if(str.charAt(i) === c){
//             count++;
//         }
//     }
//     return count;
// }
// console.log(letterCount('Mikasa','a'));
// console.log(letterCount('Function','n'));
