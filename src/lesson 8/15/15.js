// Створити масив, довжину та елементи якого задає користувач. Відсортувати масив за зростанням. Видалити елементи
// з масиву з 2 по 4 (включно!). У міру змін виводити вміст масиву на сторінку.


function getArr(size) {
    let tempArr = [];

    for (let i = 0; i < size; i++) {
        tempArr.push(Number(prompt(`Введіть ${i} елемент:`)))
    }

    return tempArr;
}


function isNumericArray(arr) {
    for (let i of arr) {
        if (isNaN(i))
            return false;
    }

    return true;
}


function bubbleSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
}


function deleteElements(arr, start, stop) {
    let count = stop - start + 1;

    for (let i = 0; i < count; i++) {
        if (arr.length > start){
            for (let j = start; j < arr.length - 1; j++)
                arr[j] = arr[j + 1];

            arr[arr.length - 1] = null;

            arr.length--;
        }
    }
}


(function () {
    let sizeArr = Number(prompt('Введіть довжина масиву:'));

    if (isNaN(sizeArr)) {
        alert('Введіть довжину масиву коректно!')
        return;
    }

    let arr = getArr(sizeArr);

    if(!isNumericArray(arr)) {
        alert('Введіть масив коректно!')
        return;
    }

    alert(`Отримали масив: ${arr}`);


    bubbleSort(arr);
    alert(`Відсортувати масив за зростанням: ${arr}`);


    deleteElements(arr, 2, 4);  // arr.splice(2,3);
    alert(`Видалити елементи з масиву з 2 по 4: ${arr}`);
})();
