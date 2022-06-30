const divChart = document.querySelector('#divChart');
const url = './data.json';

//Import of my datas from my JSON file

fetch(url)
    .then(function(res){
        return res.json();
    })
    .then(function(data) {
        divChart.textContent = data;
    })

    // test comit
    a = 1;
    b = 2;
    c = a + b;
    console.log(c);