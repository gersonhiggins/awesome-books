import { DateTime } from '../node_modules/luxon/src/luxon.js';

const timeContainer = document.querySelector('.localTime');
const timeInterval = setInterval(() => {
  timeContainer.textContent = `${DateTime.now().toHTTP()}`;
  return timeInterval;
}, 1000);

const navLink = Array.from(document.querySelectorAll('.nav-link'));
export default navLink;