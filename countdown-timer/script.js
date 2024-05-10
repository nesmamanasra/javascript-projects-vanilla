// set initial count 
let count = 0;

// select value and buttons 
const value =  document.querySelector('#value');
// const decrease =  document.querySelector('decrease');
// const rest =  document.querySelector('rest');
// const increase =  document.querySelector('increase');

const btns = document.querySelectorAll('.btn');
//console.log(btns)
// using forEach(make looping & take function ) call back function - I can access every item
btns.forEach(function(btn){
 //console.log(btn)
 btn.addEventListener('click', function(e){
    // wich btn i click 
    // acsses to object this not call back function 
    //console.log(e.currentTarget.classList);
    const style = e.currentTarget.classList;
    if(style.contains('decrease')){
        count--;
    }else if(style.contains('increase')){
        count++;
    }else if(style.contains('rest')){
        count = 0;
    }
    value.textContent = count;
 });
})