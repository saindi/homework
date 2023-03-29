// 3. Написати функцію заповнення даними користувача двомірного масиву. Довжину основного масиву і внутрішніх масивів
// задає користувач. Значення всіх елементів всіх масивів задає користувач.


function createArrays(arraySizes) {
    let arr = [];

    for (let i = 0; i < arraySizes.length; i++) {
        let tempArr = [];
        for (let j = 0; j < arraySizes[i]; j++) {
            tempArr.push(prompt(`Введіть ${j} елемент ${i} масиву:`));
        }

        arr.push(tempArr);
    }

    return arr;
}


function isNumericArray(arr) {
    for (let i of arr) {
        if (isNaN(i))
            return false;
    }

    return true;
}


let sizeMain = Number(prompt('Введіть довжину основного масиву:'));
let sizesInternal = [];

if (isNaN(sizeMain)) {
    alert('Введіть довжину масиву коректно!')
} else {
    for (let i = 0; i < sizeMain; i++) {
        sizesInternal.push(Number(prompt(`Введіть довжину ${i} внутрішнього масиву:`)));
    }

    isNumericArray(sizesInternal) ? console.log(createArrays(sizesInternal)) : alert('Введіть довжину масиву коректно!');
}
