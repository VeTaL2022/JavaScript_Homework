// В index.html
// 1 отримати масив об'єктів з endpoint https://jsonplaceholder.typicode.com/users
// 2 Вивести id, name всіх user в index.html. Окремий блок для кожного user.
// 3 Додати кожному блоку кнопку/посилання, при кліку на яку відбувається перехід  на сторінку user-details.html, котра має детальну інформацію про об'єкт на який клікнули

fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users =>{
            let allUsers = document.createElement('div');
            allUsers.classList.add('users');

            for(let user of users){
                let currentUser = document.createElement('div');
                currentUser.classList.add('user-id',user.id);

                let currentUs = document.createElement('h3');
                currentUs.classList.add('user');
                currentUs.innerText = `${user.id} - ${user.name} `;

                let button = document.createElement('button');
                button.classList.add('btn');

                let a = document.createElement('a');
                a.classList.add('href');
                a.href = `User-Details/user-details.html?userId=${user.id}`;
                a.innerText = 'Click';

                button.appendChild(a);

                currentUser.append(currentUs,button);
                allUsers.append(currentUser);
            }
            document.body.appendChild(allUsers);


        });