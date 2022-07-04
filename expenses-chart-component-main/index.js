const divChart = document.querySelector('#divChart');
const url = './data.json';
const rect1 = document.querySelector('#rect1');

//Import of my datas from my JSON file

fetch(url)
    .then(function(res){
        return res.json();
    })
    .then(function(data) {
        console.log(data[0]['amount'])
        divChart.style.maxHeight = Math.max(data["amount"]);
        rect1.style.height = data[0]["amount"] + '%';
    })
