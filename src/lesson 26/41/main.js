/*
    Реалізовуємо форму для реєстрації.
    Поля:
    - Ім'я, Прізвище (Текстові поля)
    - Дата народження (Текстове поле)
    - Стать (radio)
    - Місто (select)
    - Адреса (textarea)
    - Мови, якими володіє (checkbox)
    - Кнопка “Зберегти”

    За натисканням на кнопку замість форми повинна виводитися “таблиця” з даними, які ввів користувач.
*/

const cities = ['Vinnitsa', 'Kropivnitsky', 'Poltava', 'Kharkiv', 'Dnepropetrovsk', 'Lugansk', 'Rivne', 'Kherson',
    'Donetsk', 'Lutsk', 'Simferopol', 'Khmelnitsky', 'Zhitomir', 'Lviv', 'Sumy', 'Cherkassy', 'Zaporizhzhya',
    'Nikolaev', 'Ternopil', 'Chernihiv', 'Ivano-Frankivsk', 'Odessa', 'Uzhgorod', 'Chernivtsi', 'Kiev'];

const form = document.getElementById('form');

document.addEventListener('DOMContentLoaded', createSelectElement);

form.addEventListener('submit', registration);


function createSelectElement() {
    let select = document.getElementById('citySelect');

    cities.forEach(city => {
        let item = document.createElement('option');
        item.textContent = city;
        item.value = city;
        select.appendChild(item);
    });
}


function registration(event) {
    event.preventDefault()

    document.getElementById('tableBody').hidden = false;
    document.getElementById('formBody').hidden = true;

    document.getElementById('name').textContent = document.querySelector('#inputName').value;
    document.getElementById('surname').textContent = document.querySelector('#inputSurname').value;
    document.getElementById('gender').textContent = document.querySelector('input[type=radio][name=gender]:checked').value;
    document.getElementById('city').textContent = document.querySelector('#citySelect').value;
    document.getElementById('birthday').textContent = document.querySelector('#inputDateBirth').value;
    document.getElementById('address').textContent = document.querySelector('#addressTextArea').value;

    let languagesHTML = document.querySelectorAll('input[type="checkbox"]:checked')
    let languages = [];
    for (let item of languagesHTML) {
        languages.push(item.value)
    }

    document.getElementById('languages').textContent = languages.join(', ');

}
