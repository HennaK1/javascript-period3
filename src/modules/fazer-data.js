import FazerLunchMenuEn from '../assets/fazer-en.json';
import FazerLunchMenuFi from '../assets/fazer-fi.json';

/**
 * Parsing fazer menu for a day from json data
 *
 * @param {*} menuData - menu data
 * @param {*} dayOfWeek - index number for monday
 * @returns {Array} - meals for a day
 */
 const parseFazerMenu = (menuData, dayOfWeek) => {
  let dailyMenu = menuData.LunchMenus[dayOfWeek].SetMenus.map(setMenu => {
    let mealName = setMenu.Name;
    let dishes = setMenu.Meals.map(dish => `${dish.Name} (${dish.Diets.join(', ')})`);
    dishes = dishes.join(', ');
    return mealName ? `${mealName}: ${dishes}` : dishes;
  });
  return dailyMenu;
};

//Use function
let coursesFi = parseFazerMenu(FazerLunchMenuFi, 0);
 //console.log('parsed fazer menu', coursesFi);
let coursesEn = parseFazerMenu(FazerLunchMenuEn, 0);

const getParsedMenu = (lang = 'fi') => {
  return (lang == 'fi') ? coursesFi : coursesEn;
};

export {getParsedMenu as getParsedMenuFazer};
