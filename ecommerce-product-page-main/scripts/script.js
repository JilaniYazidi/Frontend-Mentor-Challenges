const sideNav = document.querySelector("#mySideNav");
const openBtn = document.querySelector("#openBtn");
const closeBtn = document.querySelector("#closeBtn");
const items = document.querySelectorAll("img");
const nbSlide = items.length;
const leftBtn = document.querySelector("#leftBtn");
const rightBtn = document.querySelector("#rightBtn");
let count = 0;

// console.log(items.length);

openBtn.onclick = openNav;
closeBtn.onclick = closeNav;


function slideSuivante(){
  items[count].classList.remove('active');
  
  if(count < nbSlide - 1){
    count++;
  } else{
    count = 0;
  }

  items[count].classList.add('active');
  console.log(count);
}

rightBtn.addEventListener('click', slideSuivante);


function slidePrecedente(){
  items[count].classList.remove('active');

  if(count > 0){
    count --;
  } else{
    count = nbSlide - 1;
  }

  items[count].classList.add('active');
  console.log(count);
}

leftBtn.addEventListener('click', slidePrecedente);






/* Set the width of the side navigation to 250px */
function openNav() {
  sideNav.classList.add("active");  
}

/* Set the width of the side navigation to 0 */
function closeNav() {
  sideNav.classList.remove("active");
}

