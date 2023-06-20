/*
    Написати функцію generateList(array), яка приймає масив із чисел та масивів чисел (наприклад [1,2, 3]) і генерує
    список з елементів
*/

function generateList(array) {
    let ul = document.createElement("ul");

    for (let i = 0; i < array.length; i++) {
        let li = document.createElement("li");

        if (Array.isArray(array[i]))
            li.appendChild(generateList(array[i]));
        else
            li.textContent = array[i];

        ul.appendChild(li);
    }

    return ul
}


function mainForFirstList() {
    array = [1, 2, [1, 2, 3], 3];

    let div = document.querySelector("#firstExample");
    div.appendChild(generateList(array));
}


function mainForSecondList() {
    array = [1, 2, [1, [1, 2, 3], 3], 4, 5];

    let div = document.querySelector("#secondExample");
    div.appendChild(generateList(array));
}


mainForFirstList();
mainForSecondList();

