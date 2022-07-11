const divChart = document.querySelector("#divChart");
const url = "./data.json";
const rect1 = document.querySelector("#rect1");
const rect2 = document.querySelector("#rect2");
const rect3 = document.querySelector("#rect3");
const rect4 = document.querySelector("#rect4");
const rect5 = document.querySelector("#rect5");
const rect6 = document.querySelector("#rect6");
const rect7 = document.querySelector("#rect7");
const amounts = [];
const myDays = [rect1, rect2, rect3, rect4, rect5, rect6, rect7];
let max;


//Import of my datas from my JSON file
fetch(url)
  .then(function (res) {
    return res.json();
  })
  .then(function (data) {
    
    // To set the highest value in 'amount' as a height for the container that contains my bar chart

    for (let i = 0; i < data.length; i++) {
      amounts.push(data[i]["amount"]);
    }

    divChart.style.height = Math.max(...amounts) + 100 + "px";

    // To set each one of my rectangles a % height of the container
    for (let i = 0; i < data.length; i++) {
      myDays[i].style.height = amounts[i] + "px"; //définit la taille de chaque rectangle en pixel
      myDays[i].querySelector('.tooltips').innerHTML = `$${amounts[i]}`;
      myDays[i].style.cursor = "pointer";
      myDays[i].addEventListener("mouseover", () => showToolTip(myDays[i]));
      myDays[i].addEventListener("mouseout", () => hideToolTip(myDays[i]));

    }

    findMax(amounts);

    function findMax(amounts, max) {
      max = Math.max(...amounts) + "px";
      for (let i = 0; i < data.length; i++) {
        if (max == myDays[i].style.height) {
          myDays[i].style.backgroundColor = "hsl(186, 34%, 60%)";
        } else {
          myDays[i].style.backgroundColor = "hsl(10, 79%, 65%)";
        }
      }
    }

    //hover effects

    function showToolTip(day) {
        day.querySelector('.tooltips').style.display = "block";
    }

    function hideToolTip(day) {
      day.querySelector('.tooltips').style.display = "none";      
    }

  });
