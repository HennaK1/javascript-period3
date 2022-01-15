import LunchMenu from './assets/Lunchlist.json';
// Test
console.log('lunch menu object', LunchMenu);

const coursesEn = [];
const coursesFi = [];

for (let i in LunchMenu.courses){
  coursesFi.push(LunchMenu.courses[i].title_fi);
  coursesEn.push(LunchMenu.courses[i].title_en);
}

const menu = document.querySelector('.menu');
const langButton = document.querySelector('.lang');
const sortButton = document.querySelector('.sort');
const randomButton = document.querySelector('.random');
let finnishList = true;

coursesFi.forEach(meal => {
  menu.innerHTML += '<li>' + meal + '</li>';
});

//funktio menun vaihto
const changeLanguage = () =>{
  menu.innerHTML = '';
  if (finnishList){
    coursesEn.forEach(meal => {
      menu.innerHTML += '<li>' + meal + '</li>';
    });
    finnishList = false;
  }else{
    coursesFi.forEach(meal => {
      menu.innerHTML += '<li>' + meal + '</li>';
    });
    finnishList = true;
  };
};
coursesFi.sort();
coursesEn.sort();

//järjestä menut aakkosittain
const sortMenu = () => {
  menu.innerHTML= '';
  if (finnishList){
    coursesFi.reverse();
    coursesFi.forEach(meal => {
      menu.innerHTML += '<li>' + meal + '</li>';
    });
  }else{
    coursesEn.reverse();
    coursesEn.forEach(meal => {
      menu.innerHTML += '<li>' + meal + '</li>';
    });
  };
};

//funktio näytä random ateria
const randomMeal = () => {
  const random = Math.floor(Math.random()*coursesFi.length);
  if(finnishList){
    alert(coursesFi[random]);
  }else{
    alert(coursesEn[random]);
  }
};

//nappien addeventlistenerit
langButton.addEventListener('click', changeLanguage);
sortButton.addEventListener('click', sortMenu);
randomButton.addEventListener('click', randomMeal);
