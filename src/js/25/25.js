// Створити клас SuperMath.
// Додати до екземпляра метод - check(obj), параметр obj якого має властивості X, Y, znak. Метод повинен підтвердити у
// користувача, чи хоче він зробити дію znak c Х і У. Якщо хоче, зробити математичну дію znak (яка описана в прототипі),
// інакше - запитати введення нових даних через метод input() класу SuperMath.
//
// Приклад об'єкта: `obj = {X:12, Y:3, znak: “/”}`, можливі варіанти znak => `+ - / * %`.
// При введенні znak потрібно перевірити коректність введення на можливі математичні дії.

let obj = {
    x: 12,
    y: 3,
    znak: '/'
}

class SuperMath {
    check(obj) {
        if (confirm(`Виконати дію ${obj.x} ${obj.znak} ${obj.y}?`))
            alert(`${obj.x} ${obj.znak} ${obj.y} = ` + eval(`${obj.x} ${obj.znak} ${obj.y}`));
        else
            this.input();
    }

    input() {
        let firstNumber = Number(prompt('Введіть перше число:'));
        let secondNumber = Number(prompt('Введіть друге число:'));
        let action = prompt('Що ви хочете зробити? (+ - / * %)');

        if ((isNaN(firstNumber) || isNaN(secondNumber))) {
            alert(`Будь ласка, введіть числа правильно!`);
            return;
        }

        switch (action) {
            case '+':
                alert(`${firstNumber} + ${secondNumber} = ${firstNumber + secondNumber}`);
                break;
            case '-':
                alert(`${firstNumber} - ${secondNumber} = ${firstNumber - secondNumber}`);
                break;
            case '/':
                alert(`${firstNumber} / ${secondNumber} = ${firstNumber / secondNumber}`);
                break;
            case '*':
                alert(`${firstNumber} * ${secondNumber} = ${firstNumber * secondNumber}`);
                break;
            case '%':
                alert(`${firstNumber} % ${secondNumber} = ${firstNumber % secondNumber}`);
                break;
            default:
                alert(`Будь ласка, введіть математичну дію правильно!`);
        }
    }

}

p = new SuperMath();
p.check(obj);
