class Student {
    name;
    age;
    average;
    static maxAverage; // статическое поле "Макисмальный средний балл"
    static objects = [];

    constructor (name, age, average) {
        this.name = name;
        this.age = age;
        this.average = average;
        Student.objects.push(this);
    }

    // Увеличение возраста при каждом вызове
    iterAge = () => {
        this.age += 1;
        console.log('Age now: ', this.age);
    }

    // Увеличение среднего балла на определенынй балл
    incAverage = (score) => {
        this.average += score;
        console.log('Average score now: ', this.average);
    }

    // Статический метод "Получение максимального среднего балла"
    static getMaxAverage = () => {
        let maxA = 0;
        for (let s of this.objects) {
            s.average > maxA ? maxA = s.average : maxA = maxA;
        }
        this.maxAverage = maxA;
    }

    // Метод для получения статуса относительного среднего балла студента
    getStatus = () => {
        let status = 'Отличник';
        if (this.average >= 90) return console.log(this.name, ' - Отличник');
        if (this.average >= 75) return console.log(this.name, ' - Хорошист');
        if (this.average >= 60) return console.log(this.name, ' - Троечник');
    }

    // Статический метод для получения списка студентов, среднйи балл которых выше определенного
    static filterByScore = (score) => {
        return this.objects.filter(student => student.average > score);
    }

    // Метод для вывода информации о студенте чисто для удобства
    print = () => {
        console.log('Name: ', this.name);
        console.log('Age: ', this.age);
        console.log('Average score: ', this.average);
    }
}

let Vlad = new Student('Влад', 20, 94);
let Misha = new Student('Миша', 20, 54);
let Petya = new Student('Петя', 22, 78);
let Kolya = new Student('Коля', 22, 66);

for (let s of Student.objects) s.print();

Student.getMaxAverage();
console.log('Максимальный балл среди всех студентов: ', Student.maxAverage);

let score = 70;
filterByAny = Student.filterByScore(score);

for (let s of filterByAny) s.print();

Vlad.getStatus();
Misha.getStatus();
Petya.getStatus();
Kolya.getStatus();