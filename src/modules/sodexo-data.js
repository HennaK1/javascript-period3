import SodexoLunchMenu from '../assets/sodexo.json';

//console.log(SodexoLunchMenu.courses);

let coursesEn = [];
let coursesFi = [];

/**
 *  Parses menu from Sodexo json data to array
 *
 * @param {Object} sodexoMenu
 */
 const parseSodexoMenu = (sodexoMenu) => {
  const courses = Object.values(sodexoMenu);
  for (const course of courses) {
    coursesFi.push(course.title_fi);
    coursesEn.push(course.title_en);
  }
};

parseSodexoMenu(SodexoLunchMenu.courses);

const SodexoData = {coursesFi, coursesEn};

export default SodexoData;
