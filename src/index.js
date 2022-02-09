import SodexoData from './modules/sodexo-data';
import FazerData from './modules/fazer-data';

const root = document.documentElement;
const themeButton = document.querySelector('#theme-button');

let lang = 'fi';
let theme = 'light';

/**
 * Local storage for buttons and themes
 */
if (!localStorage.getItem('theme')) {
  localStorage.setItem('theme', theme);
}

if (localStorage.getItem('theme') === 'light') {
  themeButton.textContent = 'Dark theme';
} else {
  theme = localStorage.getItem('theme');
  themeButton.textContent = 'Bright theme';
}
/**
 * Function for changing theme
 */
const changeTheme = () => {
  if (theme === 'light') {
    theme = 'dark';
    localStorage.setItem('theme', theme);
    themeButton.textContent = 'Bright theme';
    root.style.setProperty('--bodyColour', 'black');
    root.style.setProperty('--navColour', 'black');
    root.style.setProperty('--searchColour', 'black');
    root.style.setProperty('--descriptionText', 'white');
    root.style.setProperty('--footerblue', 'gray');

  } else {
    theme = 'light';
    localStorage.setItem('theme', theme);
    themeButton.textContent = 'Dark theme';
    root.style.setProperty('--bodyColour', 'white');
    root.style.setProperty('--navColour', 'white');
    root.style.setProperty('--searchColour', 'white');
    root.style.setProperty('--descriptionText', '#00043a');
    root.style.setProperty('--footerblue', '#1a7bbc');
  }
};
/**
 * Function for loading theme
 */
const loadTheme = () => {
  if (localStorage.getItem('theme') === 'dark') {
    root.style.setProperty('--bodyColour', 'black');
    root.style.setProperty('--navColour', 'black');
    root.style.setProperty('--searchColour', 'black');
    root.style.setProperty('--descriptionText', 'white');
    root.style.setProperty('--footerblue', 'gray');
  } else {
    root.style.setProperty('--bodyColour', 'white');
    root.style.setProperty('--navColour', 'white');
    root.style.setProperty('--searchColour', 'white');
    root.style.setProperty('--descriptionText', '#00043a');
    root.style.setProperty('--footerblue', '#1a7bbc');
  }
};

window.onload = (loadTheme);

/**
 * Sorts an array alphapetically
 *
 * @param {Array} courses - Menu arrays
 * @param {Array} order - 'asc' or 'desc'
 * @returns {Array} sorted menu
 */
const sortCourses = (courses, order = 'asc') => {
  let sortedMenu = courses.sort();
  if (order === 'desc') {
    sortedMenu.reverse();
  }
  return sortedMenu;
};

/**
 * Renders html items from menu data
 *
 * @param {string} restaurant - name of the restaurant
 * @param {Array} menu - menu data
 */
const showMenu = (restaurant, menu) => {
  const list = document.querySelector('#' + restaurant);
  list.innerHTML = '';
  for (const item of menu) {
    const listItem = document.createElement('li');
    listItem.textContent = item;
    list.appendChild(listItem);
  }
};

/**
 * Random course from an array list
 *
 * @param {Array} courses
 * @returns {string} course
 */
const randomCourse = courses => {
  const randomIndex = Math.floor(Math.random() * courses.length);
  return courses[randomIndex];
};
const displayRandomCourse = () => {
  alert('Sodexo: '+ randomCourse(SodexoData.getDailyMenu(lang)) + '\n'+ 'Fazer: '+ randomCourse(FazerData.getDailyMenu(lang)));
};
/**
 * Function for language change
 */
const changeLanguage = () => {
  if (lang === 'fi') {
    lang = 'en';
  } else {
    lang = 'fi';
  }
  showMenu('sodexo', SodexoData.getDailyMenu(lang));
  showMenu('fazer', FazerData.getDailyMenu(lang));
};
/**
 * Function for showing sorted menu
 */
const renderSortedMenu = () => {
  showMenu('sodexo', sortCourses(SodexoData.getDailyMenu(lang)));
  showMenu('fazer', sortCourses(FazerData.getDailyMenu(lang)));
};
//Drive menus and add event listeners
const load = () => {
  showMenu('sodexo', SodexoData.getDailyMenu('fi'));
  showMenu('fazer', FazerData.getDailyMenu('fi'));
  document.querySelector('#lang-button').addEventListener('click', changeLanguage);
  document.querySelector('#sort-button').addEventListener('click', renderSortedMenu);
  document.querySelector('#random-button').addEventListener('click', displayRandomCourse);
  themeButton.addEventListener('click', (evt) => {
    evt.preventDefault();
    changeTheme();
  });
};

load();

