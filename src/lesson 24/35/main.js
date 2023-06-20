/*
    Пишемо свій слайдер зображень:
    1. Відображаємо зображення та кнопки Next, Prev з боків від зображення.
    2. При кліку на Next - показуємо наступне зображення.
    3. При кліку на Prev - попереднє .
    4. При досягненні останнього зображення - ховати кнопку Next. Аналогічно з першим зображенням і кнопкою Prev.
*/

let path = 'img';
let imgs = ['1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg', '6.jpg', '7.jpg', '8.jpg', '9.jpg', '10.jpg'];
let indexCurrentImg = 0;


document.querySelector("#prev_img").onclick = function() {
    if (indexCurrentImg > 0) {
        document.querySelector("#next_img_container").classList.remove('disabled');

        let img = document.getElementById('card_img');
        indexCurrentImg--;
        img.src = `${path}/${imgs[indexCurrentImg]}`;

        if (indexCurrentImg === 0)
            document.querySelector("#prev_img_container").classList.add('disabled');
    }
}


document.querySelector("#next_img").onclick = function() {
    if (indexCurrentImg < imgs.length - 1) {
        document.querySelector("#prev_img_container").classList.remove('disabled');

        let img = document.getElementById('card_img');
        indexCurrentImg++;
        img.src = `${path}/${imgs[indexCurrentImg]}`;

        if (indexCurrentImg === imgs.length - 1)
            document.querySelector("#next_img_container").classList.add('disabled');
    }
}
