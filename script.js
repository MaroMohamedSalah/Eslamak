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
let Tasbeeh1 = {
    text : '' ,
    count : 0 ,
    aim : 0 
};
// add from localStorage 
if(localStorage.getItem('Tasbeeh1')){
    Tasbeeh1 = JSON.parse(localStorage.getItem('Tasbeeh1'));
    pressText.textContent = Tasbeeh1.text ;
    aim.textContent = Tasbeeh1.aim ;
    count.textContent = Tasbeeh1.count ;
    handelPressOne();
}
if(Tasbeeh1.text === '' && Tasbeeh1.count === 0 && Tasbeeh1.aim === 0){
    main.style.display = 'none'
}
// handel which chios has taken 
one.onclick = () => {
    main.style.display = 'block'
    Tasbeeh1.text = 'اللَّهُمَّ صَلِّ عَلَى مُحَمَّدٍ وَعَلَى آلِ مُحَمَّدٍ' ;
    Tasbeeh1.aim = 1000 ;
    pressText.textContent = Tasbeeh1.text ;
    aim.textContent = Tasbeeh1.aim ;
    count.textContent = Tasbeeh1.count ;
    handelPressOne()
}
// two.onclick () => {

// }
// three.onclick () => {

// }
// four.onclick () => {

// }
// add new 
newMain.onclick = () =>{
    localStorage.removeItem('Tasbeeh1');
    Tasbeeh1.count = '0';
    Tasbeeh1.text = '';
    Tasbeeh1.aim = '0';
    window.scrollTo = 0;
    setTimeout(() => {
        location.reload();
    }, 1000);
}
function addToLocalStorage(params) {
    localStorage.setItem('Tasbeeh1' , JSON.stringify(params))
}

function handelPressOne() {
    press.onclick = () =>{
        fill.style.width = '100%'
        fill.style.height = '100%'
        setTimeout(() => {
            fill.style.width = '0'
            fill.style.height = '0'
        }, 300);
        if(Tasbeeh1.count <= Tasbeeh1.aim){
            Tasbeeh1.count++ ;
            count.textContent = Tasbeeh1.count
            addToLocalStorage(Tasbeeh1)
        }
    }
}