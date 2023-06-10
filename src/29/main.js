/*
    У папці images є зображення 1.jpg, 2.jpg, 3.jpg, 4.jpg, 5 .jpg, 6.jpg, 7.jpg, 8.jpg, 9.jpg.
    Вивести зображення з цієї папки, отримане випадковим чином (Math.random)
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
