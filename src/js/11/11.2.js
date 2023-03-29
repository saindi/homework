// 2. Написати функцію doMath(x, znak, y), яка отримує 3 аргументи: числа x і y, рядок znak. У змінній znak може бути:
// +, -, *, /, %, ^ (ступінь ).Вивести результат математичної дії, вказаної в змінній znak.Обидва числа і знак
// виходять від користувача.


function doMath(x, znak, y) {
    console.log(x);
    if (isNaN(x) || isNaN(y)) {
        alert('Введіть числа коректно!')
        return;
    }

    switch (znak) {
        case '+':
            alert(`${x} + ${y} = ${x + y}`)
            break;
        case '-':
            alert(`${x} - ${y} = ${x - y}`)
            break;
        case '*':
            alert(`${x} * ${y} = ${x * y}`)
            break;
        case '/':
            alert(`${x} / ${y} = ${x / y}`)
            break;
        case '%':
            alert(`${x} % ${y} = ${x % y}`)
            break;
        case '^':
            alert(`${x}^${y} = ${Math.pow(x, y)}`)
            break;
        default:
            alert('Введіть математичну операцію коректно!')
    }
}


let firstNumber = Number(prompt('Введіть x:'));
let secondNumber = Number(prompt('Введіть y:'));
let znak = prompt('Введіть знак (+, -, *, /, %, ^):');

doMath(firstNumber, znak, secondNumber);
