/*
1. Використовуючи API https://jsonplaceholder.typicode.com/ зробити пошук поста за ід.
2. Ід має бути введений в інпут (валідація: ід від 1 до 100) Якщо знайдено пост, то вивести на сторінку блок з постом і
зробити кнопку для отримання комкоментарів до посту.
3.Зробити завдання використовуючи проміси, перехопити помилки.
*/

let idCurrentPost = Number();

document.querySelector("#search_post").onclick = function(){
    let id = document.getElementById('input_id_post').value;

    if (id > 100 || id < 1) {
        alert('Input error! Id from 1 to 100.');
        return;
    }

    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
        .then(response => response.json())
        .then((json) => {
            if (Object.keys(json).length === 0 ) {
               alert('Server error!');
               return;
            }

            idCurrentPost = json.id;

            document.getElementById('card-title').innerHTML = json.title;
            document.getElementById('card-text').innerHTML = json.body;

            document.getElementById('cards').hidden = false;
            document.getElementById("comments").hidden = true;
        })
        .catch((error) => {
            alert('Server error!');
            console.log(error);
        })
}

document.querySelector("#get_comment").onclick = function(){
    if (idCurrentPost === 0 ) {
        alert('First find post!');
        return;
    }

    fetch(`https://jsonplaceholder.typicode.com/posts/${idCurrentPost}/comments`)
        .then(response => response.json())
        .then((json) => {
            if (Object.keys(json).length === 0 ) {
                alert('Server error!');
                return;
            }

            document.getElementById("comments").remove();

            let divComments = document.createElement("div");
            divComments.id = 'comments';
            divComments.className = 'comments row justify-content-md-center mt-4';
            document.getElementById('container').appendChild(divComments);

            for (let item of json) {
                let divComment = document.createElement("div");
                let divName = document.createElement("div");
                let pEmail = document.createElement("p");
                let pBody = document.createElement("р");
                let hr = document.createElement("hr");

                divComment.className='comment col-8';

                divName.innerHTML = item.name;

                pEmail.className = 'text-muted text-sm';
                pEmail.innerHTML = item.email;

                pBody.className = 'text';
                pBody.innerHTML = item.body;

                divComment.appendChild(divName)
                divComment.appendChild(pEmail)
                divComment.appendChild(pBody)
                divComment.appendChild(hr)

                divComments.appendChild(divComment);
            }
        })
        .catch((error) => {
            alert('Server error!');
            console.log(error);
        })
}
