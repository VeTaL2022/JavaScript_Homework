// - Створити клас або функцію конструктор, за допомоги якої можна створювати об'єкти наступного вигляду.
// Конструктор повинен приймати значення для кожної властивості, в т.ч і для властивостей внутрішніх об'єктів
//
// {
//     id: 1,
//     name: 'Leanne Graham',
//     username: 'Bret',
//     email: 'Sincere@april.biz',
//     address: {
//         street: 'Kulas Light',
//         suite: 'Apt. 556',
//         city: 'Gwenborough',
//         zipcode: '92998-3874',
//              geo: {
//                  lat: '-37.3159',
//                  lng: '81.1496'
//     }
// },
//     phone: '1-770-736-8031 x56442',
//     website: 'hildegard.org',
//     company: {
//         name: 'Romaguera-Crona',
//         catchPhrase: 'Multi-layered client-server neural-net',
//         bs: 'harness real-time e-markets'
// }
// }
//
// class Info{
//   constructor(id,name,username,email,address,phone,website,company) {
//       this.id = id;
//       this.name = name;
//       this.username = username;
//       this.email = email;
//       this.address = address;
//       this.phone = phone;
//       this.website = website;
//       this.company = company;
//   }
// }
//
// let newUser = new Info(1,'Leanne Graham','Bret','Sincere@april.biz',{street:'Kulas Light',suite:'Apt. 556',
//         city:'Gwenborough',zipcode:'92998-3874',geo:{lat:'-37.3159',lng: '81.1496'}},'1-770-736-8031 x56442','hildegard.org',
//     {name:'Romaguera-Crona',
//     catchPhrase: 'Multi-layered client-server neural-net',bs: 'harness real-time e-markets'});
//
// console.log(newUser);
//
// OR
// function Info(id,name,username,email,street,suite,city,zipcode,lat,lng,phone,website,namec,catchPhrase,bs){
//     this.id = id;
//     this.name = name;
//     this.username = username;
//     this.email = email;
//     this.address = {
//         street: street,
//         suite: suite,
//         city: city,
//         zipcode: zipcode,
//         geo : {
//             lat: lat,
//             lng: lng
//         }
//     };
//     this.phone = phone;
//     this.website = website;
//     this.company = {
//         namec: namec,
//         catchPhrase: catchPhrase,
//         bs: bs
//     };
// }
// let newInfo = new Info(1,'Leanne Graham','Bret','Sincere@april.biz','Kulas Light','Apt. 556','Gwenborough',
//     '92998-3874','-37.3159','81.1496','1-770-736-8031 x56442','hildegard.org','Romaguera-Crona',
//     'Multi-layered client-server neural-net','harness real-time e-markets');
//
// console.log(newInfo);


// -  Створити функцію конструктор / клас  який описує об'єкт тегу
// Поля :
//     -назва тегу ()
// - опис його дій
// - масив з атрибутами (2-3 атрибути максимум)
// Кожен атрибут описати як окремий який буде містити
// -назву атрибуту
// -опис дії атрибуту
// інформацію брати з htmlbook.ru
//
// Таким чином описати теги
// -a
// -div
// -h1
// -span
// -input
// -form
// -option
// -select
// Приклад результуючого об'єкту
// {
//     titleOfTag: 'area',
//         action: `Каждый элемент <area> определяет активные области изображения, которые являются ссылками...`,
//     attrs: [
//     {titleOfAttr: 'accesskey', actionOfAttr: 'Переход к области с помощью комбинации клавиш'},
//     {/*some props and values*/},
//     {/*...*/},
//     {/*...*/},
// ]
//
// }
//
// class ObjectOfTag{
//
//     constructor(titleOfTag,action,titleOfAttr1,actionOfAttr1,titleOfAttr2,actionOfAttr2) {
//         this.titleOfTag = titleOfTag;
//         this.action = action;
//         this.attrs = [
//             {titleOfAttr: titleOfAttr1, actionOfAttr: actionOfAttr1},
//             {titleOfAttr: titleOfAttr2, actionOfAttr: actionOfAttr2},
//         ]
//     }
// }
// //
// let tag_a = new ObjectOfTag('a','Тег <a> является одним из важных элементов HTML и предназначен для создания ссылок.',
//     'accesskey','Активация ссылки с помощью комбинации клавиш.',
//     'download', 'Предлагает скачать указанный по ссылке файл.');
//
// let tag_div = new ObjectOfTag('div','Элемент <div> является блочным элементом и предназначен для выделения фрагмента документа с целью изменения вида содержимого.',
//     'align','Задает выравнивание содержимого тега <div>.',
//     'title', 'Добавляет всплывающую подсказку к содержимому.',);
//
// let tag_h1 = new ObjectOfTag('h1','Тег <h1> представляет собой наиболее важный заголовок первого уровня.',
//     'align','Определяет выравнивание заголовка.',
//     'id','Указывает имя стилевого идентификатора.');
//
// let tag_span = new ObjectOfTag('span','Тег <span> предназначен для определения строчных элементов документа.',
//     'accesskey','Активация ссылки с помощью комбинации клавиш.',
//     'dir', 'Задает направление и отображение текста — слева направо или справа налево.');
//
// let tag_input = new ObjectOfTag('input','Тег <input> является одним из разносторонних элементов формы и позволяет создавать разные элементы интерфейса и обеспечить взаимодействие с пользователем.',
//     'accept','Устанавливает фильтр на типы файлов, которые вы можете отправить через поле загрузки файлов.',
//     'checked', 'Предварительно активированный переключатель или флажок.');
//
// let tag_form = new ObjectOfTag('form','Тег <input> Связывает поле с формой по её идентификатору.',
//     'id','Указывает имя стилевого идентификатора.',
//     'class','Определяет имя класса, которое позволяет связать тег со стилевым оформлением.');
//
// let tag_option = new ObjectOfTag('option','Тег <option> определяет отдельные пункты списка, создаваемого с помощью контейнера <select>. ',
//     'disabled','Заблокировать для доступа элемент списка.',
//     'label', 'Указание метки пункта списка.',);
//
// let tag_select = new ObjectOfTag('select','Тег <select> позволяет создать элемент интерфейса в виде раскрывающегося списка, а также список с одним или множественным выбором.',
//     'multiple','Позволяет одновременно выбирать сразу несколько элементов списка.',
//     'required', 'Список обязателен для выбора перед отправкой формы.');
//
// console.log(tag_a);
// console.log(tag_div);
// console.log(tag_h1);
// console.log(tag_span);
// console.log(tag_input);
// console.log(tag_form);
// console.log(tag_option);
// console.log(tag_select);