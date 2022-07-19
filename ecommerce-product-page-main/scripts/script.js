const sideNav = document.querySelector("#mySideNav");
const openBtn = document.querySelector("#openBtn");
const closeBtn = document.querySelector("#closeBtn");
const leftBtn = document.querySelector("#leftBtn");
const rightBtn = document.querySelector("#rightBtn");

openBtn.onclick = openNav;
closeBtn.onclick = closeNav;


document.body.onload = function(){
  let nbr = 4;
  let p = 0;
  const container = document.getElementById("carrouselContainer");
  const leftBtn = document.getElementById("leftBtn");
  const rightBtn = document.getElementById("rightBtn");
  
  for(i = 1; i <= nbr; i++ ){
    div = document.createElement("div");
    div.className = "shoesPictures";
    div.style.backgroundImage = "url('images/image-product-"+i+".jpg')";
    container.appendChild(div);
  }
}

/* Set the width of the side navigation to 250px */
function openNav() {
  sideNav.classList.add("active");  
}

/* Set the width of the side navigation to 0 */
function closeNav() {
  sideNav.classList.remove("active");
}

