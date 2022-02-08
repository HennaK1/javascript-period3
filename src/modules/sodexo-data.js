import SodexoLunchMenu from '../assets/sodexo.json';

console.log(SodexoLunchMenu.courses);

let coursesEn = [];
let coursesFi = [];

/**
 *  Parses menu from Sodexo json data to array
 *
 * @param {Object} sodexoMenu sodexo menu data
 */
 const parseMenu = (sodexoMenu, lang) => {
  const courses = Object.values(sodexoMenu);
  let dailyMenu = [];
  for (const course of courses) {
    if (lang === 'fi') {
      dailyMenu.push(course.title_fi);
    } else {
      dailyMenu.push(course.title_en);
    }
  }
  return dailyMenu;
};

const getDailyMenu = (lang, weekDay = 0) => {
  return parseMenu(SodexoLunchMenu.courses, lang);
};

const SodexoData = {getDailyMenu};

export default SodexoData;
