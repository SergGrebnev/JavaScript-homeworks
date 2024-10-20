function Student(name, gender, age) {
    this.name = name;
    this.gender = gender;
    this.age = age;  
    this.marks = [];
}

let student1 = new Student("Василиса", "женский", 19);
let student2 = new Student("Артём", "мужской", 25);
let student3 = new Student("Алексей", "мужской", 21);
let student4 = new Student("Дмитрий", "мужской", 21);
let student5 = new Student("Анна", "женский", 22);


Student.prototype.setSubject = function (subjectName) {
  this.subject = subjectName;
}

Student.prototype.addMarks = function (...marks) {
    if(this.marks !== undefined){
        this.marks.push(...marks);
    }
  
}

Student.prototype.getAverage = function () {
    if(this.marks === undefined || this.marks.length === 0){
        return 0;
    } else {
        return this.marks.reduce((acc, item, i, arr) => acc + item / arr.length, 0);
    }
  
}

Student.prototype.exclude = function (reason) {
    delete this.subject;
    delete this.marks;
    this.excluded = reason;
  
}
