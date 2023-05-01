import BookCollection from './modules/book-collection.js';
import {
  onlyDisplayBook,
  onlyDisplayContact,
  onlyDisplayInputBook,
} from './modules/single-page-app.js';

import { DateTime } from './modules/luxon.js';

const bookCollection = new BookCollection();
bookCollection.displayBooks();

const addBookForm = document.getElementById('add-book-form');
addBookForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const titleInput = document.getElementById('title-input');
  const authorInput = document.getElementById('author-input');
  const id = bookCollection.count;
  bookCollection.addBook(titleInput.value, authorInput.value, id);
  titleInput.value = '';
  authorInput.value = '';
});

// event listener for remove book button click
document.addEventListener('click', (e) => {
  const target = e.target.closest('.remove-book-button');
  if (target) {
    const { id } = target.parentNode.parentNode;
    bookCollection.removeBook(id);
  }
});

// SPA
const list = document.querySelector('.list');
const add = document.querySelector('.add');
const contact = document.querySelector('.contact');

list.addEventListener('click', onlyDisplayBook);
add.addEventListener('click', onlyDisplayInputBook);
contact.addEventListener('click', onlyDisplayContact);

// Luxon
const datetime = document.querySelector('.datetime');
const date = DateTime.now();
datetime.textContent = date.toLocaleString(DateTime.DATETIME_MED);
