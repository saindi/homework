class Student {
    attendance = new Array(25);

    constructor(firstName, lastName, yearBirth, estimates) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.yearBirth = yearBirth;
        this.estimates = estimates;
    }

    getAge() {
        let today = new Date(); // Mon Nov 23 2020 15:23:46 GMT+0300 (Москва, стандартное время)

        return today.getFullYear() - this.yearBirth;
    }

    getAverageScore() {
        let sum = 0;

        for (const evaluation of this.estimates) {
            sum += evaluation;
        }

        return sum / this.estimates.length;
    }

    getAverageVisit() {
        let countVisit = 0;

        for (let lesson of  this.attendance) {
            if (lesson === true)
                countVisit += 1;
        }

        return countVisit / (this.attendance.length - this._getCountLessonUndefined())
    }


    present() {
        let countUndefined = this._getCountLessonUndefined();

        if (countUndefined === 0) {
            console.log('Усі заняття пройдені!')
            return;
        }

        for (let i = 0; i < this.attendance.length; i++) {
            if (this.attendance[i] === undefined) {
                this.attendance[i] = true;
                break;
            }
        }
    }

    absent() {
        let countUndefined = this._getCountLessonUndefined();

        if (countUndefined === 0) {
            console.log('Усі заняття пройдені!')
            return;
        }

        for (let i = 0; i < this.attendance.length; i++) {
            if (this.attendance[i] === undefined) {
                this.attendance[i] = false;
                break;
            }
        }
    }

    _getCountLessonUndefined() {
        let countUndefined = 0;

        for (let item of this.attendance) {
            if (item === undefined)
                countUndefined += 1
        }

        return countUndefined;
    }

    summary() {
        let averageScore = this.getAverageScore()
        let averageVisit = this.getAverageVisit()

        if (averageScore > 90 && averageVisit > 0.9)
            return 'Молодець!'
        else if (averageScore > 90 || averageVisit > 0.9)
            return 'Добре, але можна краще'
        else
            return 'Редиска!'
    }
}


let student1 = new Student('Dima', 'Hulid', 2001, [99, 95, 100, 85, 100])
console.log(`\nВік студента: ${student1.getAge()}`)
console.log(`Cередній бал: ${student1.getAverageScore()}`)
student1.present()
student1.present()
student1.present()
student1.present()
student1.present()
student1.present()
student1.present()
student1.present()
student1.absent()
console.log(student1.summary())



let student2 = new Student('Sasha', 'Shevchenko', 1995, [100, 85, 92, 84])
console.log(`\nВік студента: ${student2.getAge()}`)
console.log(`Cередній бал: ${student2.getAverageScore()}`)
student2.present()
student2.present()
console.log(student2.summary())


let student3 = new Student('Inna', 'Kirichenko', 2002, [60, 65, 75, 85, 65, 67])
console.log(`\nВік студента: ${student3.getAge()}`)
console.log(`Cередній бал: ${student3.getAverageScore()}`)
student3.present()
student3.absent()
student3.absent()
student3.absent()
console.log(student3.summary())
