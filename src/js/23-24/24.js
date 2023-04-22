// Мережа фастфудів пропонує кілька видів гамбургерів:
// 1. маленький (50 тугриків, 20 калорій);
// 2. великий (100 тугриків, 40 калорій).
//
// Гамбургер може бути з одним із декількох видів начинок:
// 1. сиром (+ 10 тугриків, + 20 калорій);
// 2. салатом (+ 20 тугриків, + 5 калорій);
// 3. картоплею (+ 15 тугриків, + 10 калорій).
//
// Можна додати добавки:
// посипати приправою (+15 тугриків, 0 калорій) - полити майонезом (+ 20 тугриків, +5 калорій).
//
// Напишіть програму, яка розраховує вартість та калорійність гамбургера. Використовуйте ООП підхід.
//
// (підказка: потрібен клас Гамбургер, константи, методи для вибору опцій та розрахунку потрібних величин)

class Hamburger {
    static SIZE_SMALL = {
        price: 50,
        caloric: 20
    }

    static SIZE_BIG = {
        price: 100,
        caloric: 40
    }

    static STUFFING_CHEESE= {
        price: 10,
        caloric: 20
    }

    static STUFFING_SALAD= {
        price: 20,
        caloric: 5
    }

    static STUFFING_POTATO= {
        price: 15,
        caloric: 10
    }

    static TOPPING_MAYO= {
        price: 20,
        caloric: 5
    }

    static TOPPING_SAUCE= {
        price: 15,
        caloric: 0
    }

    _topping = [];

    constructor(size, stuffing) {
        this.size = size;
        this.stuffing = stuffing;
    }

    addTopping(...elements) {
        for (let element of elements) {
            this._topping.push(element)
        }
    }

    calculateCalories(){
        let calories = this.size.caloric + this.stuffing.caloric;

        for (let toppingElement of this._topping) {
            calories += toppingElement.caloric;
        }

        return calories;
    }

    calculatePrice(){
        let price = this.size.price + this.stuffing.price;

        for (let toppingElement of this._topping) {
            price += toppingElement.price;
        }

        return price;
    }
}


// маленький гамбургер з начинкою з сиру
let hamburger = new Hamburger(Hamburger.SIZE_SMALL, Hamburger.STUFFING_CHEESE);

// добавка з майонезу x2
hamburger.addTopping(Hamburger.TOPPING_MAYO, Hamburger.TOPPING_MAYO);

// запитаємо скільки там калорій
console.log("Calories: " + hamburger.calculateCalories());

// скільки коштує
console.log("Price: " + hamburger.calculatePrice());

// я тут передумав і вирішив додати ще приправу
hamburger.addTopping(Hamburger.TOPPING_SAUCE);

// А скільки тепер коштує?
console.log("Price with sauce: " + hamburger.calculatePrice());
