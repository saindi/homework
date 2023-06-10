/*
    Вивести таблицю 10 × 10, заповнену числами від 1 до 100 (таблиця створюється динамічно)
*/

function generateRandomNumber() {
    return Math.floor(Math.random() * 100) + 1;
}


document.querySelector("#generate_number").onclick = function() {
    let tableElements = document.querySelectorAll("td");

    tableElements.forEach(function(item) {
       item.textContent = generateRandomNumber();
    });
}


function main() {
    let id = 1;
    let table = document.querySelector("#table_body");

    for (let i = 0; i < 10; i++) {
        let tr = document.createElement("tr");

        for (let j = 0; j < 10; j++) {
            let td = document.createElement("td");

            td.id = id;
            td.textContent = generateRandomNumber();

            id += 1;

            tr.appendChild(td);
        }

        table.appendChild(tr);
    }
}


main();
