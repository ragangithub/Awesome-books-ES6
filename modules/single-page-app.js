const showBook = document.querySelector('.show-book');
const addBook = document.querySelector('.add-book');
const contactSection = document.querySelector('#contact-section');
const list = document.querySelector('.list');
const add = document.querySelector('.add');
const contact = document.querySelector('.contact');

const onlyDisplayBook = (e) => {
  e.preventDefault();
  list.classList.add('active');
  contact.classList.remove('active');
  add.classList.remove('active');
  showBook.style.display = 'block';
  addBook.style.display = 'none';
  contactSection.style.display = 'none';
};

const onlyDisplayInputBook = (e) => {
  e.preventDefault();
  add.classList.add('active');
  contact.classList.remove('active');
  list.classList.remove('active');
  showBook.style.display = 'none';
  contactSection.style.display = 'none';
  addBook.style.display = 'block';
};

const onlyDisplayContact = (e) => {
  e.preventDefault();
  contact.classList.add('active');
  add.classList.remove('active');
  list.classList.remove('active');
  contactSection.style.display = 'block';
  showBook.style.display = 'none';
  addBook.style.display = 'none';
};

export { onlyDisplayBook, onlyDisplayInputBook, onlyDisplayContact };
