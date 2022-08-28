// 4 Вивести всю, без виключення, інформацію про об'єкт user на який клікнули
// 5 Додати кнопку "post of current user", при кліку на яку, з'являються title всіх постів поточного юзера
// (для сполучення постов используйте эндпоинт https://jsonplaceholder.typicode.com/users/USER_ID/posts)
// 6 Каждому посту додати кнопку/посилання, при кліку на яку відбувається перехід на сторінку post-details.html

let url = new URL(location.href);
let userId = url.searchParams.get('userId');

let mainDiv = document.createElement('div');
mainDiv.classList.add('mainDiv');

fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
    .then(response => response.json())
    .then(users => {
        let userInfo = document.createElement('div');
        userInfo.classList.add('user-id',userId);

        for(let user in users) {
            let key = document.createElement('h5');
            if (typeof users[user] !== 'object') {
                key.innerText = `${user}: ${users[user]}`;
                userInfo.appendChild(key);
            }
            if(typeof users[user] === 'object'){
                for(let innerKey in users[user]){
                    if(typeof users[user][innerKey] !== 'object') {
                        let inKey = document.createElement('h5');
                        inKey.innerText = `${innerKey}: ${users[user][innerKey]}`;
                        userInfo.appendChild(inKey);
                    }
                    if(typeof users[user][innerKey] === 'object'){
                        for(let lastKey in users[user][innerKey]){
                            let lstKey = document.createElement('h5');
                            lstKey.innerText = `${lastKey}: ${users[user][innerKey][lastKey]}`;
                            userInfo.appendChild(lstKey);
                        }
                    }
                }
            }
        }
        mainDiv.appendChild(userInfo);


        fetch(`https://jsonplaceholder.typicode.com/users/${userId}/posts`)
            .then(response => response.json())
            .then(posts => {
            let button = document.createElement('button');
            button.classList.add('mainButton');
            button.innerText = 'posts of current user';
            mainDiv.appendChild(button);

            button.onclick = function (){
                    let ul = document.createElement('ul');
                    for (let post of posts) {
                        let li = document.createElement('li');
                        li.innerText = `${post.title} `;
                        ul.appendChild(li);

                        let button = document.createElement('button');
                        button.classList.add('btn');
                        li.appendChild(button);

                        let a = document.createElement('a');
                        a.href = `../Post-Details/post-details.html?titleID=${post.id}`;
                        a.innerText = 'more details';

                        button.appendChild(a);
                    }
                    document.body.appendChild(ul);
                    button.disabled = true;
            }
            });
    });
document.body.appendChild(mainDiv);