//возвращает минимальное, максимальное и среднее арифметическое значений массива
function getArrayParams(...arr) {
  let min = arr[0];
  let max = arr[0];
  let sum = arr[0];

  for(let i = 1; i < arr.length; i++){
    if(arr[i] < min){
      min = arr[i];
    }
    if(arr[i] > max){
      max = arr[i];
    }
    sum += arr[i];
  }
  let avg = +(sum / arr.length).toFixed(2);

  return { min: min, max: max, avg: avg };
}

//вычесление суммы элементов массива
function summElementsWorker(...arr) {
  if(arr[0] === undefined){
    return 0;
  }
  let sum = arr[0];
  for(let i=1; i < arr.length; i++){
    sum += arr[i];
  }
  return sum;
}

//вычисление разницы максимального и минимального элементов
function differenceMaxMinWorker(...arr) {
  if(arr[0] === undefined){
    return 0;
  }
  let max = Math.max(...arr);
  let min = Math.min(...arr);
  return max - min;
}

//вычисление разницы сумм чётных (even) и нечётных (odd) элементов
function differenceEvenOddWorker(...arr) {
  if(arr[0] === undefined){
    return 0;
  }
  let sumEvenElement = 0;
  let sumOddElement = 0;
  for(let i = 0; i < arr.length; i++){
    if(arr[i]%2 === 0){
      sumEvenElement += arr[i];
    }else{
      sumOddElement += arr[i];
    }
  }
  return sumEvenElement - sumOddElement;
}

//вычисление среднего значения чётных элементов
function averageEvenElementsWorker(...arr) {
  if(arr[0] === undefined){
    return 0;
  }
  let sumEvenElement = 0;
  let countEvenElement = 0;
  for(let i = 0; i < arr.length; i++){
    if(arr[i]%2 === 0){
      sumEvenElement += arr[i];
      countEvenElement++;
    }
  }
  return sumEvenElement / countEvenElement;
}

//из массива данных и насадки будет возвращать максимальный результат функции насадки
function makeWork (arrOfArr, func) {
  let maxWorkerResult = -Infinity;
  for(let i = 0; i < arrOfArr.length; i++){
    let result = func(...arrOfArr[i]);
    if(result > maxWorkerResult){
      maxWorkerResult = result;
    }
  }
  return maxWorkerResult
}
