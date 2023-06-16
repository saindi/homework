/*
    Створити програму для відображення результатів голосування. З наступними умовами:
    1. Як варіанти відповіді - смайлики. За замовчуванням, 5шт.
    2. Виведення даних - смайлики в один рядок, під ними - кількість тих, хто проголосував за кожен смайл.
    3. При натисканні на смайл - під ним змінюється значення лічильника.
    4. Реалізувати таким чином, щоб додавання нових варіантів відповіді не вело до додавання нових функцій.
*/

let numberEmoji = 200;

let emojiList = [];
let currentEmojiList = ['128512', '128513', '128514', '128515', '128516'];
let ratingEmoji = [0, 0, 0, 0, 0];

let options = {
    animation: true,
    delay: 3000
};

let toastError = new bootstrap.Toast(document.getElementById('errorToast'), options);
let successError = new bootstrap.Toast(document.getElementById('successToast'), options);

function createEmojiDownTable() {
    let table = document.getElementById('table_dropdown');

    for (let i = 128517; i < 128517 + numberEmoji; i++) {
        emojiList.push(`&#${i};`);
    }

    for (let i = 0; i < emojiList.length; i = i + 10) {
        let tr = document.createElement("tr");

        for (let j = i; j < i + 10; j++) {
            let td = document.createElement("td");

            td.classList.add('table-item-dropdown');
            td.innerHTML = emojiList[j];

            tr.appendChild(td);
        }

        table.appendChild(tr)
    }
}


document.getElementById('emoji_list').addEventListener('click', function(event) {
    let emojiID = event.target.id;
    let index = currentEmojiList.indexOf(emojiID);

    if (index === -1) {
        toastError.show();
        return;
    }

    ratingEmoji[index]++;
    document.getElementById(index).textContent = ratingEmoji[index];
});


document.getElementById('table_dropdown').addEventListener('click', function(event) {
    let emojiID = event.target.innerHTML.substring(2, event.target.innerHTML.length - 1);

    if (event.target.tagName !== 'TD')
        return;

    if (currentEmojiList.includes(emojiID)) {
        successError.show();
        return;
    }

    let trEmoji = document.getElementById('emoji_list');
    let trRating = document.getElementById('rating_list');

    let tdEmoji = document.createElement("td");
    let tdRating = document.createElement("td");

    tdEmoji.classList.add('table-item');
    tdEmoji.innerHTML = event.target.innerHTML;
    tdEmoji.id = emojiID;

    tdRating.textContent = 0;
    tdRating.id = currentEmojiList.length;

    currentEmojiList.push(emojiID);
    ratingEmoji.push(0);

    trEmoji.appendChild(tdEmoji);
    trRating.appendChild(tdRating);
});


createEmojiDownTable();