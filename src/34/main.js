/*
    Дано 3 блоки
    1. В лівій частині сторінки - перелік категорій.
    2. При натисканні на категорію в середній блок виводиться список товарів цієї категорії.
    3. Клік на товар - інформацію про товар у правому блоці.
    4. В інформації товару - кнопка “купити”.
    5. При натисканні на “купити” з'являється повідомлення, що товар куплений і повернення у вихідний стан програми
    (коли відображається лише список категорій).
*/

const parentCategory = document.getElementById('parent_category');
const parentProducts = document.getElementById('parent_product');
const btnBuy = document.getElementById('buy_product');

let options = {
    animation: true,
    delay: 3000
};

let toastSuccess = new bootstrap.Toast(document.getElementById('successToast'), options);
let toastError = new bootstrap.Toast(document.getElementById('errorToast'), options);


window.onload = function() {
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
    toastSuccess.show();

    setTimeout(function() {
        location.reload();
    }, 3000);
});
