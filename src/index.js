import SodexoData from './modules/sodexo-data';
import FazerData from './modules/fazer-data';
import {fetchData} from './modules/network';
import {getTodayIndex} from './modules/tools';


/*if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('./service-worker.js').then(registration => {
      console.log('SW registered: ', registration);
    }).catch(registrationError => {
      console.log('SW registration failed: ', registrationError);
    });
  });
}*/

let language = 'fi';
/**
 * Renders html items from menu data
 *
 * @param {string} targetId - target of the id
 * @param {Array} data - menu data
 */
const showMenu = (data, targetId) => {
  const list = document.querySelector('#' + targetId);
  list.innerHTML = '';
  for (const item of data) {
    const listItem = document.createElement('li');
    listItem.textContent = item;
    list.appendChild(listItem);
  }
};

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
  alert('Sodexo: '+ randomCourse(SodexoData.getDailyMenu(language)) + '\n'+ 'Fazer: '+ randomCourse(FazerData.getDailyMenu(language)));
};
/**
 * Function for language change
 */
const changeLanguage = (parsedMenu) => {
  if (language === 'fi') {
    language = 'en';
    showMenu(SodexoData.coursesEn, 'sodexo');
    showMenu(FazerData.coursesEn, 'fazer');
  } else {
    language = 'fi';
    showMenu(SodexoData.coursesFi, 'sodexo');
    showMenu(FazerData.coursesFi, 'fazer');
  }
};

/**
 * Function for showing sorted menu
 */
const renderSortedMenu = () => {
  showMenu('sodexo', sortCourses(SodexoData.parseDayMenu(language)));
  showMenu('fazer', sortCourses(FazerData.getDailyMenu(language)));
};
//Drive menus and add event listeners
const load = () => {

  fetchData(SodexoData.dataUrlDaily).then(data => {
    console.log('sodexo', data);
    const courses = SodexoData.parseDayMenu(data.courses);
    showMenu(courses, 'sodexo');
  });
  fetchData(FazerData.dataUrlFi, 'fazer-php').then(data => {
    console.log('fazer', data);
    const courses = FazerData.parseDayMenu(data.LunchMenus, getTodayIndex());
    showMenu(courses, 'fazer');
  });

  document.querySelector('#lang-button').addEventListener('click', changeLanguage);
  document.querySelector('#sort-button').addEventListener('click', renderSortedMenu);
  document.querySelector('#random-button').addEventListener('click', displayRandomCourse);
};

load();
