console.log("This is from the class file");

class Library {
  constructor(name) {
    this.name = name; //Assigns a name to the libuary
    this.books = [];
  }

  addBook(book) {
    this.books.push(book);
  }

  listBook() {
    return this.books;
  }
}

const myLibrary = new Library("Central Library");
myLibrary.addBook("Javascript Essentials");
myLibrary.addBook("Intro to HTML");
console.log(myLibrary.listBook());

//Inheritance
class Ebook extends Library {
  constructor(name, format) {
    super(name), (this.format = format);
  }

  getFormat() {
    return this.format;
  }
}

const myEbook = new Ebook("Digital Library", "PDF");
myEbook.addBook("E-Javascript");
console.log(myEbook.listBook());
console.log(myEbook.getFormat());
