'use strict'

//Реализовать классы Автор и его Работы.
//Каждому прописать необходимые поля. Используя статические поля (методы) подсчитать количество работ и авторов. Продумать методы вывода информации об авторе и работе (по отдельности)
//2* продумать реализацию классов для вывода работ по конкретному автору и количество работ его (т. Е. Подпишите, свяжите данные классы друг на друга)

class Author {
  static counter = 0
  constructor(name, surname) {
    ;(this.name = name), (this.surname = surname), Author.counter++
  }
  getFullName() {
    return `${this.name} ${this.surname}`
  }
  static getCounter() {
    return `Количество срабатываний класса Author = ${this.counter}`
  }
}

class Works extends Author {
  static counterWorks = 0
  constructor(
    name,
    surname,
    title,
    the_year_of_publishing,
    publishing_house,
    number_of_pages,
    edition,
  ) {
    super(name, surname)
    ;(this.title = title),
      (this.the_year_of_publishing = the_year_of_publishing),
      (this.publishing_house = publishing_house),
      (this.number_of_pages = number_of_pages),
      (this.edition = edition)
    Works.counterWorks++
  }

  getBookInfo() {
    return `\nЗаглавие: ${this.title} \nГод издания: ${this.the_year_of_publishing} \nИздательство: ${this.publishing_house} \nКоличество страниц: ${this.number_of_pages} \nТираж: ${this.edition}`
  }

  static getCounterWorks() {
    return `Количество срабатываний класса Works = ${this.counterWorks}`
  }
}

let book1 = new Works(
  'Рей',
  'Брэдбери',
  'Человек в картинках',
  1951,
  'Каро',
  352,
  500,
)

let book2 = new Works(
  'Рей',
  'Брэдбери',
  'Вино из одуванчиков',
  1957,
  'Форс',
  352,
  700,
)

let book3 = new Works(
  'Рей',
  'Брэдбери',
  '451° за Фаренгейтом',
  1953,
  'Форс',
  192,
  600,
)

console.log(book1.getFullName())
console.log(book2.getBookInfo())
console.log(Author.getCounter())
console.log(Works.getCounterWorks())
