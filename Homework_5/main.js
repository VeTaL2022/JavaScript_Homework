// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами, а і б
// let areaOfTriangle = (a,b) => a*b;
// console.log('Площа прямокутника = ',areaOfTriangle(12,57));

// - створити функцію яка обчислює та повертає площу кола з радіусом r
// let areaOfCircle = (pi,r) => +(pi*(r**2)).toFixed(2);// Знаю що можна без дужок обійтись, але так краще розуміється порядок дій(r**2)
// console.log('Площа кола = ',areaOfCircle(Math.PI,3));

// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіусом r
// let areaOfCylinder = (h,r) => +(2*Math.PI*h*r).toFixed(2);
// console.log('Площа циліндру = ',areaOfCylinder(5,2));

// - створити функцію яка приймає масив та виводить кожен його елемент
// const array = ['two',111,false,'just',845,'212',true];
// showArray(array);
//
// function showArray(items){
//     for(let item of items){
//         console.log(item);
//     }
// }

// - створити функцію яка створює параграф з текстом. Текст задати через аргумент
// paragraph('The World');
// paragraph('The Sky');
// paragraph('The Earth');
// paragraph('The Weather');
// paragraph('The Sun');
//
// function paragraph(value){
//         document.write(`<p>${value}</p>`);
// }

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
// function unorderedList(value){
//         document.write(`
//             <ul>
//                 <li>${value}</li>
//                 <li>${value}</li>
//                 <li>${value}</li>
//             </ul>
// `);
// }
// unorderedList('love hurts');

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим
//   аргументом, який є числовим (тут використовувати цикл)
// function unordered_list(value,quantity){
//     document.write(`<ul>`)
//     for(let val=0;val<quantity;val++){
//         document.write(`<li>${value}</li>`);
//     }
//     document.write(`</ul>`)
// }
// unordered_list('Oh now I\'m doing too much?',8);

// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
// const array = ['Stalker',14,78,'The Boys',true,'Atypical','13 Reasons Why',204,58,'Games Of Thrones'];
// arrayOfPrimitiveElements(array);
//
// function arrayOfPrimitiveElements(items){
//     document.write(`<ul>`);
//     for(let item=items.length-1;item>=0;item--){
//         document.write(`<li>${items[item]}</li>`);
//     }
//     document.write(`</ul>`)
// }

// - створити функцію яка приймає масив об'єктів з наступними полями id, name, age, та виводить їх в документ. Для кожного об'єкту окремий блок.
// function arrayOfObjects(items){
//     for(let item=0;item<items.length;item++){
//         let json = JSON.stringify(items[item]);
//         document.write(`<div>${json}</div>`);//Виведення через JSON формат
//         document.write(`
// <div>
//     <p>id: ${items[item].id}, name: ${items[item].name}, age: ${items[item].age}</p>
// </div>`);// Виведення простим способом
//     }
// }
// const array = [
//     {id: 44, name: 'Petro', age: 23},
//     {id: 16, name: 'Max', age: 32},
//     {id: 5, name: 'Rosa', age: 44},
//     {id: 8, name: 'Pasha', age: 58},
//     {id: 1, name: 'Sora', age: 17},
//     {id: 10, name: 'Tolya', age: 28},
// ]
// arrayOfObjects(array);

// - створити функцію яка повертає найменше число з масиву
// function minNumber(items){
//     let min = items[0];
//     for(let item=0;item<items.length;item++){
//         if(typeof items[item] === 'number') {
//             if (items[item] < min) {
//                 min = items[item];
//             }
//         }
//     }
//     return min;
// }
// const array = [4,76,12,897,34,2,43,3242343,4,342,34,324,3];
// const new_array = [15,42,'63','78',true,'deal',12,56,false,'end'];
// console.log(minNumber(array));
// console.log(minNumber(new_array));

// - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13
// function sumNumbers(items){
//     let sum = 0;
//     for (let item=0;item<items.length;item++){
//         if (typeof items[item] === 'number') {
//             sum += items[item];
//         }
//     }
//     return sum;
// }
// const array = [5,9,1,5,6,3,5];
// const new_array = [5,'word',3,'woman',1,'5','10',1,false,'dog',12,'true',true];
// console.log(sumNumbers(array));
// console.log(sumNumbers(new_array));

