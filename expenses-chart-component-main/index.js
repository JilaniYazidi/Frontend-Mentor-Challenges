const divChart = document.querySelector("#divChart");
const url = "./data.json";



fetch(url)
  .then(function (res) {
    return res.json();
  })
  .then(function (data) {
    
    divChart.style.height = findMaxHeight(data) + 100 + "px";

    for (let i = 0; i < data.length; i++) {
      let day = document.querySelector("#rect" + (i+1));
      let amount = data[i]["amount"];
      
      setParameters(amount, day);
      setEvent(day);
    }

    setRectanglesColors(data);

    function setParameters(amount, day){
      //height is multiplied by 2 to set my rectangles bigger on the bar chart (design choice)
      day.style.height = (amount*2) + "px"; 
      day.querySelector('.tooltips').innerHTML = `$${amount}`;
    }

    function setEvent(day){
      day.addEventListener("mouseover", () => showToolTip(day));
      day.addEventListener("mouseout", () => hideToolTip(day));
    }

    function findMaxHeight(data){
      let amounts = [];
      for (let i = 0; i < data.length; i++) {
        amounts.push(data[i]["amount"]);
      }
      return Math.max(...amounts);
    }

    function setRectanglesColors(data) {
      let max = (findMaxHeight(data))*2 + "px";
      for (let i = 0; i < data.length; i++) {
        let day = document.querySelector("#rect" + (i+1));
        day.style.backgroundColor = "hsl(10, 79%, 65%)";
        if (max == day.style.height) {
          day.style.backgroundColor = "hsl(186, 34%, 60%)";
        } 
      }
    }

    function showToolTip(day) {
        day.querySelector('.tooltips').style.display = "block";
    }

    function hideToolTip(day) {
      day.querySelector('.tooltips').style.display = "none";      
    }
  });
