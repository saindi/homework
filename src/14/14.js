// Реалізувати рекурсивну функцію, яка зводить число в ступінь. // Число, яке треба піднести до ступеню,
// передається як перший аргумент у функції; Ступінь передається як другий аргумент у функцію pow (num, degree).


// Без негативних ступенів
function pow1(num, degree) {
    if (degree === 0)
        return 1;
    else if (degree === 1)
        return num;
    else
        return num * pow1(num, degree - 1);
}


// З негативними ступенями
function pow2(num, degree) {
    if (num === 0 && degree <= 0)
        return "infinity";

    if (num === 1 || num === 0)
        return num;
    else if (degree > 1 )
        return  num * pow2(num, degree - 1);
    else if (degree < 1)
        return 1 / num * pow2(num, degree + 1);

    // Коли ступень 1
    return num;
}


console.log(pow1(2,  2));
console.log(pow1(3,  0));

console.log(pow2(2,  10));
console.log(pow2(9,  -2));
