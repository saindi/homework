// Створити функцію, яка прибирає з рядка всі символи, які ми передали другим аргументом.
// 'func("hello world", ['l', 'd'])' поверне нам "heo wor". Вихідний рядок та символи для видалення задає користувач.


const deleteCharFromStr = function (str, charsArr) {

    const isSymbolInChars = function (symbol, arr ) {
        for (let char of arr) {
            if (symbol === char)
                return true;
        }

        return false;
    }

    let answer = '';
    for (let i of str) {
        if (!isSymbolInChars(i, charsArr))  // !charsArr.includes(i)
            answer += i;
    }

    return answer;
}


let inputStr = prompt('Введіть вхідний рядок:');

let inputChars = [];
while (true) {
    inputChars.push(prompt('Введіть символ для видаляння:'));

    let isContinue = confirm("Продовжити введення символів?");

    if (!isContinue)
        break;
}

alert(`Вийшов рядок: ${deleteCharFromStr(inputStr, inputChars)}`)
