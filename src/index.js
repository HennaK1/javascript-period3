import SodexoData from './modules/sodexo-data';
import {getParsedMenuFazer} from './modules/fazer-data';

let lang = 'fi';

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
 * Shows items from menu data
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
  if(lang === 'fi'){
    alert('Sodexo: '+ randomCourse(SodexoData.coursesFi) + '\n'+ 'Fazer: '+ randomCourse(getParsedMenuFazer('fi')));

  }else{
    alert('Sodexo: '+ randomCourse(SodexoData.coursesEn) + '\n'+ 'Fazer: '+ randomCourse(getParsedMenuFazer('en')));
  }

};
/**
 * Function for language change
 */
const changeLanguage = () => {
  if (lang === 'fi') {
    lang = 'en';
    showMenu('sodexo', SodexoData.coursesEn);
    showMenu('fazer', getParsedMenuFazer('en'));
  } else {
    lang = 'fi';
    showMenu('sodexo', SodexoData.coursesFi);
    showMenu('fazer', getParsedMenuFazer('fi'));
  }
};
/**
 * Function for showing sorted menu
 */
const renderSortedMenu = () => {
  if(lang === 'fi'){
    showMenu('sodexo', sortCourses(SodexoData.coursesFi));
    showMenu('fazer', sortCourses(getParsedMenuFazer('fi')));
  }else if (lang === 'en'){
    showMenu('sodexo', sortCourses(SodexoData.coursesEn));
    showMenu('fazer', sortCourses(getParsedMenuFazer('en')));
  }
};
//Drive menus and add event listeners
const load = () => {
  showMenu('sodexo', SodexoData.coursesFi);
  showMenu('fazer', getParsedMenuFazer('fi'));
  document.querySelector('#lang-button').addEventListener('click', changeLanguage);
  document.querySelector('#sort-button').addEventListener('click', renderSortedMenu);
  document.querySelector('#random-button').addEventListener('click', displayRandomCourse);
};

load();
