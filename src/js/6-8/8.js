let action = prompt('Що ви хочете зробити? (add, sub, mult, div)');
let firstNumber = Number(prompt('Введіть перше число: '));
let secondNumber = Number(prompt('Введіть друге число:'));

console.log(isNaN(firstNumber));

if (!(isNaN(firstNumber) || isNaN(secondNumber))) {
    switch (action) {
        case 'add':
            alert(`${firstNumber} + ${secondNumber} = ${firstNumber + secondNumber}`);
            break;
        case 'sub':
            alert(`${firstNumber} - ${secondNumber} = ${firstNumber - secondNumber}`);
            break;
        case 'mult':
            alert(`${firstNumber} * ${secondNumber} = ${firstNumber * secondNumber}`);
            break;
        case 'div':
            alert(`${firstNumber} / ${secondNumber} = ${firstNumber / secondNumber}`);
            break;
        default:
            alert(`Будь ласка, введіть математичну дію правильно!`);
    }
}
else
    alert(`Будь ласка, введіть числа правильно!`);
