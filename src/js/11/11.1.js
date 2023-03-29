// 1. Дано масив з елементами різних типів. Створити функцію яка вираховує середнє арифметичне лише числових
// елементів даного масиву.


function averageOnlyNumbers(arr) {
    let sum = 0;
    let count = 0;

    for (let i of arr){
        if (typeof i === "number"){
            sum += i;
            count += 1;
        }
    }

    return sum / count;
}


let a = [1, 'a', 2 , 3, 'b', false, 4, '1213', 5];

console.log(`Cереднє арифметичне лише числових елементів даного масиву: ${averageOnlyNumbers(a)}`);
