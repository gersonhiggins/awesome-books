class Books {
  constructor() {
    this.booksArr = [];
    this.name = document.getElementById('name');
    this.author = document.getElementById('author');
    this.add = document.getElementById('form');
    this.container = document.querySelector('.added-books');
    this.timeContainer = document.querySelector('.localTime');
    this.updateTime = document.addEventListener('DOMContentLoaded', this.updateTime.bind(this));
    this.displayBooks();
    this.add.addEventListener('submit', (e) => {
      e.preventDefault();
      this.addBook();
    });

    this.container.addEventListener('click', (e) => {
      if (e.target.classList.contains('remove')) {
        const index = e.target.dataset.id;
        this.removeBook(index);
      }
    });
  }

  updateTime() {
    setInterval(() => {
      const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
      const suffixes = ['st', 'nd', 'rd', 'th', 'th', 'th', 'th', 'th', 'th', 'th', 'th', 'th', 'th', 'th', 'th', 'th', 'th', 'th', 'th', 'th', 'st', 'nd', 'rd', 'th', 'th', 'th', 'th', 'th', 'th', 'th', 'st'];

      const date = new Date();
      const month = months[date.getMonth()];
      const day = date.getDate();
      const suffix = suffixes[day - 1];
      const year = date.getFullYear();
      const hour = date.getHours() % 12 || 12;
      const minute = date.getMinutes();
      const second = date.getSeconds();
      const ampm = date.getHours() >= 12 ? 'pm' : 'am';

      const formattedDate = `${month} ${day}${suffix} ${year}, ${hour}:${minute}:${second} ${ampm}`;

      this.timeContainer.innerHTML = formattedDate;
    }, 1000);
  }

  addBook() {
    const name = this.name.value;
    const author = this.author.value;
    this.booksArr.push({ name, author });
    localStorage.setItem('books', JSON.stringify(this.booksArr));
    this.displayBooks();
    this.name.value = '';
    this.author.value = '';
  }

  displayBooks() {
    this.container.innerHTML = '';
    this.booksArr.forEach((element, index) => {
      const node1 = document.createElement('div');
      node1.setAttribute('class', 'book');
      node1.className = 'd-flex align-items-center py-1 book';
      this.container.appendChild(node1);
      const node2 = document.createElement('p');
      node2.setAttribute('class', 'text');
      node2.classList = 'm-0';
      node2.innerText = `${element.name} by`;
      node1.appendChild(node2);
      const node3 = document.createElement('p');
      node3.innerText = `${element.author}`;
      node3.className = 'ps-2 m-0';
      node1.appendChild(node3);
      const node4 = document.createElement('button');
      node4.innerText = 'remove';
      node4.setAttribute('class', 'remove');
      node4.setAttribute('data-id', `${index}`);
      node1.appendChild(node4);
    });
  }

  removeBook(index) {
    this.booksArr.splice(index, 1);
    localStorage.setItem('books', JSON.stringify(this.booksArr));
    this.displayBooks();
  }
}
const library = new Books();

if (localStorage.getItem('books')) {
  library.booksArr = JSON.parse(localStorage.getItem('books'));
  library.displayBooks();
}

const navLink = Array.from(document.querySelectorAll('.nav-link'));
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