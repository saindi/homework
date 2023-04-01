// 1. Вивести числа від 20 до 30 через пропуск, використовуючи крок 0,5 (20 20,5 21 21,5….)
console.log('Вивести числа від 20 до 30 через пропуск, використовуючи крок 0,5 (20 20,5 21 21,5….):');
let i = 20;

let numbers = [];

while (i <= 30) {
    numbers.push(i);
    i += 0.5;
}

console.log(numbers.join(' '));


// 2. Один долар коштує 27 гривень. Вивести дані з розрахунком вартості 10, 20, 30... 100 доларів
console.log('Один долар коштує 27 гривень. Вивести дані з розрахунком вартості 10, 20, 30... 100 доларів:');

let course = 27;

for (let i = 10; i <= 100 ; i += 10) {
    console.log(`${i} $ = ${i * course} гривень`)
}


// 3. Дане ціле число. Вивести всі цілі числа від 1 до 100, квадрат яких не перевищує числа N
console.log('Дане ціле число. Вивести всі цілі числа від 1 до 100, квадрат яких не перевищує числа N:');

let n = 55;

for (let i = 1; i <= 100 ; i++) {
    if (Math.pow(i, 2) <= n)
        console.log(i);
}


// 4. Дане ціле число. З'ясувати, чи є воно простим
console.log("Дане ціле число. З'ясувати, чи є воно простим:");

let a = 31;

let isSimple = true;
for (let i = a - 1; i > 1 ; i--) {
    if ( a % i === 0)
        isSimple = false;
}

isSimple ? console.log(`Число ${a} - просте`) : console.log(`Число ${a} - складне `)


// 5. Дане деяке число. Визначити, чи можна одержати це число шляхом зведення числа 3 у деякий ступінь
console.log("Дане деяке число. Визначити, чи можна одержати це число шляхом зведення числа 3 у деякий ступінь:");

let b = 81;

let isSuchNumebr = false;

let number = 3;
for (let i = 1; number < b; i++) {
    number = Math.pow(3, i);

    if (number === b)
    {
        isSuchNumebr = true;
        break;
    }
}

isSuchNumebr ? console.log(`Так, можно`) : console.log(`Нi, не можна`)