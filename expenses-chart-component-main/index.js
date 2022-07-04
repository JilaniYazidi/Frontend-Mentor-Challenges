const divChart = document.querySelector('#divChart');
const url = './data.json';
const rect1 = document.querySelector('#rect1');

//Import of my datas from my JSON file

fetch(url)
    .then(function(res){
        return res.json();
    })
    .then(function(data) {
        // console.log(data[0]['amount'])
        // console.log(data.length);
        
        // console.log(Object.values(data));

        // for (const key of Object.values(data)){
        //     console.log(key)
        // }

        // console.log(Math.max(...data.map(element => element.amount)));

        // data.forEach(element => {
        //     console.log(Math.max(element.amount))
            
        // });

        // for(let i = 0; i < data.length; i++){
        //     console.log()
        // }

        // Object.keys(data).forEach(key => {
        //     // console.log(key);
        //     console.log(data[key]);
        // })

        divChart.style.height = Math.max(...data.map(element => element.amount)) + "px";
        rect1.style.height = data[0]["amount"] + '%';

        //const myDays = [];
        for(let i = 0; i < data.length; i++){
            console.log(...data.map(element => element.amount))
        }
    })
