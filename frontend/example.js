class Student {
    name;
    age;
    average;
    static maxAverage; // статическое поле "Макисмальный средний балл"

    constructor (name, age, average) {
        this.name = name;
        this.age = age;
        this.average = average;
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
    static getMaxAverage = (students) => {
        let maxA = 0;
        for (let s of students) {
            s.average > maxA ? maxA = s.average : maxA = maxA;
        }
        this.maxAverage = maxA;
    }

    // Метод для получения статуса относительного среднего балла студента
    getStatus = () => {
        let status = ((this.average >= 60) && (this.average < 75)) ? 'Троечник':
        ((this.average >= 75) && (this.average < 90)) ? 'Хорошист':
        (this.average >= 90) ? 'Отличник':
        'Средний балл слишком низок :('; 

        return status;
    }

    // Статический метод для получения списка студентов, среднйи балл которых выше определенного
    static filterByScore = (score, students) => {
        let list = [];
        for (let s of students) {
            if (s.average > score) list.push(s);
        }
        return list;
    }

    // Метод для вывода информации о студенте чисто для удобства
    print = () => {
        console.log('Name: ', this.name);
        console.log('Age: ', this.age);
        console.log('Average score: ', this.average);
    }
}

let students = [
    new Student('Влад', 20, 94),
    new Student('Миша', 20, 67),
    new Student('Петя', 22, 78),
];

for (let s of students) s.print();

Student.getMaxAverage(students);
console.log('Максимальный балл среди всех студентов: ', Student.maxAverage);

let score = 70;
filterBy70 = Student.filterByScore(score, students);

for (let s of filterBy70) s.print();