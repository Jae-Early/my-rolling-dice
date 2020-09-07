let random = document.getElementById("die");
let status = document.getElementById("status");
let die = Math.floor (Math.random() * 6);         
      

function rollDie(){
    
    let dieroll = document.getElementById("die");
    let die = Math.floor(Math.random() * 6) + 1;
    dieroll.innerHTML =die;
 
     }


function rollDie2(){

    let die1 = document.getElementById("die1");
    let die2 = document.getElementById("die2");
    let status = document.getElementById("status");
    let d1 = Math.floor (Math.random()*6) + 1;
    let d2 = Math.floor (Math.random()*6) + 1;
    let diceTotal = d1 + d2;
    die1.innerHTML =d1;
    die2.innerHTML =d2;
    }
     

     let count=[0,0,0,0,0,0,0,0,0,0,0];
     function rollOfDice(){
      for(let num=1; num<= 1000; num++){
      let d1 = Math.floor (Math.random()*6) + 1
      let d2 = Math.floor (Math.random()*6) + 1
      let value = d1 + d2 - 2;                 
      count[value] = count [value] +1;

      }

     let roll = document.getElementById("rollOfDice");
     let die = Math.floor(Math.random() * 6) + 1;
     let numbers = [];

                    
     
     for(let i = 0; i<= 11; i++){
         numbers.push(count[i]);
     }
     for(let j = 0; j< count.length; j++){
        let div = document.getElementById("bar " + (j))
        div.append(" " + count[j])
      console.log("bar " + j)

     }

     let mychart = document.getElementById("myChart").getContext("2d");

     let myChart = new Chart(mychart, {
        type: 'bar',
        data: {
          height: 200,
          options: {
            maintainAspectRatio: false,
          },
          width:  200,
          labels: ['D2', 'D3',  'D4',  'D5',  'D6',  'D7',  'D8',  'D9',  'D10',  'D11',  'D12'],
          datasets: [{
            label: 'Dice Count',
            data: numbers,
            backgroundColor: 
            ["darkblue",
             "blue",
             "aqua",
             "green",
             "lightgreen",
             "yellow",
             "orange",
             "crimson",
             "red",
             "pink",
             "purple", 
                   
          ],
          borderwidth: 1,
          borderColor: "gray",
          hoverBorderWidth: 3,
          hoverBorderColor: "black",


          }
         ]
        
        },
        
    })
  }
    

