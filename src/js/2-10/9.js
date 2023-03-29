// 1. Вивести на сторінку в один рядок через кому числа від 10 до 20
console.log('Вивести на сторінку в один рядок через кому числа від 10 до 20:')

let number = [];

for (let i = 10; i <= 20; i++) {
    number.push(i);
}

console.log(number.join(', '));


// 2. Вивести квадрати чисел від 10 до 20.
console.log('Вивести квадрати чисел від 10 до 20:')

for (let i = 10; i <= 20; i++) {
    console.log(Math.pow(i, 2));
}


// 3. Вивести таблицю множення на 7
console.log('Вивести таблицю множення на 7:')

for (let i = 1; i <= 10; i++) {
    console.log(`7 * ${i} = ${7 * i}`);
}


// 4. Знайти суму всіх цілих чисел від 1 до 15.
console.log('найти суму всіх цілих чисел від 1 до 15:')

let sum = 0;

for (let i = 1; i <= 15; i++) {
    sum += i;
}

console.log(sum)


// 5. Знайти добуток усіх цілих чисел від 15 до 35.
console.log('Знайти добуток усіх цілих чисел від 15 до 35:')

let multi = 1;

for (let i = 15; i <= 35; i++) {
    multi *= i;
}

console.log(multi);


// 6. Знайти середнє арифметичне всіх цілих чисел від 1 до 500
console.log('Знайти середнє арифметичне всіх цілих чисел від 1 до 500:')

let average = 0;

for (let i = 1; i <= 500; i++) {
    average += i;
}

average /= 500

console.log(average);


// 7. Вивести суму лише парних чисел в діапазоні від 30 до 80.
console.log('Вивести суму лише парних чисел в діапазоні від 30 до 80:')

let sumPaired = 0;

for (let i = 30; i <= 80; i++) {
    if ( i % 2 === 0)
        sumPaired += i;
}

console.log(sumPaired);


// 8. Вивести всі числа в діапазоні від 100 до 200 кратні 3.
console.log('Вивести всі числа в діапазоні від 100 до 200 кратні 3:')

for (let i = 100; i <= 200; i++) {
    if ( i % 3 === 0)
        console.log(i);
}


// 9. Дано натуральне число. Знайти та вивести на сторінку всі його дільники
console.log('Дано натуральне число. Знайти та вивести на сторінку всі його дільники:')

let n = 40;

let dividers = [];

for (let i = 1; i <= n; i++) {
    if (n % i === 0)
        dividers.push(i);
}

console.log(dividers.join(', '));


// 10. Визначити кількість його парних дільників.
console.log('Визначити кількість його парних дільників:')

let countDividersPaired = 0;

for (let divider of dividers) {
    if (divider % 2 === 0)
        countDividersPaired += 1;
}

console.log(countDividersPaired)


// 11. Знайти суму його парних дільників.
console.log('Знайти суму його парних дільників:')

let sumDividersPaired = 0;

for (let divider of dividers) {
    if (divider % 2 === 0)
        sumDividersPaired += divider;
}

console.log(sumDividersPaired)


// 12. Надрукувати повну таблицю множення від 1 до 10.
console.log('Надрукувати повну таблицю множення від 1 до 10:')

for (let i = 1; i <= 10 ; i++) {
    for (let j = 1; j <= 10 ; j++) {
        console.log(`${i} * ${j} = ${i * j}`);
    }
    console.log('');
}
