/*
    1.Модифікувати інтернет-магазин таким чином, щоб була можливість переглянути всі збережені замовлення навіть після
    оновлення сторінки (використовувати localStorage).
    2. На сторінці спочатку крім списку категорій відображається також кнопка “мої замовлення”.
    3. При кліку на “мої замовлення” - пропадають категорії та відображається список усіх замовлень користувача
    (дата та ціна) - при кліку на замовлення - “розгортаються” деталі замовлення.
    4. Реалізувати можливість видалення замовлення зі списку.
*/
let orders = [];
let currentProduct = {};
let currentIdOrder;

const parentCategory = document.getElementById('parent_category');
const parentProducts = document.getElementById('parent_product');
const parentOrders = document.getElementById('parent_orders');
const btnBuy = document.getElementById('buy_product');

const storeHTML = document.getElementById('store');
const ordersHTML = document.getElementById('orders');
const navHome = document.getElementById('navHome');
const navOrders = document.getElementById('navOrders');

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

document.addEventListener('DOMContentLoaded', ()=>{
    createSelectElement();
    getOrdersFromStorage();
});

function createSelectElement(){
    let select = document.getElementById('citySelect');

    cities.forEach(city => {
        let item = document.createElement('option');
        item.textContent = city;
        item.value = city;
        select.appendChild(item);
    });
}

function getOrdersFromStorage() {
    let parent_orders = document.getElementById('parent_orders');
    parent_orders.innerHTML = ''

    orders = JSON.parse(localStorage.getItem('orders'));

    if (orders){
        for (let order of orders) {
            let a = document.createElement('a');

            a.className = 'list-group-item list-group-item-action';

            a.id = orders.indexOf(order);
            a.textContent = `${order.date}, ${order.price * order.quantity} $`;

            parent_orders.appendChild(a);
        }
    } else {
        orders = []
    }

}

function setOrdersToStorage() {
    localStorage.setItem('orders', JSON.stringify(orders));
}

function createNewOreder(){
    let time = new Date()

    let info = {
        product: currentProduct.name,
        quantity: document.getElementById('quantityGoodsInput').value,
        Recipient: document.getElementById('inputName').value,
        city: document.getElementById('citySelect').value,
        warehouse: document.getElementById('warehouseNumberInput').value,
        payments: document.querySelector('input[type=radio][name=payMetod]:checked').value,
        commentary: document.getElementById('commentaryTextArea').value,
        date: time.toLocaleString(),
        price: currentProduct.price
    }

    orders.push(info);
}

function order(event) {
    let ordersHTML = document.getElementById('parent_orders');
    let a = document.createElement('a');

    event.preventDefault();

    createNewOreder();

    a.className = 'list-group-item list-group-item-action';

    a.id = orders.length - 1;
    a.textContent = `${orders[orders.length - 1].date} ${orders[orders.length - 1].price * orders[orders.length - 1].quantity} $`;

    ordersHTML.appendChild(a);

    orderModal.hide();
    form.reset();

    setOrdersToStorage();
}

function changeActiveNav() {
    navHome.classList.toggle('active');
    navOrders.classList.toggle('active');
}

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
            currentProduct['name'] = json.title;
            currentProduct['price'] = json.price;

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

navHome.addEventListener('click', function (){
    changeActiveNav();
    storeHTML.hidden = false;
    ordersHTML.hidden = true;

});

navOrders.addEventListener('click', function (){
    changeActiveNav();
    storeHTML.hidden = true;
    ordersHTML.hidden = false;
});

parentOrders.addEventListener('click', function (event){
    let order = orders[event.target.id];
    currentIdOrder = event.target.id;

    document.getElementById('detailed').hidden = false;

    document.getElementById('detailedNumber').textContent = currentIdOrder;
    document.getElementById('detailedProduct').textContent = order.product;
    document.getElementById('detailedQuantity').textContent = order.quantity;
    document.getElementById('detailedRecipient').textContent = order.Recipient;
    document.getElementById('detailedCity').textContent = order.city;
    document.getElementById('detailedWarehouse').textContent = order.warehouse;
    document.getElementById('detailedPayments').textContent = order.payments;
    document.getElementById('detailedCommentary').textContent = order.commentary;
});

document.getElementById('deleteOrder').addEventListener('click', function () {
    orders.splice(currentIdOrder, 1);
    setOrdersToStorage();
    getOrdersFromStorage();
});