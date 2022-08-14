// - Напишите функцию cutString(str, n), которая делит строку на подстроки, состоящие из n символов.
// document.writeln(cutString('наслаждение',3)) // [нас,лаж,ден,ие]
//
// let string = 'наслаждение';
// function cutString(str,n){
//     let new_str = [];
//     for(let i=0;i<str.length;i+=n) {
//         new_str.push(str.substr(i,n));
//     }
//     return new_str;
// }
// console.log(cutString(string, 3));

// - Напишіть функцію delete_characters(str, length), яка повертає підрядок, що складається із зазначеної кількості символів.
//     let str = 'Каждый охотник желает знать';
// document.writeln(delete_characters(str, 7)); // Каждый
//
// let string = 'Каждый охотник желает знать';
// let delete_characters = (str,length) => str.substring(0,length);
// console.log(delete_characters(string,7));

// - Напишіть функцію insert_dash(str), яка приймає рядок str як аргумент і вставляє тире (-) між словами. При цьому всі символи рядка
// необхідно перевести у верхній регістр.
//     let str = "HTML JavaScript PHP";
// document.writeln(insert_dash(str)); // 'HTML-JAVASCRIPT-PHP'
//
// let string = "HTML JavaScript PHP";
// let insert_dash = (str) => str.replaceAll(' ','-').toUpperCase();
// console.log(insert_dash(string));

// - Напишіть функцію, яка приймає рядок як аргумент і перетворює регістр першого символу рядка з нижнього регістру у верхній.
// let Title = (str) => str.charAt(0).toUpperCase()+str.slice(1);
// let string = 'nothing';
// console.log(Title(string));

// - Дано список імен.
// let n1 = 'Harry..Potter'
// let n2 = 'Ron---Whisley'
// let n3 = 'Hermione__Granger'
// Написати функцію, яка приймає будь яке не валідне імя, та нормалізує його в наступний вигляд
// let n1 = 'Harry Potter'
// let n2 = 'Ron Whisley'
// let n3 = 'Hermione Granger'
//
// let n1 = 'Harry..Potter';
// let n2 = 'Ron---Whisley';
// let n3 = 'Hermione__Granger';
//
// let dellTrash = (str) => str.replaceAll(/[._\-]/g,' ').replace(/\s+/g,' ');
// console.log(dellTrash(n1));
// console.log(dellTrash(n2));
// console.log(dellTrash(n3));

// - створити функцію, яка генерує масив рандомних числових цілих значень в діапазоні від 0 до 100.
// let generateNumbersArray = (length,min,max) => [...new Array(length)].map(() => Math.floor(Math.random() * max)+min);
// array = generateNumbersArray(20,0,100);
// console.log(array);

// - створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень. Відсортувати його за допомоги sort
// let generateNumbersArray = (length,min,max) => [...new Array(length)].map(() => Math.floor(Math.random() * max)+min);
// let sort_array = generateNumbersArray(20,0,100);
// console.log(sort_array.sort());
// console.log(sort_array.sort().reverse());

// - створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень. відфільтрувати  його за допомоги
// filter, залишивши тільки парні числа (без 0!)
// let generateNumbersArray = (length,min,max) => [...new Array(length)].map(() => Math.floor(Math.random() * max)+min);
// let filter_array = generateNumbersArray(20,0,100).filter(value => value % 2 === 0 && value !== 0);
// console.log(filter_array);

// - Напишіть функцію capitalize(str), яка повертає рядок, у якому кожне слово починається з великої літери.
// function capitalize(str,split){
//     let arr = str.split(split);
//     for(let i=0;i<arr.length;i++) {
//         arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
//     }
//     return arr.join(' ');
// }
// let string = 'something gets boring';
// console.log(capitalize(string,' '));



// - Створити функцію-валідатор для адрес електронної пошти. Перевірка повинна включати в себе :данні до знака равлика(@), наявність
// равлика, крапку яка знаходиться не менше ніж на 2 символ далі після равлика, функція не чутлива до регістру (some@email.com,
// SOME@EMAIL.COM,some@EMAIL.com, і тд - однакові значення)
// Протестувати на значеннях
// someemail@gmail.com
// someeMAIL@gmail.com
// someeMAIL@i.ua
// some.email@gmail.com
//
// Примітка
// Для тих, хто дуже розумний, та почне використовувати регулярні вирази одразу "ні". Своїм мозком подумайте над протоколом, з регулярками
// будете потім бавитись.

// function validateMail (mail){
//     let symbol = mail.indexOf('@');
//     if(symbol < 1){
//         return false;
//     }
//
//     let dot = mail.indexOf('.');
//     if(dot <= symbol +2){
//         return false;
//     }
//
//     return dot !== mail.length - 1;
// }
//
// console.log(validateMail('some.email@gmail.com'));
// console.log(validateMail('someemail@gmail.com'));
// console.log(validateMail('someeMAIL@gmail.com'));
// console.log(validateMail('someeMAIL@i.ua'));

// function checkMail(mail){
//     if(mail.length <= 2){
//         return false;
//     }
//     if(mail.indexOf('@') === -1){
//         return false;
//     }
//
//     let parts = mail.split('@');
//     let dot = parts[1].indexOf('.');
//     let dotSplits = parts[1].split('.');
//     let dotCount = dotSplits.length - 1;
//
//     if(dot === -1 || dot < 2 || dotCount > 2){
//         return false;
//     }
//
//     for (let i=0;i<dotSplits.length;i++){
//         if(dotSplits[i].length === 0){
//             return false;
//         }
//     }
//     return true;
// }
//
// console.log(checkMail('some.email@gmail.com'));
// console.log(checkMail('someemail@gmail.com'));
// console.log(checkMail('someeMAIL@gmail.com'));
// console.log(checkMail('someeMAIL@i.ua'));


// // - є масив
// let coursesArray = [
//     {
//         title: 'JavaScript Complex',
//         monthDuration: 5,
//         hourDuration: 909,
//         modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
//     },
//     {
//         title: 'Java Complex',
//         monthDuration: 6,
//         hourDuration: 909,
//         modules: ['html',
//             'css',
//             'js',
//             'mysql',
//             'mongodb',
//             'angular',
//             'aws',
//             'docker',
//             'git',
//             'java core',
//             'java advanced']
//     },
//     {
//         title: 'Python Complex',
//         monthDuration: 6,
//         hourDuration: 909,
//         modules: ['html',
//             'css',
//             'js',
//             'mysql',
//             'mongodb',
//             'angular',
//             'aws',
//             'docker',
//             'python core',
//             'python advanced']
//     },
//     {
//         title: 'QA Complex',
//         monthDuration: 4,
//         hourDuration: 909,
//         modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
//     },
//     {
//         title: 'FullStack',
//         monthDuration: 7,
//         hourDuration: 909,
//         modules: ['html',
//             'css',
//             'js',
//             'mysql',
//             'mongodb',
//             'react',
//             'angular',
//             'aws',
//             'docker',
//             'git',
//             'node.js',
//             'python',
//             'java']
//     },
//     {
//         title: 'Frontend',
//         monthDuration: 4,
//         hourDuration: 909,
//         modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
//     }
// ];
// // відсортувати його в спадаючому порядку за кількістю елементів в полі modules
//
// let sort = coursesArray.sort((a,b) => b.modules.length - a.modules.length);
// console.log(sort);

// - Напишіть функцію count(str, stringsearch), яка повертає кількість символів stringsearch у рядку str.
//     let symb = "о", str = "Астрономия это наука о небесных объектах";
// document.writeln(count(str, symb)) // 5
//
// let symb = "о", string = "Астрономия это наука о небесных объектах";
// let count = (str, stringsearch) => str.split(stringsearch).length-1;
// console.log(count(string, symb));

// - Напишіть функцію cutString(str, n), яка видаляє зайві слова з рядка str, залишивши у ній n слів.
//     let str = "Сила тяжести приложена к центру масс тела";
// document.writeln(cutString(str, 5)) // 'Сила тяжести приложена к центру'
//
// let string = "Сила тяжести приложена к центру масс тела";
// let cutString = (str, n) => str.split(' ').splice(0, n).join(' ');
// console.log(cutString(string,5));

// -стоврити масив книжок (назва, кількість сторінок, автори , жанри).
// -знайти наібльшу книжку.
// - знайти книжку/ки з найбільшою кількістю жанрів
// - знайти книжку/ки з найдовшою назвою
// - знайти книжку/ки які писали 2 автори
// - знайти книжку/ки які писав 1 автор
// - відсортувати книжки за кількістю сторінок по зростанню
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
//         authors: ['Delia Owens','Batman'],
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
//         authors: ['Audrey Niffenegger'],
//         genre: ['Novel', 'Science fiction', 'Romance', 'Fantasy']
//     }
// ];
// // -знайти наібльшу книжку.
// let max = 0;
// for(let i of books){
//     if (i.pageCount > max){
//         max = i.pageCount;
//     }
// }
// let biggestBook = books.find(value => value.pageCount === max);
// console.log(biggestBook);
//
// // - знайти книжку/ки з найдовшою назвою
// for(let i of books){
//     max = 0;
//     if(i.name.length > max){
//         max = i.name.length;
//     }
// }
// let longestName = books.find(value => value.name.length === max);
// console.log(longestName);
//
// // - знайти книжку/ки які писали 2 автори
// let twoAuthors = books.find(value => value.authors.length === 2);
// console.log(twoAuthors);
//
// // - знайти книжку/ки які писав 1 автор
// let oneAuthor = books.find(value => value.authors.length === 1);
// console.log(oneAuthor);
//
// // - відсортувати книжки за кількістю сторінок по зростанню
// let increasing = books.sort((a, b) => a.pageCount - b.pageCount);
// console.log(increasing);