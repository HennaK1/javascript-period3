import FazerLunchMenuEn from '../assets/fazer-en.json';
import FazerLunchMenuFi from '../assets/fazer-fi.json';

/**
 * Parsing fazer menu for a day from json data
 *
 * @param {*} menuData - menu data
 * @param {*} dayOfWeek - index number for the day here monday
 * @returns {Array} - meals for a day
 */
 const parseMenu = (menuData, dayOfWeek) => {
  let dailyMenu = menuData.LunchMenus[dayOfWeek].SetMenus.map(setMenu => {
    let mealName = setMenu.Name;
    let dishes = setMenu.Meals.map(dish => `${dish.Name} (${dish.Diets.join(', ')})`);
    dishes = dishes.join(', ');
    return mealName ? `${mealName}: ${dishes}` : dishes;
  });
  return dailyMenu;
};

let coursesFi = parseMenu(FazerLunchMenuFi, 0);
 //console.log('parsed fazer menu', coursesFi);
let coursesEn = parseMenu(FazerLunchMenuEn, 0);

const getDailyMenu = (lang, weekDay = 0) => {
  return (lang === 'fi') ?
  parseMenu(FazerLunchMenuFi, weekDay):parseMenu(FazerLunchMenuEn, weekDay);
};

const FazerData = {getDailyMenu};

export default FazerData;
