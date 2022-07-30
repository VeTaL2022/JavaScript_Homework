// 1 - Є змінна х, якій ви надаєте довільне числове значення.
//     Якщо змінна x не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'. Перевірте  скрипт при a, що дорівнює 1, 0, -3
// // let x = 1;
// // let x = 0;
// // let x = -3;
// let x = +prompt("Write any number here: ");//1 = true, 0 = false, -3 = true;
// if (x !== 0){
//     console.log("Correct!");
// }else{
//     console.log('Wrong!');
// }


// 2 - Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті години попадає число
// (в першу, другу, третю или четверту частину години).
// let time = +prompt("Write any number below: ");
// if (time > 0 && time <= 15) {
//     console.log('First');
// } else if (time > 15 && time <= 30) {
//     console.log('Second');
// } else if (time > 30 && time <= 45) {
//     console.log('Third');
// } else if (time > 45 && time <= 59) {
//     console.log('Four');
// } else {
//     console.log('Not a number or Out of limit');
// }


// 3 - У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину(декаду) місяця потрапляє це число
//  (у першу, другу чи третю).
// let day = +prompt("Type any number: ");
// if (day >= 1) {
//     if (day <= 10) {
//         console.log('first');
//     } else if (day > 10 && day <= 20) {
//         console.log('second');
//     } else if (day >20 && day <= 31){
//         console.log('third');
//     }else {
//         console.log('Out of limit');
//     }
// }else {
//     console.log('Not a number or Out of limit')
// }


// 4 - Скласти розклад на тиждень за домопоги switch. Користувач вводить порядковий номер дня тижня і на екрані
//  відображається інфа що заплановано на цей день (можна замість плану на день, назву дня англійською).
// let plan_for_week = +prompt("Put down the number of the day: ");
// if (plan_for_week >= 1) {
//     switch (plan_for_week) {
//         case 1:
//             console.log('Monday');
//             break;
//         case 2:
//             console.log('Tuesday');
//             break;
//         case 3:
//             console.log('Wednesday');
//             break;
//         case 4:
//             console.log('Thursday');
//             break;
//         case 5:
//             console.log('Friday');
//             break;
//         case 6:
//             console.log('Saturday');
//             break;
//         case 7:
//             console.log('Sunday');
//             break;
//         default:
//             console.log('There is no such day of the week!');
//     }
// }else{
//     console.log('Not a number or Out of limit');
// }


//    5 - Користувач вводить або має два числа.
//         Потрібно знайти та вивести максимальне число з тих двох.
//         Також потрібно врахувати коли введені рівні числа.
//
// 1 - Рішення!!!
// let num1 = +prompt('write First number: ') || 212;
// let num2 = +prompt('write Second number: ') || 374;
// if (num1 === num2){
//     console.log('They are equal');
// }else {
//     console.log('Max number = ', Math.max(num1, num2));
// }
//
// 2 - Рішення!!!
// let num1 = +prompt('write First number: ');
// let num2 = +prompt('write Second number: ');
// if (typeof num1 === 'number' && typeof num2 === 'number') {
//     if (num1 === num2) {
//         console.log('They are equal');
//     } else {
//         console.log('Max number = ', Math.max(num1, num2));
//     }
// }else{
//     num1 = 212;
//     num2 = 374;
//     if (num1 === num2) {
//         console.log('They are equal');
//     } else {
//         console.log('Max number = ', Math.max(num1, num2));
//     }
// }


//    6 - є змінна х, яка може прийняти будь-яке значення (стрінг, число, undefined, null  і тд включно). Напишіть код
//     який,
//         за допомоги оператора || буде присвоювати змінній х значення "default" якщо значення змінної х являється
//         falsy (хибноподібне, тобто кастується до false)
//
// 1 - Рішення
// let x = +prompt('Put down anything: ') || 'default';
// console.log(x);
//
// 2 - Рішення
// let y = undefined;
// let x = y || 'default';
// console.log(x);
//
// 3 - Рішення без оператора ||
// let x = null;
// if (x){
//     x = 'falsy';
// }else{
//     x = 'default';
// }
// console.log(x);