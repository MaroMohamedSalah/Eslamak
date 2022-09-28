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
let fadl = document.getElementById('fadlText');
let Tasbeeh = {
    text : '' ,
    count : 0 ,
    mainCount: 0,
    aim : 0 
};
let fdl = [
    'إِنَّ أَقْرَبَكُمْ مِنِّي يَوْمَ الْقِيَامَةِ فِي كُلِّ مَوْطِنٍ أَكْثَرُكُمْ عَلَيَّ صَلاةً فِي الدُّنْيَا ، مَنْ صَلَّى عَلَيَّ مِائَةَ مَرَّةٍ فِي يَوْمِ الْجُمُعَةِ وَلَيْلَةِ الْجُمُعَةِ قَضَى اللَّهُ لَهُ مِائَةَ حَاجَةٍ، سَبْعِينَ مِنْ حَوَائِجِ الآخِرَةِ وَثَلاثِينَ مِنْ حَوَائِجِ الدُّنْيَا، ثُمَّ يُوَكِّلُ اللَّهُ بِذَلِكَ مَلَكًا يُدْخِلُهُ فِي قَبْرِهِ كَمَا يُدْخِلُ عَلَيْكُمُ الْهَدَايَا ، يُخْبِرُنِي مَنْ صَلَّى عَلَيَّ بِاسْمِهِ وَنَسَبِهِ إِلَى عَشِيرَتِهِ، فَأُثْبِتُهُ عِنْدِي فِي صَحِيفَةٍ بَيْضَاءَ',
    'عن أبي هريرة رضي الله عنه عن رسول الله- صلى الله عليه وسلم-: «مَنْ سَبَّحَ الله فِي دُبُرِ كُلِّ صَلاةٍ ثَلاثًا وَثَلاثِينَ، وَحَمِدَ الله ثَلاثًا وَثَلاثِينَ، وَكَبَّرَ الله ثَلاثًا وَثَلاثِينَ، فَتِلْكَ تِسْعَةٌ وَتِسْعُونَ، وَقَالَ تَمَامَ المِائَةِ: لا إلَهَ إلَّا الله وَحْدَهُ لا شَرِيكَ لَهُ، لَهُ الملْكُ وَلَهُ الحَمْدُ وَهُوَ عَلَى كُلِّ شَيْءٍ قَديرٌ غُفِرَتْ خَطَايَاهُ وَإنْ كَانَتْ مِثْلَ زَبَدِ البَحْرِ». أخرجه مسلم، ولكن إن كانت هناك صلوات فائتة فعلنا أن نقضيها أولًا ثم بعد ذلك نتفرغ لختم الصلاة.',
    'قول رسول الله - صلى الله عليه وسلم-: «مَنْ قال لا إلهَ إلَّا اللهُ وحدَهُ لَا شرِيكَ لَهُ، لَهُ الملْكُ، ولَهُ الحمْدُ، وهُوَ عَلَى كُلِّ شيءٍ قديرٌ، فِي يومٍ مائَةَ مرةٍ، كانتْ لَهُ عِدْلَ عشرِ رقابٍ، وكُتِبَتْ لَهُ مائَةُ حسنَةٍ، ومُحِيَتْ عنه مائَةُ سيِّئَةٍ، وكانَتْ لَهُ حِرْزًا منَ الشيطانِ يَوْمَهُ ذَلِكَ حتى يُمْسِيَ، ولم يأتِ أحدٌ بأفضلَ مِمَّا جاءَ بِهِ، إلَّا أحدٌ عَمِلَ عملًا أكثرَ مِنْ ذلِكَ».',
    'ورد عن الرسول صلى الله عليه وسلم أنه قال: (من قالَ سبحانَ اللهِ وبحمدهِ في يومٍ مائةُ مرَّةٍ حطتْ خطاياهُ وإن كانتْ مثلَ زبدِ البحرِ)'
]
// add from localStorage 
if(localStorage.getItem('Tasbeeh1')){
    addFromLocalStorage('Tasbeeh1');
    handelPressOne('Tasbeeh1');
    fadl.style.opacity = '0';
    handelFadl(1);
}
if(localStorage.getItem('Tasbeeh2')){
    addFromLocalStorage('Tasbeeh2');
    handelPressOne('Tasbeeh2');
    fadl.style.opacity = '0';
    handelFadl(2);
}
if(localStorage.getItem('Tasbeeh3')){
    addFromLocalStorage('Tasbeeh3');
    handelPressOne('Tasbeeh3');
    fadl.style.opacity = '0';
    handelFadl(3);
}
if(localStorage.getItem('Tasbeeh4')){
    addFromLocalStorage('Tasbeeh4');
    handelPressTwo('Tasbeeh4');
    fadl.style.opacity = '0';
    handelFadl(4);
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
        Tasbeeh.text = ' اللَّهُمَّ صَلِّ علَى مُحَمَّدٍ، وعلَى آلِ مُحَمَّدٍ، كما صَلَّيْتَ علَى آلِ إبْرَاهِيمَ، إنَّكَ حَمِيدٌ مَجِيدٌ' ;
        Tasbeeh.aim = 100 ;
        pressText.textContent = Tasbeeh.text ;
        aim.textContent = Tasbeeh.aim ;
        count.textContent = Tasbeeh.count ;
        handelPressOne('Tasbeeh1')
    }
    fadl.style.opacity = '0';
    handelFadl(1);
}
two.onclick = () => {
    main.style.display = 'block'
    if(localStorage.getItem('Tasbeeh4')){
        addFromLocalStorage('Tasbeeh4');
    }else{
        Tasbeeh.count = '0';
        Tasbeeh.text = '';
        Tasbeeh.aim = '0';
        Tasbeeh.text ='سُـبْحانَ اللهِ'  ;
        Tasbeeh.aim = 33 ;
        setInterval(() => {
            pressText.textContent = Tasbeeh.text ;
            aim.textContent = Tasbeeh.aim ;
            count.textContent = Tasbeeh.count ;
        }, 300);
        handelPressTwo('Tasbeeh4')
    }
    fadl.style.opacity = '0';
    handelFadl(2);
}
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
    fadl.style.opacity = '0';
    handelFadl(3);
}
four.onclick = () => {
    main.style.display = 'block'
    if(localStorage.getItem('Tasbeeh3')){
        addFromLocalStorage('Tasbeeh3');
    }else{
        Tasbeeh.count = '0';
        Tasbeeh.text = '';
        Tasbeeh.aim = '0';
        Tasbeeh.text  = ' سبحان الله وبحمده، سبحان الله العظيم' ;
        Tasbeeh.aim = 100 ;
        pressText.textContent = Tasbeeh.text ;
        aim.textContent = Tasbeeh.aim ;
        count.textContent = Tasbeeh.count ;
        handelPressOne('Tasbeeh3')
    }
    fadl.style.opacity = '0';
    handelFadl(4);
}
function addToLocalStorage(params , name) {
    localStorage.setItem(name , JSON.stringify(params))
}

function handelPressOne(name) {
    console.log("handel one")
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
    // add new 
    newMain.onclick = () =>{
        newOne(name);
    }
}
function handelPressTwo(name){
    console.log("handel two")
    press.onclick = () =>{
        Tasbeeh.mainCount ++;
        console.log(Tasbeeh.mainCount)
        fill.style.width = '100%'
        fill.style.height = '100%'
        setTimeout(() => {
            fill.style.width = '0'
            fill.style.height = '0'
        }, 300);
        if(Tasbeeh.count < Tasbeeh.aim){
            Tasbeeh.count++ ;
            count.textContent = Tasbeeh.count
            if(Tasbeeh.mainCount === 33){
                Tasbeeh.count = 0 
                Tasbeeh.text = 'الحَمْـدُ لله'
                addToLocalStorage(Tasbeeh , name)
            }else if(Tasbeeh.mainCount === 66){
                Tasbeeh.count = 0 
                Tasbeeh.text =' اللهُ أكْـبَر'
                addToLocalStorage(Tasbeeh , name)
            }else if(Tasbeeh.mainCount === 99){
                Tasbeeh.count = 0;
                Tasbeeh.mainCount = 0;
                Tasbeeh.text  = ' لا إلهَ إلاّ اللّهُ وَحْـدَهُ لا شريكَ لهُ، لهُ الملكُ ولهُ الحَمْد، وهُوَ على كُلّ شَيءٍ قَـدير'
                Tasbeeh.aim = 1 ;
                addToLocalStorage(Tasbeeh , name)
            }
            addToLocalStorage(Tasbeeh , name)
        }
        // add new 
        newMain.onclick = () =>{
            newOne(name);
        }
        returnToZero.onclick = () => {
            Tasbeeh.count = 0 ;
            count.textContent = Tasbeeh.count
            if(Tasbeeh.mainCount < 33){
                Tasbeeh.mainCount = 0;
            }
            else if(Tasbeeh.mainCount > 33){
                Tasbeeh.mainCount = 33 ;
            }else if(Tasbeeh.mainCount > 66){
                Tasbeeh.mainCount = 66
            }else{
                Tasbeeh.mainCount = 99 ;
            }
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

function newOne(params){
        localStorage.removeItem(params);
        Tasbeeh.count = '0';
        Tasbeeh.text = '';
        Tasbeeh.aim = '0';
        window.scrollTo = 0;
        setTimeout(() => {
            location.reload();
        }, 1000);
}

function handelFadl(secNum) {       
    setTimeout(() => {
        fadl.style.opacity = '1'
        fadl.textContent = fdl[secNum - 1]
    }, 10000);
}