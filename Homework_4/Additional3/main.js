// 1. Створити пустий масив та :
//     a. заповнити його 50 парними числами за допомоги циклу.
//     b. заповнити його 50 непарними числами за допомоги циклу.
//     c. Заповнити масив 20 ма рандомними числами. (Google: Generate random number JS)
//     d. Заповнити масив 20 ма рандомними числами в діапазоні від 8 до 732 (Google: Generate random number JS)
// const array = [];
//
// for (let arr = 0; arr < 50; arr++){
//     let even_number = (Math.floor(Math.random() * 100));
//     if(even_number % 2 === 0) {
//         array[arr] = even_number;
//     }
// }
// console.log(array);
// console.log('\n');
//
// for (let arr = 0; arr < 50; arr++){
//     let odd_number = (Math.floor(Math.random() * 10));
//     if(odd_number % 2 !== 0) {
//         array[arr] = odd_number;
//     }
// }
// // console.log(array);
// // console.log('\n');
//
//
// for(let arr=0; arr<20; arr++){
//     array[arr] = Math.floor(Math.random()*10);
// }
// // console.log(array);
// // console.log('\n');
//
//
// for(let arr=0; arr<20; arr++){
//     let num = Math.floor(Math.random() * 1000);
//     if(num > 8 && num <= 732){
//         array[arr] = num;
//     }
// }
// // console.log(array);
// // console.log('\n\n');

// 2. Вивести за допомогою console.log кожен третій елемент
// for(let arr=0;arr<array.length;arr+=3){
//     console.log(array[arr]);
// }
// console.log('\n');

// 3. Вивести за допомогою console.log кожен третій елемент тільки якщо цей елемент є парним.
// for(let arr=0; arr<array.length; arr+=3){
//     if(array[arr] % 2 === 0){
//         console.log(array[arr]);
//     }
// }
// console.log('\n');

// 4. Вивести за допомогою console.log кожен третій елемент тільки якщо цей елемент є парним та записати їх в новий масив
// let new_array = [];
// for(let arr=0; arr<array.length; arr+=3){
//     if(array[arr] % 2 === 0){
//         new_array[arr] = array[arr];
//     }
//     console.log(new_array[arr]);
// }
// console.log('\n');

// 5. Вивести кожен елемент масиву, сусід справа якого є парним
// EXAMPLE: [ 1, 2, 3, 5, 7, 9, 56, 8, 67 ] -> Має бути виведено 1, 9, 56
// for (let arr=0; arr<array.length; arr++){
//     if(array[arr+1] % 2 === 0){
//         console.log(array[arr]);
//     }
// }
// console.log('\n');


// 6. Є масив з числами [100,250,50,168,120,345,188], Які характеризують вартість окремої покупки. Обрахувати середній чек.
// const array = [100,250,50,168,120,345,188];
// let sum = 0;
// for(let arr of array){
//     sum = (sum+arr)/array.length;
// }
// console.log('Середній чек = ',+sum.toFixed(2));
// console.log('Середній чек = ',Math.round(sum));


// 7. Створити масив з рандомними значеннями, помножити всі його елементи на 5 та перемістити їх в інший масив.
// const array = [5,'true',false,20,78,'five'];
// let new_array = [];
// for(let arr=0;arr<array.length;arr++){
//     new_array[arr] = array[arr]*5;
// }
// console.log(new_array);


// 8. Створити масив з будь-якими значеннями (стрінги, числа, і тд...). пройтись по ньому, і якщо елемент є числом - додати його в інший масив.
// const array = ['12314',212,false,'love',24,'true',174];
// const new_array = [];
// for (let arr=0;arr<array.length;arr++){
//     if(typeof array[arr] === 'number'){
//         new_array[arr] = array[arr];
//     }
// }
//     console.log(new_array);


// - Дано 2 масиви з рівною кількістю об'єктів.
// Масиви:
//     let usersWithId = [
//         {id: 1, name: 'vasya', age: 31, status: false},
//         {id: 2, name: 'petya', age: 30, status: true},
//         {id: 3, name: 'kolya', age: 29, status: true},
//         {id: 4, name: 'olya', age: 28, status: false}
//     ];
//
// let citiesWithId = [
//     {user_id: 3, country: 'USA', city: 'Portland'},
//     {user_id: 1, country: 'Ukraine', city: 'Ternopil'},
//     {user_id: 2, country: 'Poland', city: 'Krakow'},
//     {user_id: 4, country: 'USA', city: 'Miami'}
// ];
//
// З'єднати в один об'єкт користувача та місто з відповідними "id" та "user_id" .
//     Записати цей об'єкт в новий масив
// Example:
//     let usersWithCities = [
//             {
//                 id: 1, // <===
//                 name: 'vasya',
//                 age: 31,
//                 status: false,
//                 address: {
//                     user_id: 1, // <===
//                     country: 'Ukraine',
//                     city: 'Ternopil'
//                 }
//             },
//             // TO BE CONTINUED .....
//         ]
// let usersWithId = [
//     {id: 1, name: 'vasya', age: 31, status: false},
//     {id: 2, name: 'petya', age: 30, status: true},
//     {id: 3, name: 'kolya', age: 29, status: true},
//     {id: 4, name: 'olya', age: 28, status: false}
// ];
//
// let citiesWithId = [
//     {user_id: 3, country: 'USA', city: 'Portland'},
//     {user_id: 1, country: 'Ukraine', city: 'Ternopil'},
//     {user_id: 2, country: 'Poland', city: 'Krakow'},
//     {user_id: 4, country: 'USA', city: 'Miami'}
// ];
//
// let newArray = [];
// for(let user=0;user<usersWithId.length;user++){
//     for(let city=0;city<citiesWithId.length;city++){
//         if(usersWithId[user].id === citiesWithId[city].user_id){
//             usersWithId[user].address = citiesWithId[city];
//             newArray[user] = usersWithId[user];
//         }
//     }
// }
// console.log(newArray);


// - Взяти масив з 10 чисел або створити його. Вивести в консоль тільки ті елементи, значення яких є парними.
// const array = [];
// for (let arr = 0; arr < 10; arr++){
//     let even_numbers = (Math.floor(Math.random() * 100));
//     if(even_numbers % 2 === 0) {
//         array[arr] = even_numbers;
//     }
// }
// console.log(array);


// - Взяти масив з 10 чисел або створити його. Створити 2-й порожній масив. За допомогою будь-якого циклу скопіювати значення одного масиву в інший.
// const array = [];
// const new_array = [];
// for (let arr = 0; arr < 10; arr++){
//     array[arr] = (Math.floor(Math.random() * 1000));
//     new_array[arr] = array[arr];
// }
// console.log(array);
// console.log(new_array);


// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for зібрати всі букви в слово.
// const array = ['a','b','c'];
// let word = '';
// for (let arr=0;arr<array.length;arr++){
//     word += array[arr];
// }
// console.log(word);


// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу while зібрати всі букви в слово.
// const array = ['a','b','c'];
// let word = '';
// let i = 0;
// while(i<array.length){
//     word = `${word}${array[i]}`;
//     i++;
// }
// console.log(word);


// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for of зібрати всі букви в слово.
// const array = ['a','b','c'];
// let word = '';
// for (let arr of array){
//     word += arr;
// }
// console.log(word);