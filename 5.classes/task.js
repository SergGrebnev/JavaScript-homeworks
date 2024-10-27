// Класс печатного издания
// name - название,
// releaseDate - дата выпуска,
// pagesCount - количество страниц,
// state - состояние,
// type - тип 

class PrintEditionItem {
    constructor (name, releaseDate, pagesCount){
        this.name = name;
        this.releaseDate = releaseDate;
        this.pagesCount = pagesCount;
        this._state = 100;
        this.type = null;
    }

    //Метод улучшения состояния книги
    fix(){
        if(this._state > 0){
            this.state = this._state * 1.5;
        }
    }

    //«сеттер» для свойства state - состояние
    set state(newState){
        if(newState < 0){
            this._state = 0;
        }else if(newState > 100){
            this._state = 100;
        }else{
            this._state = newState;
        }
    }

    //«геттер», который позволит читать значение свойства state - состояние
    get state(){
        return this._state;
    }
}

// класс Magazine, который наследует от класса PrintEditionItem
class Magazine extends PrintEditionItem{
    constructor (name, releaseDate, pagesCount){
        super (name, releaseDate, pagesCount);
        this.type = "magazine";
    }
}

// класс Book, который наследует от класса PrintEditionItem
class Book extends PrintEditionItem{
    constructor (author, name, releaseDate, pagesCount){
        super (name, releaseDate, pagesCount);
        this.author = author;
        this.type = "book";
    }
}

// класс NovelBook — для романов, который наследует от класса Book
class NovelBook extends Book{
    constructor (author, name, releaseDate, pagesCount){
        super (name, releaseDate, pagesCount);
        this.author = author;
        this.type = "novel";
    }
}

// класс FantasticBook — для фантастических произведений, который наследует от класса Book
class FantasticBook extends Book{
    constructor (author, name, releaseDate, pagesCount){
        super (name, releaseDate, pagesCount);
        this.author = author;
        this.type = "fantastic";
    }
}

// класс DetectiveBook — для детективов, который наследует от класса Book
class DetectiveBook extends Book{
    constructor (author, name, releaseDate, pagesCount){
        super (name, releaseDate, pagesCount);
        this.author = author;
        this.type = "detective";
    }
}

class Library{
    constructor (name){
        this.name = name;
        this.books = [];
    }

    //Метод добавляет книгу в хранилище books, только если состояние state книги больше 30
    addBook(book){
        if(book.state > 30){
            this.books.push(book);
            
        }

    }

    //Метод поиска книги по ключу и его значению
    findBookBy(type, value){
        let index = this.books.findIndex(bookSearch => bookSearch[type] === value); // поиск книги с заданным параметром в массиве books
        if(index === -1){
            return null;
        }else{
            return this.books[index];
        }
    }

    //метод удаляет книгу из хранилища books и возвращать её
    giveBookByName(bookName){
        let index = this.books.findIndex(bookSearch => bookSearch.name === bookName); // поиск книги с заданным именем в массиве books
        if(index === -1){
            return null;
        }else{
            let [res] = this.books.splice(index, 1); // деструктуризация массива вазвращённого ф-цией splice()
            return res;
        }
    }
}