// Реалізуйте функцію removeElement(array, item), щоб видалити елемент item з масиву array.


function removeElement(array, item) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] === item) {
            for (let j = i; j < array.length - 1; j++)
                array[j] = array[j + 1];

            array[array.length - 1] = null;

            array.length--;
        }
    }
}


let array = [5, 1, 2, 3, 4, 5, 6, 7, 5];

removeElement(array, 5 );

console.log(array);
console.log(array.length);
