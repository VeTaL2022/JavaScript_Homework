// - Є масив :
//
//     let usersList = [
//         {
//             id: 1,
//             name: 'Leanne Graham',
//             username: 'Bret',
//             email: 'Sincere@april.biz',
//             address: {
//                 street: 'Kulas Light',
//                 suite: 'Apt. 556',
//                 city: 'Gwenborough',
//                 zipcode: '92998-3874',
//                 geo: {
//                     lat: '-37.3159',
//                     lng: '81.1496'
//                 }
//             },
//             phone: '1-770-736-8031 x56442',
//             website: 'hildegard.org',
//             company: {
//                 name: 'Romaguera-Crona',
//                 catchPhrase: 'Multi-layered client-server neural-net',
//                 bs: 'harness real-time e-markets'
//             }
//         },
//         {
//             id: 2,
//             name: 'Ervin Howell',
//             username: 'Antonette',
//             email: 'Shanna@melissa.tv',
//             address: {
//                 street: 'Victor Plains',
//                 suite: 'Suite 879',
//                 city: 'Wisokyburgh',
//                 zipcode: '90566-7771',
//                 geo: {
//                     lat: '-43.9509',
//                     lng: '-34.4618'
//                 }
//             },
//             phone: '010-692-6593 x09125',
//             website: 'anastasia.net',
//             company: {
//                 name: 'Deckow-Crist',
//                 catchPhrase: 'Proactive didactic contingency',
//                 bs: 'synergize scalable supply-chains'
//             }
//         },
//         {
//             id: 3,
//             name: 'Clementine Bauch',
//             username: 'Samantha',
//             email: 'Nathan@yesenia.net',
//             address: {
//                 street: 'Douglas Extension',
//                 suite: 'Suite 847',
//                 city: 'McKenziehaven',
//                 zipcode: '59590-4157',
//                 geo: {
//                     lat: '-68.6102',
//                     lng: '-47.0653'
//                 }
//             },
//             phone: '1-463-123-4447',
//             website: 'ramiro.info',
//             company: {
//                 name: 'Romaguera-Jacobson',
//                 catchPhrase: 'Face to face bifurcated interface',
//                 bs: 'e-enable strategic applications'
//             }
//         },
//         {
//             id: 4,
//             name: 'Patricia Lebsack',
//             username: 'Karianne',
//             email: 'Julianne.OConner@kory.org',
//             address: {
//                 street: 'Hoeger Mall',
//                 suite: 'Apt. 692',
//                 city: 'South Elvis',
//                 zipcode: '53919-4257',
//                 geo: {
//                     lat: '29.4572',
//                     lng: '-164.2990'
//                 }
//             },
//             phone: '493-170-9623 x156',
//             website: 'kale.biz',
//             company: {
//                 name: 'Robel-Corkery',
//                 catchPhrase: 'Multi-tiered zero tolerance productivity',
//                 bs: 'transition cutting-edge web services'
//             }
//         },
//         {
//             id: 5,
//             name: 'Chelsey Dietrich',
//             username: 'Kamren',
//             email: 'Lucio_Hettinger@annie.ca',
//             address: {
//                 street: 'Skiles Walks',
//                 suite: 'Suite 351',
//                 city: 'Roscoeview',
//                 zipcode: '33263',
//                 geo: {
//                     lat: '-31.8129',
//                     lng: '62.5342'
//                 }
//             },
//             phone: '(254)954-1289',
//             website: 'demarco.info',
//             company: {
//                 name: 'Keebler LLC',
//                 catchPhrase: 'User-centric fault-tolerant solution',
//                 bs: 'revolutionize end-to-end systems'
//             }
//         },
//         {
//             id: 6,
//             name: 'Mrs. Dennis Schulist',
//             username: 'Leopoldo_Corkery',
//             email: 'Karley_Dach@jasper.info',
//             address: {
//                 street: 'Norberto Crossing',
//                 suite: 'Apt. 950',
//                 city: 'South Christy',
//                 zipcode: '23505-1337',
//                 geo: {
//                     lat: '-71.4197',
//                     lng: '71.7478'
//                 }
//             },
//             phone: '1-477-935-8478 x6430',
//             website: 'ola.org',
//             company: {
//                 name: 'Considine-Lockman',
//                 catchPhrase: 'Synchronised bottom-line interface',
//                 bs: 'e-enable innovative applications'
//             }
//         },
//         {
//             id: 7,
//             name: 'Kurtis Weissnat',
//             username: 'Elwyn.Skiles',
//             email: 'Telly.Hoeger@billy.biz',
//             address: {
//                 street: 'Rex Trail',
//                 suite: 'Suite 280',
//                 city: 'Howemouth',
//                 zipcode: '58804-1099',
//                 geo: {
//                     lat: '24.8918',
//                     lng: '21.8984'
//                 }
//             },
//             phone: '210.067.6132',
//             website: 'elvis.io',
//             company: {
//                 name: 'Johns Group',
//                 catchPhrase: 'Configurable multimedia task-force',
//                 bs: 'generate enterprise e-tailers'
//             }
//         },
//         {
//             id: 8,
//             name: 'Nicholas Runolfsdottir V',
//             username: 'Maxime_Nienow',
//             email: 'Sherwood@rosamond.me',
//             address: {
//                 street: 'Ellsworth Summit',
//                 suite: 'Suite 729',
//                 city: 'Aliyaview',
//                 zipcode: '45169',
//                 geo: {
//                     lat: '-14.3990',
//                     lng: '-120.7677'
//                 }
//             },
//             phone: '586.493.6943 x140',
//             website: 'jacynthe.com',
//             company: {
//                 name: 'Abernathy Group',
//                 catchPhrase: 'Implemented secondary concept',
//                 bs: 'e-enable extensible e-tailers'
//             }
//         },
//         {
//             id: 9,
//             name: 'Glenna Reichert',
//             username: 'Delphine',
//             email: 'Chaim_McDermott@dana.io',
//             address: {
//                 street: 'Dayna Park',
//                 suite: 'Suite 449',
//                 city: 'Bartholomebury',
//                 zipcode: '76495-3109',
//                 geo: {
//                     lat: '24.6463',
//                     lng: '-168.8889'
//                 }
//             },
//             phone: '(775)976-6794 x41206',
//             website: 'conrad.com',
//             company: {
//                 name: 'Yost and Sons',
//                 catchPhrase: 'Switchable contextually-based project',
//                 bs: 'aggregate real-time technologies'
//             }
//         },
//         {
//             id: 10,
//             name: 'Clementina DuBuque',
//             username: 'Moriah.Stanton',
//             email: 'Rey.Padberg@karina.biz',
//             address: {
//                 street: 'Kattie Turnpike',
//                 suite: 'Suite 198',
//                 city: 'Lebsackbury',
//                 zipcode: '31428-2261',
//                 geo: {
//                     lat: '-38.2386',
//                     lng: '57.2232'
//                 }
//             },
//             phone: '024-648-3804',
//             website: 'ambrose.net',
//             company: {
//                 name: 'Hoeger LLC',
//                 catchPhrase: 'Centralized empowering task-force',
//                 bs: 'target end-to-end models'
//             }
//         }
//     ];
// Створити під кожен елемент окремий блок. В цьому блоці, під кожну властивість, та властивості внутрішніх об'єктів створити свої окремі блоки.
// let mainDiv = document.createElement('div');
// document.body.appendChild(mainDiv);
//
//
// let mainDiv = document.createElement('div');
// document.body.appendChild(mainDiv);
//
// for(let user of usersList){
//     let highestKeys = document.createElement('div');
//     highestKeys.classList.add('highest-keys');
//     mainDiv.appendChild(highestKeys);
//
//     let lowerKeys = document.createElement('div');
//     lowerKeys.classList.add('lower-keys');
//     // highestKeys.appendChild(lowerKeys);
//
//     let lowestKeys = document.createElement('div');
//     lowestKeys.classList.add('lowest-keys');
//     // lowerKeys.appendChild(lowestKeys);
//
//     for(let us in user) {
//         let key = document.createElement('h4');
//         if (typeof user[us] !== 'object') {
//             key.innerText = `${us} - ${user[us]}`;
//             highestKeys.appendChild(key);
//         }
//
//         if(typeof user[us] === 'object'){
//             for(let innerKey in user[us]){
//                 if(typeof user[us][innerKey] !== 'object') {
//                     let keys = document.createElement('h5');
//                     keys.innerText = `${innerKey} - ${user[us][innerKey]}`;
//                     lowerKeys.appendChild(keys);
//                 }
//
//                 if(typeof user[us][innerKey] === 'object'){
//                     for(let innerInKey in user[us][innerKey]){
//                         let last = document.createElement('h6');
//                         last.innerText = `${innerInKey} - ${user[us][innerKey][innerInKey]}`;
//                         lowestKeys.appendChild(last);
//                     }
//                 }
//             }
//         }
//     }
//     highestKeys.appendChild(lowerKeys);
//     lowerKeys.appendChild(lowestKeys);
// }
//
//
// 2 - Варіант
// let div = document.createElement('div');
// div.classList.add('main');
// document.body.appendChild(div);
//
// for(let user of usersList){
//     let div_obj = document.createElement('div');
//     div_obj.classList.add('object',user.id);
//     div_obj.style.border = '1px solid blue';
//     div_obj.style.width = '300px';
//     div_obj.style.padding = '20px';
//     div_obj.style.marginBottom = '15px';
//     div.appendChild(div_obj);
//
//     let id = document.createElement('h4');
//     id.innerText = `Id - ${user.id}`;
//     div_obj.appendChild(id);
//
//     let name = document.createElement('h2');
//     name.innerText = `Name: ${user.name}`;
//     div_obj.appendChild(name);
//
//
//     let username = document.createElement('h3');
//     username.innerText = `Username - ${user.username}`;
//     div_obj.appendChild(username);
//
//     let email = document.createElement('p');
//     email.innerText = `Email: ${user.email}`;
//     div_obj.appendChild(email);
//
// // adress object{}
//     let div_address = document.createElement('div');
//     div_address.classList.add('street');
//     div_address.style.backgroundColor = 'lightgrey';
//     div_address.style.width = '170px'
//     div_obj.appendChild(div_address);
//
//     let street = document.createElement('p');
//     street.innerText = `Street -- ${user.address.street}`;
//
//     let suite = document.createElement('p');
//     suite.innerText = `Suite -- ${user.address.suite}`;
//
//     let city = document.createElement('p');
//     city.innerText = `City -- ${user.address.city}`;
//
//     let zipcode = document.createElement('p');
//     zipcode.innerText = `Zipcode -- ${user.address.zipcode}`;
//
//     div_address.append(street,suite,city,zipcode);
//
// // geo object{}
//     let geo = document.createElement('div');
//     geo.classList.add('geo');
//     geo.style.backgroundColor = 'lightyellow';
//     geo.style.width = '100px';
//     div_address.appendChild(geo);
//
//     let lat = document.createElement('h5');
//     lat.innerText = `Lat : ${user.address.geo.lat}`;
//
//     let lng = document.createElement('h5');
//     lng.innerText = `Lng : ${user.address.geo.lng}`;
//
//     geo.append(lat,lng);
//
//     let phone = document.createElement('p');
//     phone.innerText = `Phone - ${user.phone}`;
//
//     let website = document.createElement('p');
//     website.innerText = `Website: ${user.website}`;
//
//     div_obj.append(phone,website);
//
// // company object{}
//     let company = document.createElement('div');
//     company.classList.add('company');
//     company.style.backgroundColor = 'lightgreen';
//     div_obj.appendChild(company);
//
//     let name_company = document.createElement('h4');
//     name_company.innerText = `Name --- ${user.company.name}`;
//
//     let catchPhrase = document.createElement('h4');
//     catchPhrase.innerText = `Catch Phrase ---${user.company.catchPhrase}`;
//
//     let bs = document.createElement('p');
//     bs.innerText = `Bs --- ${user.company.bs}`;
//
//     company.append(name_company,catchPhrase,bs);
// }


// --------
//  за допомоги рекурсії перебрати структуру сторінки. зробити об'єкт, всі заголовки покласти в (масив) характеристику headings, всі
//  параграфи покласти в характеристику (масив) paragraphs
//
// function Explorer(body){
//     let headings = [];
//     let paragraphs = [];
//     let obj = {headings,paragraphs};
//     let children = body.children;
//
//     if(children.length !== 0){
//
//                 let all_h = document.querySelectorAll('h1,h2,h3,h4,h5,h6');
//                 for(let i of all_h){
//                     headings.push(i.innerText);
//                 }
//
//                 let all_p = document.querySelectorAll('p');
//                 for(let i of all_p){
//                     paragraphs.push(i.innerText);
//                 }
//             }
//         console.log(obj);
// }
// Explorer(document.body);


// ------
//
//     зробити div content-editable ввести будь-яке ціле слово. та при натисканні табуляції перетворити його на подвійний тег
// asd ->tab-> <asd></asd>
//
// let h3 = document.createElement('h3');
// h3.innerText = 'Write any word and then press Tab';
//
// let contentEditable = document.createElement('div');
// contentEditable.setAttribute('contentEditable','true');
// contentEditable.style.border = '2px solid black';
// contentEditable.style.width = '280px';
//
// contentEditable.addEventListener('keydown',function (event){
//     if(event.keyCode === 9){
//         contentEditable.innerText = `<${contentEditable.innerText}></${contentEditable.innerText}>`;
//     }
// });
//
// document.body.append(h3,contentEditable);
