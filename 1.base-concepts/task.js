"use strict"

// функция для вычисления корней квадратного уравнения (ax² + bx + c = 0)
function solveEquation(a, b, c) {
  let arr = [];
  let discriminant = b**2 - 4 * a * c; // ** - возведение в степень
  if (discriminant === 0){
    arr.push(-b / (2 * a));
  }else if(discriminant > 0){
    arr.push((-b + Math.sqrt(discriminant)) / (2 * a));
    arr.push((-b - Math.sqrt(discriminant)) / (2 * a));
  }
  
  return arr;
}


//калькулятор для расчёта выплат по ипотеке
//percent - процентная ставка
//contribution - сумма первоначального взноса
//amount - сумму кредита
//countMonths - срок (длительность кредита в месяцах)
function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  let percentMonth = percent / 1200; //месячная процентная ставка в диапазоне от 0 до 1
  let creditBody = amount - contribution; //тело кредита

  //Платёж = S * (P + (P / (((1 + P)^n) - 1))), 
  //где: S — тело кредита, P — 1/12 процентной ставки (от 0 до 1), n — количество месяцев
  let payment = creditBody * (percentMonth + (percentMonth/(((1 + percentMonth)**countMonths) - 1)));
  let totalAmount = parseFloat((payment * countMonths).toFixed(2));
  return totalAmount;
  
}