const sideNav = document.querySelector("#mySideNav");
const openBtn = document.querySelector("#openBtn");
const closeBtn = document.querySelector("#closeBtn");
const items = document.querySelectorAll(".carrouselContainer img");
const nbSlide = items.length;
const leftBtn = document.querySelector("#leftBtn");
const rightBtn = document.querySelector("#rightBtn");
let count = 0;
let qty = document.querySelector("#numberOfArticle");
let push = document.querySelector("#push");
const plus = document.querySelector("#plusBtn");
const minus = document.querySelector("#minusBtn");
const darkBackground = document.querySelector("#darkBackground");
const cta = document.querySelector("#callToAction");
const cart = document.querySelector("#cart");
let shoppingCartDisplay = false;



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
  qty.innerHTML++;
}

function decreaseQty(){
  if(qty.innerHTML > 0){
    qty.innerHTML--;
  }
}


openBtn.addEventListener('click', () => darkerBackground(darkBackground));
closeBtn.addEventListener('click', () => lightBackground(darkBackground));

function darkerBackground(darkBackground){
  darkBackground.style.visibility = "visible";
}

function lightBackground(darkBackground){
  darkBackground.style.visibility = "hidden";
}



cta.addEventListener('click', () => addItemsToCart(qty));

function addItemsToCart(qty){
  if(qty.innerHTML > 0){
    push.innerHTML = `${qty.innerHTML}`;
    push.style.visibility = 'visible';
  }
}

// cart.addEventListener('click', () => openShoppingCart());

// function checkingCart(qty){
//   // penser à fermer le cartContainer si 2ème click sur cart (utiliser booleans?)
//   if(qty.innerHTML == 0){
//     document.querySelector(".cartContainer").style.visibility = "visible";
//     let cartContainer__items = document.querySelector(".cartContainer__items");
//     cartContainer__items.innerHTML = "Your cart is empty.";
//     cartContainer__items.style.color = "hsl(219, 9%, 45%)";
//     cartContainer__items.style.fontWeight = "700";
//   }
// }

cart.addEventListener('click', () => toggleShoppingCart());

function toggleShoppingCart(){
  if(!shoppingCartDisplay){
    openShoppingCart();
  } else{
    closeShoppingCart();
  }

  shoppingCartDisplay = !shoppingCartDisplay;

}

function openShoppingCart(){
    document.querySelector(".cartContainer").style.visibility = "visible";
}

function closeShoppingCart(){
    document.querySelector(".cartContainer").style.visibility = "hidden";
}