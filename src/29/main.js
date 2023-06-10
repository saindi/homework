/*
1. Використовуючи API https://jsonplaceholder.typicode.com/ зробити пошук поста за ід.
2. Ід має бути введений в інпут (валідація: ід від 1 до 100) Якщо знайдено пост, то вивести на сторінку блок з постом і
зробити кнопку для отримання комкоментарів до посту.
3.Зробити завдання використовуючи проміси, перехопити помилки.
*/
const button = document.getElementById('get_img');
button.addEventListener('click', changeImg);

let path = 'img';
let imgs = ['1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg', '6.jpg', '7.jpg', '8.jpg', '9.jpg', '10.jpg']


function generateRandomNumber() {
    return Math.floor(Math.random() * 10);
}

function changeImg() {
    let img = document.getElementById('card_img');
    img.src = `${path}/${imgs[generateRandomNumber()]}`;
}

changeImg()
