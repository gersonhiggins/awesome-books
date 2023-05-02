import Books from './modules/modules.js';
import navLink from './modules/nav.js';
import { DateTime } from './node_modules/luxon/src/luxon.js';

const timeContainer = document.querySelector('.localTime');
const timeInterval = setInterval(() => {
  timeContainer.textContent = `${DateTime.now().toHTTP()}`;
  return timeInterval;
}, 1000);

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
