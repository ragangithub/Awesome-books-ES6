import Book from "./book.js";

export default class BookCollection {
  constructor() {
    this.books = JSON.parse(localStorage.getItem("books")) || [];
    if (this.books.length === 0) {
      this.count = 0;
    } else {
      this.count = this.books.slice(-1)[0].id + 1;
    }
  }

  addBook = (title, author, id) => {
    const newBook = new Book(title, author, id);

    this.books.push(newBook);
    localStorage.setItem("books", JSON.stringify(this.books)); // save updated collection to localStorage
    this.displayBooks();
    this.count += 1;
  };

  removeBook = (id) => {
    this.books = this.books.filter((book) => book.id !== parseInt(id, 10));
    localStorage.setItem("books", JSON.stringify(this.books)); // save updated collection to localStorage
    this.displayBooks();
  };

  displayBooks = () => {
    const bookList = document.querySelector("ul");

    bookList.innerHTML = "";
    this.books.forEach((book) => {
      const contain = document.createElement("li");
      contain.id = book.id;
      contain.innerHTML = `
           <div class='check'>
          <p>"${book.title}" by ${book.author}</p>
          <button class='remove-book-button'>Remove</button>
          </div>
          
          `;

      bookList.appendChild(contain);
    });
  };
}
