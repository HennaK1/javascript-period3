import SodexoData from './modules/sodexo-data';
import FazerData from './modules/fazer-data';
import {fetchData} from './modules/network';


if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('./service-worker.js').then(registration => {
      console.log('SW registered: ', registration);
    }).catch(registrationError => {
      console.log('SW registration failed: ', registrationError);
    });
  });
}

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
};

load();

const netPromise = fetch('https://www.sodexo.fi/ruokalistat/output/weekly_json/152');

netPromise.then(data => data.json()).then((json) => {
  console.log(json);
  fetch(json.repos_url).then(data => data.json()).then(data => {
    console.log(data);
        // fetch(data[0].collaborators_url).then();
  });
}).catch(error => {
  console.error('fetch sodexo menu error', error);
});

console.log('promise 1', netPromise);

// Async - await & error handling
const getJsonMenu = async () => {
  let menuData = {};
  try {
    const response = await fetch(`https://www.sodexo.fi/ruokalistat/output/weekly_json/${listNmbr}`);
    if (!response.ok) {
      throw new Error('problem: '+ response.statusText);
    }
    menuData = await response.json();
  } catch (error) {
    console.error(error);
  }
  return menuData;
};

getJsonMenu('152').then(data => {
  console.log(data);
});




