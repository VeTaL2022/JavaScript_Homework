// --створити масив з:
// - з 5 числових значень
// - з 5 стічкових значень
// - з 5 значень стрічкового, числового та булевого типу
// - та вивести його в консоль
// let array = [
//     5,4,2,98,1,
//     'hell','beautiful','just','do','it',
//     false,'new',45,'sport',904,false
// ];
// for (let i=0;i<array.length;i++){
//     console.log(array[i]);
// }


// -- Створити пустий масив. Наповнити його будь-якими значеннями звертаючись до конкретного індексу. Вивести в консоль
// let array = [];
// array[0] = Math.floor(Math.random()*100);
// array[1] = 14;
// array[2] = false;
// array[14] = 'DAX';
// array[10] = 1;
// array[16] = 'HOPSIN';
// for(let i=0;i<array.length;i++){
//     console.log(array[i]);
// }


// - є масив [2,17,13,6,22,31,45,66,100,-18] :
// 1. перебрати його циклом while
// array = [2,17,13,6,22,31,45,66,100,-18];
// i = 0;
// while (i<array.length){
//     console.log(array[i]);
//     i++;
// }

// 2. перебрати його циклом for
// array = [2,17,13,6,22,31,45,66,100,-18];
// for (let i=0;i<array.length;i++){
//     console.log(array[i]);
// }

// 3. перебрати циклом while та вивести  числа тільки з непарним індексом
// array = [2,17,13,6,22,31,45,66,100,-18];
// let i = 0;
// while(i < array.length){
//     if(i % 2 === 1){
//         console.log(array[i]);
//     }
//     i++;
// }

// 4. перебрати циклом for та вивести  числа тільки з непарним індексом
// array = [2,17,13,6,22,31,45,66,100,-18];
// for (let i=0;i<array.length;i++){
//     if(i % 2 !== 0){
//         console.log(array[i]);
//     }
// }

// 5. перебрати циклом while та вивести  числа тільки парні  значення
// array = [2,17,13,6,22,31,45,66,100,-18];
// let i = 0;
// while (i<array.length){
//     if(array[i] % 2 === 0){
//         console.log(array[i]);
//     }
//     i++;
// }

// 6. перебрати циклом for та вивести  числа тільки парні  значення
// array = [2,17,13,6,22,31,45,66,100,-18];
// for (let i=0;i<array.length;i++){
//     if(array[i] % 2 !== 1){
//         console.log(array[i]);
//     }
// }

// 7. замінити кожне число кратне 3 на слово "okten"
// array = [2,17,13,6,22,31,45,66,100,-18];
// for (let i=0;i<array.length;i++){
//     if(array[i] % 3 === 0){
//         array[i] = 'okten';
//     }
//     console.log(array[i]);
// }

// 8. вивести масив в зворотньому порядку.
// array = [2,17,13,6,22,31,45,66,100,-18];
// for (let i = array.length-1;i >= 0; i--){
//     console.log(array[i]);
// }

// 9. всі попередні завдання (окрім 8), але в зворотньому циклі (с заду на перед)
// array = [2,17,13,6,22,31,45,66,100,-18];

// 1. перебрати його циклом while
// let i = array.length-1;
// while (i>=0){
//     console.log(array[i]);
//     i--;
// }

// 2. перебрати його циклом for
// for (let i=array.length-1;i>=0;i--){
//     console.log(array[i]);
// }

// 3. перебрати циклом while та вивести  числа тільки з непарним індексом
// let i = array.length-1;
// while(i >= 0){
//     if(i % 2 === 1){
//         console.log(array[i]);
//     }
//     i--;
// }

// 4. перебрати циклом for та вивести  числа тільки з непарним індексом
// for (let i=array.length-1;i>0;i--){
//     if(i % 2 !== 0){
//         console.log(array[i]);
//     }
// }

// 5. перебрати циклом while та вивести  числа тільки парні  значення
// let i = array.length-1;
// while (i>=0){
//     if(array[i] % 2 === 0){
//         console.log(array[i]);
//     }
//     i--;
// }

// 6. перебрати циклом for та вивести  числа тільки парні  значення
// for (let i=array.length-1;i>=0;i--){
//     if(array[i] % 2 !== 1){
//         console.log(array[i]);
//     }
// }

// 7. замінити кожне число кратне 3 на слово "okten"
// for (let i=array.length-1;i>=0;i--){
//     if(array[i] % 3 === 0){
//         array[i] = 'okten';
//     }
//     console.log(array[i]);
// }


// - Створити масив з 10 числових елементів. Вивести в консоль всі його елементи в циклі.
// let array = [8,23123,8768,23231,657,312,45,6412,354,6];
// for (let i=0;i<array.length;i++){
//     console.log(array[i]);
// }


// - Створити масив з 10 строкрових елементів. Вивести в консоль всі його елементи в циклі.
// let array = ['mommy','dadi','true','11400','Solana','CryptoBox','Lorem','Tonight','BANKAI','Sharingan'];
// let i = 0;
// while (i<array.length){
//     console.log(array[i]);
//     i++;
// }


// - Створити масив з 10 елементів будь-якого типу. Вивести в консоль всі його елементи в циклі.
// let array = ['Box',true,'forever','false',715,false,'books','211',29,'case'];
// for (let i=0;i<array.length;i++){
//     console.log(array[i]);
// }


// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки булеві елементи
// let array = [1,'two',false,'five',true,72,'false',212,0,false];
// for(let i=0;i<array.length;i++){
//     if(typeof array[i] === "boolean"){
//         console.log(array[i]);
//     }
// }


// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки числові елементи
// let array = [1,'two',false,'five',true,72,'false',212,0,false];
// for (let i=0;i<array.length;i++){
//     if(typeof array[i] === "number"){
//         console.log(array[i]);
//     }
// }


// - Створити масив з 10 елементів числового, стрічкового і булевого типу. За допомогою if та typeof вивести тільки рядкові елементи
// let array = [1,'two',false,'five',true,72,'false',212,0,false];
// for (let i=0;i<array.length;i++){
//     if(typeof array[i] === "string"){
//         console.log(array[i]);
//     }
// }

// - Створити порожній масив. Наповнити його 10 елементами (різними за типами) через звернення до конкретних індексів. Вивести в консоль всі його елементи в циклі.
// let arr = [];
// arr[0] = true;
// arr[2] = 'text';
// arr[5] = false;
// arr[1] = 194;
// arr[12] = 'index';
// arr[7] = 10;
// arr[4] = '564';
// arr[9] = 215;
// arr[14] = true;
// arr[6] = 'true';
//
// for (let i in arr){
//     console.log(arr[i]);
// }

// - Створити цикл for на 10  ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
// for (let i=0;i<10;i++){
//     console.log(i);
//     document.write(i+'<br/>');
// }

// - Створити цикл for на 100 ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
// for (let i=1;i<101;i++){
//     console.log(i);
//     document.write(i+' ');
// }

// - Створити цикл for на 100 ітерацій з кроком 2. Вивести поточний номер кроку через console.log та document.write
// for (let i=1;i<101;i+=2){
//     console.log(i);
//     document.write(i+' ');
// }

// - Створити цикл for на 100 ітерацій. Вивести тільки парні кроки. через console.log + document.write
// for (let i=1;i<101;i++){
//     if(i % 2 === 0) {
//         console.log(i);
//         document.write(i + ' ');
//     }
// }

// - Створити цикл for на 100 ітерацій. Вивести тільки непарні кроки. через console.log + document.write
// for (let i=1;i<101;i++){
//     if(i % 2 !== 0) {
//         console.log(i);
//         document.write(i + ' ');
//     }
// }


// Створити масив книжок (назва, кількість сторінок, автори , жанри).
// -знайти наібльшу книжку.
// - знайти книжку/ки з найбільшою кількістю жанрів
// - знайти книжку/ки з найдовшою назвою
// - знайти книжку/ки які писали 2 автори
// - знайти книжку/ки які писав 1 автор
//
// let books = [
//     {
//         name: 'Blackout',
//         pageCount: 256,
//         authors: [
//             'Dhonielle Clayton',
//             'Tiffany D. Jackson',
//             'Nic Stone',
//             'Angie Thomas',
//             'Ashley Woodfolk',
//             'Nicola Yoon'],
//         genre: ['Psychological', 'Thriller']
//     },
//     {
//         name: 'Wrong Place Wrong Time',
//         pageCount: 416,
//         authors: ['Gillian McAllister'],
//         genre: ['Horror', 'Action']
//     },
//     {
//         name: 'The Silent Patient',
//         pageCount: 368,
//         authors: ['Alex Michaelides'],
//         genre: ['Thriller', 'Drama', 'Detective', 'Psychological thriller', 'Suspense', 'Psychological realism']
//     },
//     {
//         name: 'Where the Crawdads Sing',
//         pageCount: 400,
//         authors: ['Delia Owens'],
//         genre: ['Novel', 'Educational novel', 'Detective', 'Literary fiction']
//     },
//     {
//         name: 'Fire & Blood',
//         pageCount: 752,
//         authors: ['George R. R. Martin'],
//         genre: ['Fantasy']
//     },
//     {
//         name: 'The Time Traveler\'s Wife',
//         pageCount: 592,
//         authors: ['Audrey Niffenegger','Batman'],
//         genre: ['Novel', 'Science fiction', 'Romance', 'Fantasy']
//     }
// ];
// let maxPage = books[0];
// let maxGenre = books[0];
// let maxName = books[0];
// let twoAuthors = books[0];
// let oneAuthor = books[0];
//
// for (let book of books){
//     if(book.pageCount > maxPage.pageCount){
//         maxPage = book;
//     }else if(book.genre > maxGenre.genre){
//         maxGenre = book;
//     }else if(book.name > maxName.name){
//         maxName = book;
//     }else if(book.authors.length === 2){
//         twoAuthors = book;
//     }else if(book.authors.length === 1){
//         oneAuthor = book;
//     }
// }
// console.log(maxPage.name);
// console.log(maxGenre.name);
// console.log(maxName.name);
// console.log(twoAuthors.name);
// console.log(oneAuthor.name);

