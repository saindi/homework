// 1. Створити клас Людина.
// Властивості: імʼя; cтать.
// Методи: конструктор, який приймає два параметри: імʼя та стать.
//
// 2. Створити клас Квартира.
// Властивості: конструктор не потрібен; масив жителів, який при створенні пустий.
// Методи: додати жителя - метод повинен приймати екземпляр класу Людина, та додавати до масиву жителів.
//
// 3. Створити клас Будинок.
// Властивості: масив квартир, який при створенні пустий; максимальна кількість квартир.
// Методи:
// конструктор, який приймає один параметр: максимальну кількість квартир;
// додати квартиру - метод повинен приймати екземпляр класу Квартира, перевіряти, чи не буде кількість перевищувати максимальну кількість квартир, і якщо це так, додати квартиру, в іншому випадку виводить у консоль відповідне повідомлення.
//
// В якості демонстраціїї створити: декілька екземплярів класу Людина; декілька екземплярів класу Квартира; додадити
// екземпляри класу Людина до екземплярів класу Квартира; екземпляр класу Будинок; додадити екземпляри класу Квартира
// до екземплярів класу Будинок.

class Person {
    constructor(name, gender) {
        this.name = name;
        this.gender = gender;
    }
}

class Apartment {
    residents = [];

   addResidents(human) {
       if (this.residents.includes(human))
           throw new Error('Object already lives in this apartment');
       else if (human instanceof Person)
           this.residents.push(human);
       else
           throw new Error('Object not instance of Human');
   }
}

class House {
    apartments = [];

    constructor(maxApartments) {
        this.maxApartments = maxApartments;
    }

    addApartment(apartment) {
        if (this.apartments.includes(apartment))
            throw new Error('Object is already in this house');
        else if (this.apartments.length === this.maxApartments)
            console.log(`Limit of ${this.maxApartments} apartments has been reached`);
        else if (apartment instanceof Apartment)
            this.apartments.push(apartment);
        else
            throw new Error('Object not instance of Apartment');
    }
}


let person1 = new Person('Dima', 'man');
let person2 = new Person('Sasha', 'man');
let person3 = new Person('Nastya', 'woman');
let person4 = new Person('Kolya', 'man');
let person5 = new Person('Katya', 'woman');
let person6 = new Person('Lisa', 'woman');


let apartment1 = new Apartment();
apartment1.addResidents(person1);
apartment1.addResidents(person2);
apartment1.addResidents(person3);

let apartment2 = new Apartment();
apartment2.addResidents(person4);
apartment2.addResidents(person5);

let apartment3 = new Apartment();
apartment3.addResidents(person6);


let house = new House(2);
house.addApartment(apartment1);
house.addApartment(apartment2);
house.addApartment(apartment3);
