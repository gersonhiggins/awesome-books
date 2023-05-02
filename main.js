import Books from './modules/modules.js';
import navLink from './modules/nav.js';

const library = new Books();

if (localStorage.getItem('books')) {
  library.booksArr = JSON.parse(localStorage.getItem('books'));
  library.displayBooks();
}

navLink.forEach((n) => n.addEventListener('click', () => {
  const navContent = Array.from(document.querySelectorAll('.content'));
  navContent.forEach((e) => {
    if (navLink.indexOf(n) === navContent.indexOf(e)) {
      e.classList.remove('hidden');
    } else if (navLink.indexOf(n) !== navContent.indexOf(e)) {
      e.classList.add('hidden');
    }
  });
}));
