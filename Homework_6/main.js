// - Знайти та вивести довжину наступних стрінгових значень
// 'hello world', 'lorem ipsum', 'javascript is cool'
// let str1 = 'hello world';
// let str2 = 'lorem ipsum';
// let str3 = 'javascript is cool';
// console.log(str1.length, ',' ,str2.length, ',', str3.length);

// - Перевести до великого регістру наступні стрінгові значення
// 'hello world', 'lorem ipsum', 'javascript is cool'
// let str1 = 'hello world'.toUpperCase();
// let str2 = 'lorem ipsum'.toUpperCase();
// let str3 = 'javascript is cool'.toUpperCase();
// console.log(str1, '//', str2, '//', str3);

// - Перевести до нижнього регістру наступні стрінгові значення
// 'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'
// let str1 = 'HELLO WORLD'.toLowerCase();
// let str2 = 'LOREM IPSUM'.toLowerCase();
// let str3 = 'JAVASCRIPT IS COOL'.toLowerCase();
// console.log(str1, '\\', str2, '\\', str3);

// - Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.
// let str = ' dirty string   '.trim();
// console.log(str);

// - Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
//     let str = 'Ревуть воли як ясла повні';
// let arr = stringToarray(str); ['Ревуть', 'воли', 'як', 'ясла', 'повні']
// function stringToarray(convertInArray){
//     return convertInArray.split(' ');
// }
// let str = 'Ревуть воли як ясла повні';
// let arr = stringToarray(str);
// console.log(arr);

// - є масив чисел [10,8,-7,55,987,-1011,0,1050,0] . за допомоги map та колбеку перетворити всі об'єкти в масиві на стрінгові.
// const array = [10,8,-7,55,987,-1011,0,1050,0];
// let map = array.map(value => value.toString());
// console.log(array);
// console.log(map);

// - створити функцію sortNums(direction), яка приймає масив чисел, та сортує його від більшого до меншого, або навпаки в залежності від значення аргументу direction.
//     let nums = [11,21,3];
// sortNums(nums,'ascending') // [3,11,21]
// sortNums(nums,'descending') // [21,11,3]
//
// let nums = [11,21,3];
// function sortNums(array,direction){
//     if(direction === 'ascending'){
//         console.log(array.sort((num1,num2) => num1 - num2));
//     }else if(direction === 'descending'){
//         console.log(array.sort((num1,num2) => num2 - num1));
//     }
// }
// sortNums(nums,'descending');

// - є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// -- відсортувати його за спаданням за monthDuration
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// console.log(coursesAndDurationArray.sort((a, b) => a.monthDuration - b.monthDuration).reverse());
//
// // -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців
// console.log(coursesAndDurationArray.filter(value => value.monthDuration > 5));

// описати колоду карт
// - знайти піковий туз
// - всі шістки
// - всі червоні карти
// - всі буби
// - всі трефи від 9 та більше
//
// {
//     cardSuit: '', // 'spade-4 піка', 'diamond-4 буби','heart-4 черва', 'clubs-4 трефи'
//         value: '', // '6'-'10', 'ace','jack','queen','king','joker'
//     color:'', // 'red','black'
// }
// let cards = [
//     {cardSuit: 'diamond', value: '6', color: 'red'},
//     {cardSuit: 'spade', value: 'ace', color: 'black'},
//     {cardSuit: 'clubs', value: 'king', color: 'red'},
//     {cardSuit: 'diamond', value: '9', color: 'black'},
//     {cardSuit: 'clubs', value: 'ace', color: 'red'},
//     {cardSuit: 'heart', value: 'queen', color: 'red'},
//     {cardSuit: 'spade', value: '6', color: 'black'},
//     {cardSuit: 'heart', value: 'king', color: 'black'},
//     {cardSuit: 'clubs', value: '6', color: 'black'},
//     {cardSuit: 'spade', value: 'jack', color: 'red'},
//     {cardSuit: 'heart', value: '10', color: 'black'},
//     {cardSuit: 'diamond', value: 'joker', color: 'red'},
//     {cardSuit: 'clubs', value: 'queen', color: 'black'},
//     {cardSuit: 'spade', value: '7', color: 'black'},
//     {cardSuit: 'heart', value: '6', color: 'red'},
//     {cardSuit: 'diamond', value: 'jack', color: 'black'}
// ];
// console.log(cards);
//
// - знайти піковий туз
// let ace = cards.filter(value => value.cardSuit === 'spade' && value.value === 'ace' && value.color === 'black');
// console.log(ace);
// //
// // // - всі шістки
// let sixes = cards.filter(value => value.value === '6');
// console.log(sixes);
//
// // - всі червоні карти
// let reds = cards.filter(value => value.color === 'red');
// console.log(reds);
//
// // - всі буби
// let diamonds = cards.filter(value => value.cardSuit === 'diamond');
// console.log(diamonds);
//
// - всі трефи від 9 та більше
// let clubs = cards.filter(value => value.value >= '9' || value.value === '10');
// console.log(clubs);
