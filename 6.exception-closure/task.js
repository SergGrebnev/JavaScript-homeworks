function parseCount(str){
    let number = Number.parseFloat(str);
    if(Number.isNaN(number)){
        throw new Error('Невалидное значение'); // выбрасывается ошибка
    }else{
        return number;
    }
}

function validateCount(str){
    try{return parseCount(str)} // проверка на выполнение с ошибкой
    catch(error){return error} // возвращает ошибку
}

class Triangle{
    constructor(a, b, c){
        if(a + b < c || b + c < a || c + a < b){
            throw new Error('Треугольник с такими сторонами не существует');
        }
        this.a = a;
        this.b = b;
        this.c = c;
    }
    // периметр треугольника
    get perimeter(){
        return this.a + this.b + this.c;
    }

    // площадь треугольника
    get area(){
        let p = this.perimeter / 2;
        return +(Math.sqrt(p * (p - this.a) * (p - this.b) * (p - this.c))).toFixed(3); // формула Герона
    }
}

function getTriangle(a, b, c){
    try{return new Triangle(a, b, c)} // проверка на выполнение с ошибкой
    catch{
        return new class{ // возвращает объект со свойствами защищёнными от исправления
            _perimeter = 'Ошибка! Треугольник не существует';
            _area = 'Ошибка! Треугольник не существует';
            get perimeter(){
                return this._perimeter;
            }
            get area(){
                return this._area;
            }
        }
    }
}