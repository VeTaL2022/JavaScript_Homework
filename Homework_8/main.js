// // - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
// // створити пустий масив, наповнити його 10 об'єктами new User(....)
// function User(id,name,surname,email,phone){
//     this.id = id;
//     this.name = name;
//     this.surname = surname;
//     this.email = email;
//     this.phone = phone;
// }
//
// let arrayOfUsers = [
//     new User(15,'Harry','Kris','harry.25@gmail.com','231-201-0444'),
//     new User(44,'Henry','Krr','henry_12@gmail.com','231-204-6711'),
//     new User(27,'Atlas','Lus','atl.lus@gmail.com','231-208-2053'),
//     new User(5,'Nell','Bets','bets22@gmail.com','231-209-5971'),
//     new User(1,'Margo','Keil','margo@gmail.com','231-226-2243'),
//     new User(18,'Max','Steel','steel_max@gmail.com','231-227-2441'),
//     new User(12,'Lel','Goh','goh212_lel@gmail.com','231-245-1316'),
//     new User(91,'Johan','Last','last_day@gmail.com','231-269-9820'),
//     new User(74,'Dwain','Jonson','dwain-mil@gmail.com','231-282-2865'),
//     new User(33,'Pros','Yacht','pros2023@gmail.com','231-319-0606')
// ];
// console.log(arrayOfUsers);

// - Взяти масив з  User[] з попереднього завдання, та відфільтрувати, залишивши тільки об'єкти з парними id (filter)
// let evenId = arrayOfUsers.filter(value => value.id % 2 === 0);
// console.log(evenId);

// - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)
// let increaseId = arrayOfUsers.sort((a, b) => a.id - b.id);
// console.log(increaseId);


// - створити клас для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
// створити пустий масив, наповнити його 10 об'єктами Client
// class Client{
//
//
//     constructor(id,name,surname,email,phone,order) {
//         this.id = id;
//         this.surname = surname;
//         this.email = email;
//         this.phone = phone;
//         this.order = order;
//
//     }
// }
//
// let arrayOfClients = [
//     new Client(15,'Harry','Kris','harry.25@gmail.com','231-201-0444',['milk','creeps']),
//     new Client(44,'Henry','Krr','henry_12@gmail.com','231-204-6711',['coffee','cigarette']),
//     new Client(27,'Atlas','Lus','atl.lus@gmail.com','231-208-2053',['chicken','juice','salad']),
//     new Client(5,'Nell','Bets','bets22@gmail.com','231-209-5971',['pineapple juice']),
//     new Client(1,'Margo','Keil','margo@gmail.com','231-226-2243',['tea','sandwich']),
//     new Client(18,'Max','Steel','steel_max@gmail.com','231-227-2441',['beer','cigarette']),
//     new Client(12,'Lel','Goh','goh212_lel@gmail.com','231-245-1316',['tomato juice','ice cream','chipsters']),
//     new Client(91,'Johan','Last','last_day@gmail.com','231-269-9820',['wine','some salad','salt','bread']),
//     new Client(74,'Dwain','Jonson','dwain-mil@gmail.com','231-282-2865',['hot-dog','water']),
//     new Client(33,'Pros','Yacht','pros2023@gmail.com','231-319-0606',['pizza','apple juice','folks'])
// ];
// console.log(arrayOfClients);

// - Взяти масив (Client [] з попереднього завдання).Відсортувати його за кількістю товарів в полі order по зростанню. (sort)
// let increaseOrders = arrayOfClients.sort((a, b) => a.order.length - b.order.length);
// console.log(increaseOrders);


// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість,
// об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
//
// function Car(model,producer,gradYear,maxSpeed,engineCap){
//     this.model = model;
//     this.producer = producer;
//     this.gradYear = gradYear;
//     this.maxSpeed = maxSpeed;
//     this.engineCap = engineCap;
//
//     this.drive = () => console.log(`їдемо зі швидкістю ${this.maxSpeed}км. на годину`);
//     this.info = () => {
//         for(let i in this){
//             if(typeof this[i] !== "function") {
//                 console.log(`${i} - ${this[i]}`);
//             }
//         }
//     }
//     this.increaseMaxSpeed = (newSpeed) => this.maxSpeed + newSpeed;
//     this.changeYear = (newValue) => this.gradYear = newValue;
//     this.addDriver = function (drive) {
//         this.drive = {
//             name: 'Vasya',
//             surname: 'News',
//             age: 23
//         };
//     }
// }
//
// let car = new Car('Tesla Model X P90D','Tesla, Inc.',2016,250,'90 кВт/год');
// car.drive();
// car.info();
// console.log(car.increaseMaxSpeed(25));
// console.log(car.changeYear(2020));
// console.log(car);


//
// - (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна.
// додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
//
// class Car{
//
//     constructor(model,producer,gradYear,maxSpeed,engineCap) {
//         this.model = model;
//         this.producer = producer;
//         this.gradYear = gradYear;
//         this.maxSpeed = maxSpeed;
//         this.engineCap = engineCap;
//
//         this.drive = () => console.log(`їдемо зі швидкістю ${this.maxSpeed}км. на годину`);
//         this.info = () => {
//             for (let i in this) {
//                 if (typeof this[i] !== "function") {
//                     console.log(`${i} - ${this[i]}`);
//                 }
//             }
//         }
//         this.increaseMaxSpeed = (newSpeed) => this.maxSpeed + newSpeed;
//         this.changeYear = (newValue) => this.gradYear = newValue;
//         this.addDriver = function (drive) {
//             this.drive = drive;
//         }
//     }
// }
// let car = new Car('Ford Mustang EcoBoost Premium','Ford',2017,233,2.3);
// car.drive();
// car.info();
// console.log(car.increaseMaxSpeed(39));
// console.log(car.changeYear(2023));
// console.log(car);


// -створити клас/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
// Створити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
//     За допомоги циклу знайти яка попелюшка повинна бути з принцом.
//     Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку
//
// class Cinderella{
//
//     constructor(name,age,footSize){
//         this.name = name;
//         this.age = age;
//         this.footSize = footSize;
//     }
// }
// class Prince{
//
//     constructor(name,age,shoeFound){
//         this.name = name;
//         this.age = age;
//         this.shoeFound = shoeFound;
//     }
// }
// let arrayOfCinderellas = [
//     new Cinderella('Jaq',51,39.5),
//     new Cinderella('Gus',24,37),
//     new Cinderella('Suzy',18,36.2),
//     new Cinderella('Perla',17,35),
//     new Cinderella('the Grand Duke',27,37.7),
//     new Cinderella('Drizella',58,40.4),
//     new Cinderella('Anastasia',22,37),
//     new Cinderella('Lady Tremaine',10,32),
//     new Cinderella('Cinderella',14,37.5),
//     new Cinderella('Kate',19,36.6),
// ];
// let prince = new Prince('Kevin',25,37);
//
// for(let i of arrayOfCinderellas){
//     if(prince.shoeFound === i.footSize){
//         console.log(`Prince '${prince.name}' and Cinderella '${i.name}' = Couple :)`);
//     }
// }
// let couple = arrayOfCinderellas.find(value => value.footSize === prince.shoeFound);
// console.log(couple);