//Задача № 1
function cachingDecoratorNew(func) {
    let cache = [];

function wrapper(...args) {
    const hash = md5(args); // получаем правильный хеш c помощью функции md5
    let objectInCache = cache.find((item) => item.hash === hash); // ищем элемент, хеш которого равен нашему хешу
    if (objectInCache) { // если элемент найден
        console.log("Из кеша: " + objectInCache.value); // индекс нам известен, по индексу в массиве лежит объект, как получить нужное значение?
        return "Из кеша: " + objectInCache.value;
    }

    let result = func(...args); // в кеше результата нет — придётся считать
    cache.push({hash: md5(args), value: result}) ; // добавляем элемент с правильной структурой
    if (cache.length > 5) { 
        cache.shift(); // если слишком много элементов в кеше, надо удалить самый старый (первый) 
    }
    console.log("Вычисляем: " + result);
    return "Вычисляем: " + result;  
}
return wrapper;
}

//Задача № 2
function debounceDecoratorNew(func, delay) {
    let timeoutId = null; // начальное значение таймаута
    function wrapper(...args){
        wrapper.allCount ++; // количество вызовов декоратора

        if(timeoutId){ //если таймаут существует, то удаляем его
            clearTimeout(timeoutId);
        }else{ // Первый вызов происходит моментально
            func(...args);
            wrapper.count ++; // количество вызовов декорированной функции
        }
        
        timeoutId = setTimeout(() => { //последующие вызовы через интервал
            func(...args);
            wrapper.count ++; // количество вызовов декорированной функции
        }, delay);
    }
    wrapper.count = 0; // количество вызовов декорированной функции
    wrapper.allCount = 0; // количество вызовов декоратора
    return wrapper;
  
}
