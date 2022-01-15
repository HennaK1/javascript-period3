const coursesEn = ["Hamburger, cream sauce and poiled potates",
                "Goan style fish curry and whole grain rice",
                "Vegan Chili sin carne and whole grain rice",
                "Broccoli puree soup, side salad with two napas",
                "Lunch baguette with BBQ-turkey filling",
                "Cheese / Chicken / Vege / Halloum burger and french fries"];
const coursesFi = ["Jauhelihapihvi, ruskeaa kermakastiketta ja keitettyä perunaa",
                "Goalaista kalacurrya ja täysjyväriisiä",
                "Vegaani Chili sin carne ja täysjyväriisi",
                "Parsakeittoa,lisäkesalaatti kahdella napaksella",
                "Lunch baguette with BBQ-turkey filling",
                "Juusto / Kana / Kasvis / Halloumi burgeri ja ranskalaiset"];

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
