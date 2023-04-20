// ДЗ 21. Створюємо сутності

class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    getInfo () {
        console.log(`name: ${this.name}, age: ${this.age}`)
    }
}

class Car {
    owner;

    constructor(brand, model, year, licensePlate) {
        this.brand = brand;
        this.model = model;
        this.year = year;
        this.licensePlate = licensePlate;
    }

    setOwner (person) {
        if (person.age >= 18)
            this.owner = person;
        else
            throw new Error('Age person less 18');
    }

    getInfo () {
        console.log(`brand: ${this.brand}, model: ${this.model}, year: ${this.year}, licensePlate: ${this.licensePlate}`)

        this.owner.getInfo()
    }
}

let person1 = new Person('Dima', 22);
let person2 = new Person('Sasha', 17);

let car1 = new Car('BMW', 'X6', 2006, 'BH8777HH');
car1.setOwner(person1);
car1.getInfo();

let car2 = new Car('Audi', 'A6', 2000, 'AA9213BP');
car2.setOwner(person2);
car2.getInfo();
