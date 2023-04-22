// Треба реалізувати просту програму з наступними умовами:
// 1. За допомогою prompt запитати ім'я користувача.
// 2. За допомогою alert вивести "Hello, John! How are you?" , де John це те, що ввів користувач

let name = prompt("Вкажіть своє ім'я");
let regex = /^[a-zA-Z]+$/;

if (regex.test(name))
    alert(`Hello, ${name}! How are you?`);
else
    alert(`Вкажіть своє ім'я правильно`);
