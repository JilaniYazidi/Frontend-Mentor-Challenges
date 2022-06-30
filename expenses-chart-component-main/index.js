const divChart = document.querySelector('#divChart');
const url = './data.json';

//Import of my datas from my JSON file

fetch(url)
    .then(function(res){
        return res.text();
    })
    .then(function(data) {
        divChart.textContent = data;
    })
