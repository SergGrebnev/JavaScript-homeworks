// Программа-будильник

class AlarmClock{
    constructor(){
        this.alarmCollection = []; // свойство для хранения коллекции звонков
        this.intervalId = null; // свойство для хранения id таймера
    }

    // добавляет новый звонок в коллекцию существующих
    // time - параметр времени в формате HH:MM — время, когда действие должно запуститься
    // callback - параметр функции-коллбека — действие, которое должно запуститься
    addClock(time, callback){ 
        if(time === null || callback === undefined){ // переданы ли параметры времени и коллбека
            throw new Error('Отсутствуют обязательные аргументы');
        }
        if((this.alarmCollection.findIndex(alarm => alarm.time === time) >= 0)){ // есть ли звонок с таким же временем
            console.warn('Уже присутствует звонок на это же время');
        }
        this.alarmCollection.push({callback, time, canCall: true});
    }

    // удаляет звонки по определённому времени
    removeClock(time){
        this.alarmCollection = this.alarmCollection.filter(alarm => alarm.time != time);
    }

    // возвращает текущее время в строковом формате HH:MM
    getCurrentFormattedTime(){
        return new Date().toLocaleTimeString("ru-Ru", {
            hour: "2-digit",
            minute: "2-digit",
          });
    }

    // запускает будильник
    start(){
        if(this.intervalId != null){ // Программа не должна позволять создавать несколько интервалов
            return
        }
        function alarmSearch(){ // ф-ция выполняемая в каждом интервале
            this.alarmCollection.forEach(alarm => { // Перебираем все звонки
                if(alarm.time === this.getCurrentFormattedTime() && alarm.canCall === true){ // возможность запуска звонка: свойство time совпадает с текущим временем, и звонок может выполняться (в свойстве canCall находится true)
                    alarm.canCall = false;
                    alarm.callback(); // вызываем коллбек звонка
                }
            });
        }
        // создаём интервал и сохраняем его ID
        this.intervalId = setInterval(alarmSearch.bind(this), 1000); // функция alarmSearch вызывается с привязкой к контексту

    }

    // останавливает выполнение интервала будильника
    stop(){
        clearInterval(this.intervalId);
        this.intervalId = null;
    }

    // сбрасывает возможность запуска всех звонков
    resetAllCalls(){
        this.alarmCollection.forEach(alarm => alarm.canCall = true);
    }

    // удаляет все звонки
    clearAlarms(){
        this.stop(); // Вызывает метод остановки интервала
        this.alarmCollection = []; // Удаляет все звонки
    }
}

