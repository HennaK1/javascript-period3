import fazerMenu from './assets/fazer-menu.json';


/**Array menu list */
const menu = [
  {name: 'Lingonberry jam', price: 4.00},
  {name: 'Mushroom and bean casserole', price: 5.50},
  {name: 'Chili-flavoured wheat', price: 3.00},
  {name: 'Vegetarian soup', price: 4.80},
  {name: 'Pureed root vegetable soup with smoked cheese', price: 8.00},
  {name:'3Jugurtti',price: 7.00}
];

const menuList = document.querySelector('.menu');
const menuList2 = document.querySelector('#demo');

//1.

/**
 * Function validates the names of meals
 * @param {String} meal - takes input string as a parameter
 */
menu.forEach((meal) => {
  const regex = /^[A-ZÖÄÅ]{1}[a-zöäå,A-ZÖÄÅ/0-9()-\s]{4,64}$/;
  let mealName = meal.name;
  let validator = regex.test(mealName);
  if (validator) {
    console.log(mealName + ' is valid!') ;
  } else {
    console.log(mealName + ' is not valid!');
  }
});

//2.

/**
 * sort()
 * Function sorts the menu based on price,
 * From the cheapest to the most expensive
 */
 const sortMenubyPrice = (meal) => {
  let sortPrice = menu.sort((a, b) => {
    return a.price - b.price;
  });
  console.log('Sorted by price', sortPrice);
};
sortMenubyPrice();

//3.

/**
 * filter()
 * Function that displays items costing under 5 euros
 */
const filterByPrice = () => {
  let filtered = menu.filter(fil => fil.price < 5);
  console.log('Filtered by price', filtered);
};
filterByPrice();

//4.

/**
 * Map()
 * Function that raises all the prices by 15%
 */
const raisePrice = () => {
  const raised = menu.map(r => (r.price*1.15).toFixed(2));
  console.log('Raised by 15%', raised);
};
raisePrice();

//5.

/**
 * Reduce()
 * Function that sums up all the prices
 */
const sumUp = () => {
  const sum = menu.reduce((a, b) => ({ price: a.price + b.price }));
  console.log('menu prices summed up', sum);
};
sumUp();

// B

//Array list for vegan dishes
const veganMeals = [];

/**
 * Finds vegan dishes from Fazer json file
 * @param {String} menu json-file parsing
 */
const parseFazerMenu = (menu) => {
  const setMenus = menu.SetMenus;
  for (const setMenu of setMenus) {
    const meals = setMenu.Meals;
    for (const meal of meals) {
      const name = meal.Name;
      const diets = meal.Diets;
      for (const diet of diets){
        if (diet == 'Veg') {
          veganMeals.push(name);
        }
      }
    }
  }
};

parseFazerMenu(fazerMenu.LunchMenus[0]);
console.log('Vegan meals', veganMeals);













