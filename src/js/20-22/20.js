// ДЗ 20. Багатоквартирний будинок

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
