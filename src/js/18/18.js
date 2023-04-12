// Написати функцію, яка приймає 1 параметр. з тим, що передали перший раз і т. д.

function createSum(start) {
    let amount = start;

    return function(n) {
        return amount += n;
    }
}


let sum = createSum(0);

console.log(sum(3));
console.log(sum(5));
console.log(sum(20));
