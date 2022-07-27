const sideNav = document.querySelector("#mySideNav");
const openBtn = document.querySelector("#openBtn");
const closeBtn = document.querySelector("#closeBtn");
const items = document.querySelectorAll("img"); // need to change that selector, because I have others img
const nbSlide = items.length;
const leftBtn = document.querySelector("#leftBtn");
const rightBtn = document.querySelector("#rightBtn");
let count = 0;
let qty = document.querySelector("#numberOfArticle");
const plus = document.querySelector("#plusBtn");
const minus = document.querySelector("#minusBtn");


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



plusBtn.addEventListener('click', increaseQty);
minusBtn.addEventListener('click', decreaseQty);

function increaseQty(){
  Number(qty.innerHTML++);
}

function decreaseQty(){
  if(qty.innerHTML > 0){
    Number(qty.innerHTML--);
  }
}