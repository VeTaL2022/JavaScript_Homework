// Всі функції повинні бути описані стрілочним типом!!!!

// - створити функцію яка приймає три числа та виводить найменше. (Без Math.min!)
// const minOfNumbers = (a,b,c) => {
//     let min;
//     if(a < b && a < c){
//         min = a;
//     }else if(b < a && b < c){
//         min = b;
//     }else if(c < a && c < b){
//         min = c;
//     }else{
//         min = 'Something went wrong';
//     }
//     return min;
// }
// console.log(minOfNumbers(45,44.95,62));

// - створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)
// const maxOfNumbers = (a,b,c) => {
//     let max;
//     if(a > b && a > c){
//         max = a;
//     }else if(b > a && b > c){
//         max = b;
//     }else if(c > a && c > b){
//         max = c;
//     }else{
//         max = 'Something went wrong';
//     }
//     return max;
// }
// console.log(maxOfNumbers(45,44.95,62));

// - створити функцію яка повертає найбільше число з масиву
// const maxOfArray = (items) =>{
//     let max = items[0];
//     for (let item of items) {
//         // if (typeof item === 'number') {
//             if (item > max) {
//                 max = item;
//             }
//         // }
//     }
//     return max;
// }
// const array = [4,'false',112,1,'pro',2,12,'14','text'];
// console.log(maxOfArray(array));

// - створити функцію яка повертає найменше число з масиву
// const minOfArray = (items) =>{
//     let min = items[0];
//     for (let item of items) {
//         // if (typeof item === 'number') {
//             if (item < min) {
//                 min = item;
//             }
//         // }
//     }
//     return min;
// }
// const array = [4,'false',112,1,'pro',0.212,12,'14','text'];
// console.log(minOfArray(array));

// - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13
// const sumOfArray = (items) =>{
//     let sum = 0;
//     for (let item of items){
//         if(typeof item === 'number') {
//             sum += item;
//         }
//     }
//     return sum;
// }
// const array = [5,'12',24,121,0,'25',-212,'90',48];
// console.log(sumOfArray(array));


// - Дано натуральное число n. Выведите все числа от 1 до n.
// const output = (n) => {
//     for(let i=1;i<n+1;i++){
//         console.log(i);
//     }
// }
// output(50);

// - Даны два целых числа A и В. Выведите все числа от A до B включительно, в порядке возрастания, если A < B, или в порядке убывания в противном случае.
// const showNumbers = (a,b) => {
//     if (a < b) {
//         for (let i = a; i < b + 1; i++) {
//             console.log(i);
//         }
//     } else if (a > b) {
//         for (let i = a; i >= b; i--) {
//             console.log(i);
//         }
//     } else {
//         console.log('Something went wrong');
//     }
// }
// showNumbers(20,10);


// - функція Приймає масив та число "i", та міняє місцями об`єкт який знаходиться в індексі "i" на "i+1"
//   EXAMPLE:
//   foo([9,8,0,4], 0) // ==> [ 8, 9, 0, 4 ]
//   foo([9,8,0,4], 1) // ==> [ 9 ,0, 8, 4 ]
//   foo([9,8,0,4], 2) // ==> [ 9, 8, 4, 0 ]
//
// function changePlace(items,index){
//     let replace = items[index];
//     items[index] = items[index+1];
//     items[index+1] = replace;
//     console.log(items);
//     //return items;
// }
// const array = [9,8,0,4];
// changePlace(array,1);

// - Створити функцію яка буде переносити елементи зі значенням 0 у кінець масиву. Зберігаючи при цьому порядок не нульових значень.
// Довжина масиву від 2 до 100
// EXAMPLE:
// [1,0,6,0,3] => [1,6,3,0,0]
// [0,1,2,3,4] => [1,2,3,4,0]
// [0,0,1,0]   => [1,0,0,0]
//
// function replaceZero(items){
//    let replace_zero = 0;
//    for(let item=0;item<items.length;item++){
//        if(items[item] !== 0){
//            items[replace_zero++] = items[item];
//        }
//    }
//    while(replace_zero < items.length){
//        items[replace_zero++] = 0; // Рішення через цикл While
//    }
//     for(let i=replace_zero;i<items.length;i++){
//         items[replace_zero++] = 0; // Рішення через цикл For
//     }
//    console.log(items);
// }
// const array = [0,5,0,17,2,0];
// replaceZero(array);
