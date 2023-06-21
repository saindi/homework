/*
    1.В інформації товару - кнопка "купити".
    При натисканні на "купити" нижче з'являється форма оформлення замовлення з наступними полями:
    - ПІБ покупця
    - Місто (вибір зі списку)
    - Склад Нової пошти для надсилання
    - Післяплати або оплати банківської картки
    - Кількість продукції, що купується
    - Коментар до замовлення
    2. Реалізувати перевірку всіх даних користувача під час підтвердження замовлення - обов'язкові поля заповнені. Інакше - виводити помилку на сторінку
    3. Виводити інформацію про замовлення на сторінку (інформація про товар та про доставку)
*/
let orders = [];
let currentProduct = '';

const parentCategory = document.getElementById('parent_category');
const parentProducts = document.getElementById('parent_product');
const btnBuy = document.getElementById('buy_product');

let options = {
    animation: true,
    delay: 3000
};

let toastError = new bootstrap.Toast(document.getElementById('errorToast'), options);

let orderModal = new bootstrap.Modal(document.getElementById('orderModal'))

const cities = ['Vinnitsa', 'Kropivnitsky', 'Poltava', 'Kharkiv', 'Dnepropetrovsk', 'Lugansk', 'Rivne', 'Kherson',
    'Donetsk', 'Lutsk', 'Simferopol', 'Khmelnitsky', 'Zhitomir', 'Lviv', 'Sumy', 'Cherkassy', 'Zaporizhzhya',
    'Nikolaev', 'Ternopil', 'Chernihiv', 'Ivano-Frankivsk', 'Odessa', 'Uzhgorod', 'Chernivtsi', 'Kiev'];

const form = document.getElementById('form');
form.addEventListener('submit', order);

document.addEventListener('DOMContentLoaded', createSelectElement);

window.onload = function(){
    fetch('https://dummyjson.com/products/categories/')
        .then(res => res.json())
        .then((json) => {
            let parentCategories = document.getElementById('parent_category');

            for (let category of json) {
                let td = document.createElement("a");

                td.className = 'list-group-item list-group-item-action';
                td.textContent = category;

                parentCategories.appendChild(td);
            }
        })
        .catch((error) => {
            toastError.show();
        })
};

parentCategory.addEventListener('click', function(event) {
    document.querySelectorAll('#parent_category .list-group-item-dark').forEach(item => item.classList.remove('list-group-item-dark'));
    event.target.classList.add('list-group-item-dark')

    fetch(`https://dummyjson.com/products/category/${event.target.text}`)
        .then(res => res.json())
        .then((json) => {
            let parentProduct = document.getElementById('parent_product');
            parentProduct.innerHTML = '';

            for (let product of json.products) {
                let td = document.createElement("a");

                td.className = 'list-group-item list-group-item-action';
                td.textContent = product.title;
                td.id = product.id;

                parentProduct.appendChild(td);
            }
        })
        .catch((error) => {
            toastError.show();
        })
});

parentProducts.addEventListener('click', function(event) {
    document.querySelectorAll('#parent_product .list-group-item-dark').forEach(item => item.classList.remove('list-group-item-dark'));
    event.target.classList.add('list-group-item-dark');

    document.getElementById('card').hidden = false;

    fetch(`https://dummyjson.com/products/${event.target.id}`)
        .then(res => res.json())
        .then((json) => {
            currentProduct = json.title;

            document.getElementById('card_img').src = json.thumbnail;
            document.getElementById('card_title').textContent = json.title;
            document.getElementById('card_text').textContent = json.description;
            document.getElementById('card_price').textContent = json.price + '$';
        })
        .catch((error) => {
            alert('Server error!');
            console.log(error);
        })
});

btnBuy.addEventListener('click', function(event) {
    orderModal.show();
});

function createSelectElement() {
    let select = document.getElementById('citySelect');

    cities.forEach(city => {
        let item = document.createElement('option');
        item.textContent = city;
        item.value = city;
        select.appendChild(item);
    });
}

function createNewOreder(){
    let info = {
        product: currentProduct,
        quantity: document.getElementById('quantityGoodsInput').value,
        Recipient: document.getElementById('inputName').value,
        city: document.getElementById('citySelect').value,
        warehouse: document.getElementById('warehouseNumberInput').value,
        payments: document.querySelector('input[type=radio][name=payMetod]:checked').value,
        commentary: document.getElementById('commentaryTextArea').value
    }

    orders.push(info);
}

function order(event) {
    event.preventDefault();

    createNewOreder();

    let table = document.getElementById('tableBody');

    let tr = document.createElement('tr');
    let th = document.createElement('th');

    th.scope = 'row'
    th.textContent = orders.length;
    tr.appendChild(th);

    for (let key in orders[orders.length - 1]) {
        let td = document.createElement('td');
        td.textContent = orders[orders.length - 1][key];
        tr.appendChild(td);
    }

    table.appendChild(tr);

    orderModal.hide();
    form.reset();
}
