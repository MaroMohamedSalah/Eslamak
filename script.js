// selection 
let body = document.querySelector('body');
let main = document.getElementById('main');
let one = document.getElementById('one');
let two = document.getElementById('two');
let three = document.getElementById('three');
let four = document.getElementById('four');
let count = document.getElementById('count');
let aim = document.getElementById('aim')
let press = document.getElementById("press");
let pressText = document.getElementById('text')
let newMain = document.getElementById('new');
let fill = document.getElementById('fill');
let returnToZero = document.getElementById('return');
let Tasbeeh = {
    text : '' ,
    count : 0 ,
    aim : 0 
};
// add from localStorage 
if(localStorage.getItem('Tasbeeh1')){
    addFromLocalStorage('Tasbeeh1');
}
if(localStorage.getItem('Tasbeeh2')){
    addFromLocalStorage('Tasbeeh2');
}

if(Tasbeeh.text === '' && Tasbeeh.count === 0 && Tasbeeh.aim === 0){
    main.style.display = 'none'
}
// handel which chios has taken 
one.onclick = () => {
    main.style.display = 'block'
    if(localStorage.getItem('Tasbeeh1')){
        addFromLocalStorage('Tasbeeh1');
    }else{
        Tasbeeh.count = '0';
        Tasbeeh.text = '';
        Tasbeeh.aim = '0';
        Tasbeeh.text ='اللَّهُمَّ صَلِّ وَسَلِّمْ عَلَى نَبيِّنَا مُحَمَّدٍ' ;
        Tasbeeh.aim = 1000 ;
        pressText.textContent = Tasbeeh.text ;
        aim.textContent = Tasbeeh.aim ;
        count.textContent = Tasbeeh.count ;
        handelPressOne('Tasbeeh1')
    }
}
// two.onclick () => {

// }
three.onclick = () => {
    main.style.display = 'block'
    if(localStorage.getItem('Tasbeeh2')){
        addFromLocalStorage('Tasbeeh2');
    }else{
        Tasbeeh.count = '0';
        Tasbeeh.text = '';
        Tasbeeh.aim = '0';
        Tasbeeh.text =' لا إلهَ إلاَّ اللَّه وحْدهُ لاَ شَرِيكَ لهُ، لَهُ المُلْكُ، ولَهُ الحمْدُ، وَهُو عَلَى كُلِّ شَيءٍ قَدِيرٌ '  ;
        Tasbeeh.aim = 100 ;
        pressText.textContent = Tasbeeh.text ;
        aim.textContent = Tasbeeh.aim ;
        count.textContent = Tasbeeh.count ;
        handelPressOne('Tasbeeh2')
    }
}
// four.onclick () => {

// }
// add new 
newMain.onclick = () =>{
    // localStorage.removeItem('Tasbeeh1');
    Tasbeeh.count = '0';
    Tasbeeh.text = '';
    Tasbeeh.aim = '0';
    window.scrollTo = 0;
    setTimeout(() => {
        location.reload();
    }, 1000);
}
function addToLocalStorage(params , name) {
    localStorage.setItem(name , JSON.stringify(params))
}

function handelPressOne(name) {
    press.onclick = () =>{
        fill.style.width = '100%'
        fill.style.height = '100%'
        setTimeout(() => {
            fill.style.width = '0'
            fill.style.height = '0'
        }, 300);
        if(Tasbeeh.count <= Tasbeeh.aim){
            Tasbeeh.count++ ;
            count.textContent = Tasbeeh.count
            addToLocalStorage(Tasbeeh , name)
        }
        returnToZero.onclick = () =>{
            Tasbeeh.count = 0 ;
            count.textContent = Tasbeeh.count
            addToLocalStorage(Tasbeeh , name)
        }
    }
}

function addFromLocalStorage(key) {
    Tasbeeh = JSON.parse(localStorage.getItem(key));
    pressText.textContent = Tasbeeh.text ;
    aim.textContent = Tasbeeh.aim ;
    count.textContent = Tasbeeh.count ;
    handelPressOne(key);
}