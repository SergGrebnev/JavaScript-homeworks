class Student{
    constructor(name, gender, age){
        this.name = name;
        this.gender = gender;
        this.age = age;  
        this.marks = {};
    }

    // Метод добавляет оценку по предмету
    addMark(mark, lesson){
        if(mark >= 2 && mark <=5){
            if(!this.marks.hasOwnProperty(lesson)){ // Проверка наличия свойства lesson (предмета) в marks
                this.marks[lesson] = [];
            }
            this.marks[lesson].push(mark);
        }

    }

    // Метод возвращает среднюю оценку по одному предмету
    getAverageBySubject(lesson){        
        if(!this.marks.hasOwnProperty(lesson)){ // Проверка наличия свойства lesson (предмета) в marks
            return 0;
        }
        return this.marks[lesson].reduce((acc, item, index, arr) => acc + item / arr.length, 0); // вычисление среднего
        
    }

    // Метод возвращает среднюю оценку по всем предметам
    getAverage(){        
        return Object.keys(this.marks).reduce((acc, item, index, arr) => 
            acc + this.getAverageBySubject(item) / arr.length, 0); // вычисление среднего
    }
}
