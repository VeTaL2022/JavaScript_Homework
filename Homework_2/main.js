// 1 - Створити масив, наповнити його 10 елементами будь-якого типу, вивести кожен елемент в консоль
let items = [415, 'life', 36.6, true, 'Dax', 2022, 'NFRealMusic', 19, false, '13 Reasons Why'];
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
    console.log(items[res]);
}
console.log('\n\n');


// 2 - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre.
let book1 = {
    title: 'It Ends with Us',
    pageCount: 384,
    genre: 'Romance, Fiction, Modern romance'
};
let book2 = {
    title: 'Thirteen Reasons Why',
    pageCount: 288,
    genre: 'Juvenile literature, Novel'
};
let book3 = {
    title: 'Verity',
    pageCount: 336,
    genre: 'Novel, Thriller, Romance, Fiction, Suspense'
};
console.log(book1);
console.log(book2);
console.log(book3);

console.log('\n\n');


// 3 - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre, authors. Поле "автори" - масив. Кожен автор має поля name, age
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
};
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
};
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
};
console.log(book_one);
console.log(book_two);
console.log(book_three);

console.log('\n\n');


// 4 - Створити масив з 10 об'єктами які описують сутність "користувач". Поля: name, username,password. Вивести в консоль пароль кожного користувача
let user = [
    {
        name: 'Andy',
        username: 'Andy2022',
        password: '"f!FryCqnB585"'
    },
    {
        name: 'Mark',
        username: 'Mark%123',
        password: '"3pRFY9^b47K7"'
    },
    {
        name: 'Antony',
        username: 'Antony@fury',
        password: '"0jA7SG7Z2&Mw"'
    },
    {
        name: 'Bath',
        username: 'Bath12',
        password: '"697#Yojkk1fp"'
    },
    {
        name: 'Oliver',
        username: 'Oliver-oli',
        password: '"%wr6ze3I40ga"'
    },
    {
        name: 'Nate',
        username: 'Nate@#music',
        password: '"5d1x@4CY#n55"'
    },
    {
        name: 'Marcus',
        username: 'Marcus-man',
        password: '"WXpmi01zmz1$"'
    },
    {
        name: 'Clay',
        username: 'Clay03',
        password: '"0$v00nQyG^4#"'
    },
    {
        name: 'Justin',
        username: 'Justin-Justice',
        password: '"3vY$Ax^5QR94"'
    },
    {
        name: 'Bogdan',
        username: 'Bogdan1244',
        password: '"@N9iu6uj9rgt"'
    }
];
// console.log(users[0].password);
// console.log(users[1].password);
// console.log(users[2].password);
// console.log(users[3].password);
// console.log(users[4].password);
// console.log(users[5].password);
// console.log(users[6].password);
// console.log(users[7].password);
// console.log(users[8].password);
// console.log(users[9].password);

for (let pass = 0; pass < user.length; pass++){
    // console.log(user[pass].username + ' password = ' + user[pass].password);
    console.log('password of user_'+user[pass].username +'   =   '+ user[pass].password);
}