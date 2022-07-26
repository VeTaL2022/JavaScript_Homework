// - Створити масив, наповнити його 10 елементами будь-якого типу, вивести кожен елемент в консоль
let items = [415, 'life', 36.6, true, 'darkness', 2022, 'NFRealMusic', 19, false, '13 Reasons Why'];
console.log(items);

// console.log(items[0]);
// console.log(items[1]);
// console.log(items[2]);
// console.log(items[3]);
// console.log(items[4]);
// console.log(items[5]);
// console.log(items[6]);
// console.log(items[7]);
// console.log(items[8]);
// console.log(items[9]);

for( let res = 0; res < items.length; res++){
    console.log(items[res])
}

console.log('');


// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre.
let book1 = {
    title: 'It Ends with Us',
    pageCount: 384,
    genre: 'Romance, Fiction, Modern romance'
}
let book2 = {
    title: 'Thirteen Reasons Why',
    pageCount: 288,
    genre: 'Juvenile literature, Novel'
}
let book3 = {
    title: 'Verity',
    pageCount: 336,
    genre: 'Novel, Thriller, Romance, Fiction, Suspense'
}

console.log(book1);
console.log(book2);
console.log(book3);

console.log('');

// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre, authors. Поле "автори" - масив. Кожен автор має поля name, age
let book_one = {
    title: 'The Cinderella Murder',
    pageCount: 400,
    genre: 'Thriller, Suspense, Detective, Fiction',
    authors: [
        {
            name: 'Mary Higgins Clark',
            age: 92
        },
        {
            name: 'Alafair Burke ',
            age: 52
        }
    ]
}

let book_two = {
    title: 'Blackout',
    pageCount: 256,
    genre: 'Psychological Thriller',
    authors: [
        {
            name: 'Dhonielle Clayton',
            age: 39
        },
        {
            name: 'Tiffany D. Jackson',
            age: 40
        },
        {
            name: 'Nic Stone',
            age: 37
        },
        {
            name: 'Angie Thomas',
            age: 33
        },
        {
            name: 'Ashley Woodfolk',
            age: 'unknown'
        },
        {
            name: 'Nicola Yoon',
            age: 50
        }
    ]
}

let book_three = {
    title: 'The Talisman',
    pageCount: 944,
    genre: 'Romance, Horror Fiction, Science Fiction, Fantasy, Dark Fantasy, Epic Fantasy',
    authors: [
        {
            name: 'Stephen King',
            age: 74
        },
        {
            name: 'Alafair Burke',
            age: 52
        }
]
}
console.log(book_one);
console.log(book_two);
console.log(book_three);


// - Створити масив з 10 об'єктами які описують сутність "користувач". Поля: name, username,password. Вивести в консоль пароль кожного користувача