Попробуй сделать так, чтобы класс сам знал каких студентов он создал, без явного объявления массива студентов let students = [
    new Student('Влад', 20, 94),
    new Student('Миша', 20, 67),
    new Student('Петя', 22, 78),
];



За вложенный тернарный оператор лайк, но поробуй пойти от высшего к меньшему и избавишься от лишних условий
((this.average >= 60) && (this.average < 75)) ? 'Троечник':
        ((this.average >= 75) && (this.average < 90)) ? 'Хорошист':
        (this.average >= 90) ? 'Отличник':
        'Средний балл слишком низок :('; 


Попробуй сделать фильтрацию через filter JS
    static filterByScore = (score, students) => {
        let list = [];
        for (let s of students) {
            if (s.average > score) list.push(s);
        }
        return list;
    }


