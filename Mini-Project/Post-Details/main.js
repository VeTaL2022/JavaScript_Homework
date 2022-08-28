// На странице post-details.html:
// 7 Вивести всю, без виключення, інформацію про об'єкт post на який клікнули.
// 8 Нижче інформацію про пост, вивести всі коментарі поточного поста (ендпоінт  - https://jsonplaceholder.typicode.com/posts/POST_ID/comments)

let url = new URL(location.href);
let titleId = url.searchParams.get('titleID');

fetch(`https://jsonplaceholder.typicode.com/posts/${titleId}`)
    .then(response => response.json())
    .then(posts => {
       let postInfo = document.createElement('div');
       postInfo.classList.add('post-id',titleId);

        for(let post in posts) {
            let key = document.createElement('h4');
            key.classList.add('post');
                key.innerText = `${post}: ${posts[post]}`;
                postInfo.appendChild(key);
          }

        document.body.appendChild(postInfo);

       fetch(`https://jsonplaceholder.typicode.com/posts/${titleId}/comments`)
           .then(response => response.json())
           .then(comments => {
               let ul = document.createElement('ul');
               ul.classList.add('comments');

               for(let comment of comments){
                   let li = document.createElement('li');
                   li.classList.add('comment-id',comment.id);
                   li.innerText = comment.body;

                   ul.appendChild(li);
               }
               document.body.appendChild(ul);
           })
    });