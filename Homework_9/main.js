// - є масив
// let simpsons = [
//     {
//         name: 'Bart',
//         surname: 'Simpson',
//         age: 10,
//         info: 'Бартолом\'ю ДжоДжо «Барт» Сімпсон (англ. Bartholomew JoJo «Bart» Simpson) — один із головних героїв мультиплікаційного серіалу Сімпсони. Барт — найстарша дитина Гомера і Мардж Сімпсон. У нього також є дві молодші сестри — Ліса і Меґґі. Барт є втіленням образу бешкетника та посереднього учня у школі. Разом зі своїм батьком Барт є одним із найвідоміших персонажів у цьому серіалі.',
//         photo: 'https://upload.wikimedia.org/wikipedia/uk/a/aa/Bart_simpson.png'
//     },
//     {
//         name: 'Homer',
//         surname: 'Simpson',
//         age: 40,
//         info: 'Гомер Джей Сімпсон (англ. Homer Jay Simpson) — один із головних героїв мультсеріалу «Сімпсони». Гомер — грубий і неввічливий батько родини, він має очевидні вади: товстий, лисий і не дуже розумний. Нерідко він поводиться як блазень, абсурдно, егоїстично і нетактовно, але все ж лишається симпатичним.',
//         photo: 'http://upload.wikimedia.org/wikipedia/en/0/02/Homer_Simpson_2006.png'
//     },
//     {
//         name: 'Marge',
//         surname: 'Simpson',
//         age: 38,
//         info: 'Ма́рджори Жакли́н «Мардж» Си́мпсон (в девичестве Бувье́) (англ. Marjorie Jacqueline «Marge» Simpson) — постоянный персонаж мультипликационного сериала «Симпсоны», её озвучивает Джулия Кавнер. Обычно носит зелёное платье, красные балетки, на шее — ожерелье из искусственного жемчуга и ездит на оранжевом универсале. У неё шикарные синие волосы, которые она обычно собирает в очень высокую причёску. Глаза цвета ореха (19s6e). Основное занятие — домохозяйка, большую часть времени проводит в заботе о доме, детях и Гомере. Образ Мардж копирует стереотип провинциальной американской домохозяйки 50-х годов. Мардж — единственный член семьи, посещающий церковь добровольно. Старается поддерживать нравственность не только своей семьи, но и всего города. Отлично готовит, особенно славятся её свиные отбивные и зефир. Любимое блюдо — лапша с маслом.',
//         photo: 'https://upload.wikimedia.org/wikipedia/ru/0/0b/Marge_Simpson.png'
//     },
//     {
//         name: 'Lisa',
//         surname: 'Simpson',
//         age: 9,
//         info: 'Ли́за Мари́ Си́мпсон (англ. Lisa Marie Simpson) — героиня мультипликационного сериала «Симпсоны». Средний ребёнок в семье, восьмилетняя девочка, выделяющаяся среди остальных Симпсонов прежде всего своим умом и рассудительностью.',
//         photo: 'https://upload.wikimedia.org/wikipedia/ru/e/ec/Lisa_Simpson.png'
//     },
//     {
//         name: 'Maggie',
//         surname: 'Simpson',
//         age: 1,
//         info: 'Ма́ргарет Эвелин «Мэ́гги» Си́мпсон (англ. Margaret Evelyn “Maggie” Simpson) — персонаж мультсериала «Симпсоны». Впервые появилась на телевидении в шоу Трейси Ульман, в короткометражке Good Night (англ.)русск. 19 апреля 1987 года. Мэгги была придумана и разработана карикатуристом Мэттом Грейнингом, пока он ждал встречи с Джеймсом Л. Бруксом. Названа в честь младшей сестры Грейнинга. После появления в шоу Трейси Ульман, через три года семья Симпсонов получила собственный сериал на телеканале Fox, дебют произошёл 17 декабря 1989 года.',
//         photo: 'https://upload.wikimedia.org/wikipedia/ru/9/9d/Maggie_Simpson.png'
//     },
// ];
// Проітерувати його, створиши для кожного об'єкту  масиву <div class='member'> та наповнити його данними з об'єкта.
//
//     Якщо людською мовою: під кожного члена родини зробити блок та наповнити його інформацією з цього об'єкту
// for (const simpson of simpsons) {
//     let div = document.createElement('div');
//     div.classList.add('member');
//     div.style.width = '550px';
//     div.style.margin = '0 auto';
//
//     let nameSurname = document.createElement('h2');
//     nameSurname.innerText = `Ім'я та Прізвище -  ${simpson.name} ${simpson.surname}`;
//     nameSurname.style.textAlign = 'center';
//     // div.appendChild(nameSurname);
//
//     let age = document.createElement('h3');
//     age.innerText = `Вік - ${simpson.age} років`;
//     age.style.textAlign = 'center';
//     // div.appendChild(age);
//
//     let info = document.createElement('p');
//     info.innerText = `${simpson.info}`;
//     // div.appendChild(info);
//
//     let photo = document.createElement('img');
//     photo.src = simpson.photo;
//     photo.style.width = '100%';
//     // div.appendChild(photo);
//
//     div.append(nameSurname,age,info,photo);
//
//     document.body.appendChild(div);
// }


// Цикл в циклі
// - Є масив
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
//
// Створити для кожного елементу масиву свій блок, блок розділити блоками, в яких будуть зберігатись значення окремих властивостей, для властивості modules зробити список з елементами
// Приклад структири знаходиться у файлі example.png
// ------------------
// for (const coursesArrayElement of coursesArray) {
//     let div = document.createElement('div');
//     div.style.margin = '0 auto';
//     div.style.width = '50%';
//     div.style.border = '2px solid red';
//     div.style.marginBottom = '40px';
//
//     let title = document.createElement('h2');
//     title.innerText = `${coursesArrayElement.title}`;
//     title.style.border = '1px solid black';
//     title.style.textAlign = 'center';
//     div.appendChild(title);
//
//     let div_duration = document.createElement('div');
//     div_duration.style.display = 'flex';
//     div_duration.style.justifyContent = 'space-between';
//     div.appendChild(div_duration);
//
//     let monthDuration = document.createElement('h3');
//     monthDuration.innerText = `${coursesArrayElement.monthDuration}`;
//     monthDuration.style.width = '30%';
//     monthDuration.style.border = '1px solid black';
//     monthDuration.style.textAlign = 'center';
//     div_duration.appendChild(monthDuration);
//
//     let hourDuration = document.createElement('h3');
//     hourDuration.innerText = `${coursesArrayElement.hourDuration}`;
//     hourDuration.style.width = '68%';
//     hourDuration.style.border = '1px solid black';
//     hourDuration.style.textAlign = 'center';
//     div_duration.appendChild(hourDuration);
//
//     let ul_modules = document.createElement('ul');
//     ul_modules.style.border = '2px solid black';;
//     div.appendChild(ul_modules);
//
//     for(let arr of coursesArrayElement.modules) {
//         let li = document.createElement('li');
//         li.innerText = arr;
//         ul_modules.appendChild(li);
//     }
//     document.body.appendChild(div);
// }


//     - створити блок,
//     - додати йому класи wrap, collapse, alpha, beta
// - додати стилі(довільні значення) : колір фону, колір тексту, розмір тексту
// - додати цей блок в body.
// - клонувати його повністю, та додати клон в body.
//
// let div = document.createElement('div');
// div.classList.add('wrap','collapse', 'alpha', 'beta');
// div.style.margin = '0 auto';
// div.style.marginBottom = '8px';
// div.style.width = '650px';
// div.style.height = '500px';
// div.style.backgroundColor = 'lightblue';
// div.style.display = 'flex';
// div.style.justifyContent = 'center';
// div.style.alignItems = 'center';
//
// let h1 = document.createElement('h1');
// h1.innerText = 'YaY';
// h1.style.fontSize = '60px';
// h1.style.border = '3px solid blue';
// div.appendChild(h1);
//
// document.body.appendChild(div);
//
// let clone_div = document.getElementsByClassName('new-div')[0];
// clone_div.appendChild(div.cloneNode(true));


// - Є масив:
//     ['Main','Products','About us','Contacts']
// Взяти файл template1.html та додати в нього скріпт котрий для кожного елементу масиву створює li та додає його до блоку .menu
// Завдання робити через цикли.
//
// Відкривати через template1.html файл!!!
// let array = ['Main','Products','About us','Contacts'];
// let menu = document.getElementsByClassName('menu')[0];
// for(let arr of array){
//     let li = document.createElement('li');
//     li.innerText = arr;
//     menu.appendChild(li);
// }
// document.body.appendChild(menu);


// - Є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// Для кожного елементу масиву зробити блок в якому вивести інформацію про title та monthDuration
// Завдання робити через цикли.
// let div = document.createElement('div');
// div.classList.add('courses');
// for (const courses of coursesAndDurationArray) {
//     let divElement = document.createElement('div');
//
//     let title = document.createElement('h2');
//
//     let monthDuration = document.createElement('p');
//
//     title.innerHTML = `<ins>Course</ins> - ${courses.title}`;
//     monthDuration.innerHTML = `Period - ${courses.monthDuration} months`;
//
//     divElement.append(title,monthDuration);
//     div.append(divElement);
// }
// document.body.append(div);


// - Є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
//
// За допомоги скріпта для кожного елементу масиву зробити <div class='item'> ,  в якому буде <h1 class='heading'>  з title  елементу,
// та <p class='description'> з monthDuration елементу.
//     Завдання робити через цикли.
//
// let div = document.createElement('div');
// div.classList.add('items');
// for (const courses of coursesAndDurationArray) {
//     let divElement = document.createElement('div');
//     divElement.classList.add('item');
//
//     let title = document.createElement('h1');
//     title.classList.add('heading');
//
//     let monthDuration = document.createElement('p');
//     monthDuration.classList.add('description');
//
//     title.innerHTML = `<small>Course</small> - <ins>${courses.title}</ins>`;
//     monthDuration.innerHTML = `Period - <strong>${courses.monthDuration}</strong> months`;
//
//     divElement.append(title,monthDuration);
//     div.append(divElement);
// }
// document.body.append(div);


// -----------
//
//     - Створити довільний елемент з id = text.  Використовуючи JavaScript, зробіть так, щоб при натисканні на кнопку зникав елемент з id="text".
// let div = document.createElement('div');
// div.setAttribute('id','text');
// document.body.appendChild(div);
//
// div.style.margin = '0 auto';
// div.style.height = '200px';
// div.style.width = '200px';
// div.style.backgroundColor = 'purple';
//
// let id = document.getElementById('text');
// id.onclick = function (){
//     id.remove();
// }


// - створити інпут який приймає вік людини та кнопку яка підтверджує дію.При натисканні на кнопку зчитати інформацію з інпуту та перевірити
// вік чи менше він ніж 18, та повідомити про це користувача
// let form = document.createElement('form');
// document.body.appendChild(form);
//
// let input = document.createElement('input');
// input.placeholder = 'Enter your age: ';
// // form.appendChild(input);
//
// let button = document.createElement('button');
// button.innerText = 'submit';
// // form.appendChild(button);
//
// form.append(input,button);
//
// form.onsubmit = function (e) {
//     e.preventDefault();
//         if (input.value >= 18) {
//             confirm('You are eligible');
//         } else {
//             confirm('You are not eligible');
//         }
// }


// *** Створити 3 інпута та кнопку. Один визначає кількість рядків, другий - кількість ячеєк, третій вміст ячеєк.
//     При натисканні кнопки, вся ця інформація зчитується і формується табличка, з відповідним вмістом.
// (Додаткова частина для завдання)
//
// let form = document.createElement('form');
// document.body.appendChild(form);
//
// let input1 = document.createElement('input');
// input1.placeholder = 'number of Lines';
// input1.style.marginRight = '10px';
//
// let input2 = document.createElement('input');
// input2.placeholder = 'number of Cells';
// input2.style.marginRight = '10px';
//
// let input3 = document.createElement('input');
// input3.placeholder = 'cell Contents';
// input3.style.marginRight = '10px';
//
// let button = document.createElement('button');
// button.innerText = 'submit';
//
// form.append(input1,input2,input3,button);
//
// form.onsubmit = function (e){
//     e.preventDefault();
//     let table = document.createElement('table');
//     let tbody = document.createElement('tbody');
//
//     for(let row=0;row<input1.value;row++) {
//         let tr = document.createElement('tr');
//
//         for(let column=0;column<input2.value;column++){
//             let td = document.createElement('td');
//             td.innerText = input3.value;
//             tr.appendChild(td);
//         }
//         tbody.appendChild(tr);
//     }
//     table.appendChild(tbody);
//     document.body.appendChild(table);
//     table.setAttribute('border','2');
// }