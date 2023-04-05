// 1. Дан масив. Знайти суму та кількість позитивних елементів.
function getSumAndCountPositive(arr){
    let sum = 0;
    let count = 0;

    for (let arrElement of arr) {
        if (arrElement > 0) {
            sum += arrElement;
            count += 1;
        }
    }

    return [sum, count];
}


// 2. Знайти мінімальний елемент масиву та його порядковий номер.
function getMinElement(arr){
    let min = arr[0];
    let number = 0;

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < min) {
            min = arr[i];
            number = i;
        }

    }

    return [min, number];
}


// 3. Знайти максимальний елемент масиву та його порядковий номер.
function getMaxElement(arr){
    let max = arr[0];
    let number = 0;

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
            number = i;
        }

    }

    return [max, number];
}


// 4. Визначити кількість негативних елементів.
function getCountNegative(arr){
    let count = 0;

    for (let arrElement of arr) {
        if (arrElement < 0) {
            count += 1;
        }
    }

    return count;
}


// 5. Знайти кількість непарних позитивних елементів.
// 8. Знайти суму непарних позитивних елементів.
function getSumAndCountOddPositive (arr) {
    let sum = 0;
    let count = 0;

    for (const arrElement of arr) {
        if (arrElement > 0 && arrElement % 2 !== 0)
        {
            sum += arrElement;
            count++;
        }
    }

    return [sum, count];
}


// 6. Знайти кількість парних позитивних елементів.
// 7. Знайти суму парних позитивних елементів.
function getSumAndCountEvenPositive (arr) {
    let sum = 0;
    let count = 0;

    for (const arrElement of arr) {
        if (arrElement > 0 && arrElement % 2 === 0)
        {
            sum += arrElement;
            count++;
        }
    }

    return [sum, count];
}


// 9. Знайти добуток позитивних елементів.
function getProduct(arr){
    let mult  = 1;

    for (let arrElement of arr) {
        if (arrElement > 0) {
            mult *= arrElement;
        }
    }

    return mult;
}


// 10. Знайти найбільший серед елементів масиву, остальні обнулити.
function zeroingArr(arr) {
    let answer = arr;
    let max = getMaxElement(arr)[0];

    for (let i = 0; i < answer.length; i++) {
        if (answer[i] !== max)
            answer[i] = 0;
    }

    return answer;
}


let arr = [16, -37, 54, -4, 72, -56, 47, 4, -16, 25, -37, 46, 4, -51, 27, -63, 4, -54, 76, -4, 12, -35, 4, 47];

console.log(`1. Знайти суму та кількість позитивних елементів: ${getSumAndCountPositive(arr)}`);
console.log(`2. Знайти мінімальний елемент масиву та його порядковий номер: ${getMinElement(arr)}`);
console.log(`3. Знайти максимальний елемент масиву та його порядковий номер.: ${getMaxElement(arr)}`);
console.log(`4. Визначити кількість негативних елементів: ${getCountNegative(arr)}`);
console.log(`5. Знайти кількість непарних позитивних елементів: ${getSumAndCountOddPositive(arr)[1]}`);
console.log(`6. Знайти кількість парних позитивних елементів: ${getSumAndCountEvenPositive(arr)[1]}`);
console.log(`7. Знайти суму парних позитивних елементів: ${getSumAndCountEvenPositive(arr)[0]}`);
console.log(`8. Знайти суму непарних позитивних елементів: ${getSumAndCountOddPositive(arr)[0]}`);
console.log(`9. Знайти добуток позитивних елементів: ${getProduct(arr)}`);
console.log(`10. Знайти найбільший серед елементів масиву, остальні обнулити: ${zeroingArr(arr)}`);
