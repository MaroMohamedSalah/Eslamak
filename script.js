// selection
let body = document.querySelector("body");
let main = document.getElementById("main");
let one = document.getElementById("one");
let two = document.getElementById("two");
let three = document.getElementById("three");
let four = document.getElementById("four");
let five = document.getElementById("five");
let six = document.getElementById("six");
let seven = document.getElementById("seven");
let count = document.getElementById("count");
let aim = document.getElementById("aim");
let press = document.getElementById("press");
let pressText = document.getElementById("text");
let newMain = document.getElementById("new");
let fill = document.getElementById("fill");
let returnToZero = document.getElementById("return");
let fadl = document.getElementById("fadlText");
let colorOne = document.getElementById("fontOne");
let colorTwo = document.getElementById("fontTwo");
let colorThree = document.getElementById("fontThree");
let Tasbeeh = {
	text: "",
	count: 0,
	mainCount: 0,
	aim: 0,
};
let fdl = [
	" عَن أَبِي هُرَيرَةَ رضي الله عنه أَنَّ رَسُولَ اللهِ صلى الله عليه وسلم قَالَ: ((مَنْ صَلَّى عَلَيَّ وَاحِدَةً، صَلَّى الله عَلَيْهِ عَشْرًا))؛ رواه مسلم.",
	"عن أبي هريرة رضي الله عنه عن رسول الله- صلى الله عليه وسلم-: «مَنْ سَبَّحَ الله فِي دُبُرِ كُلِّ صَلاةٍ ثَلاثًا وَثَلاثِينَ، وَحَمِدَ الله ثَلاثًا وَثَلاثِينَ، وَكَبَّرَ الله ثَلاثًا وَثَلاثِينَ، فَتِلْكَ تِسْعَةٌ وَتِسْعُونَ، وَقَالَ تَمَامَ المِائَةِ: لا إلَهَ إلَّا الله وَحْدَهُ لا شَرِيكَ لَهُ، لَهُ الملْكُ وَلَهُ الحَمْدُ وَهُوَ عَلَى كُلِّ شَيْءٍ قَديرٌ غُفِرَتْ خَطَايَاهُ وَإنْ كَانَتْ مِثْلَ زَبَدِ البَحْرِ». أخرجه مسلم، ولكن إن كانت هناك صلوات فائتة فعلنا أن نقضيها أولًا ثم بعد ذلك نتفرغ لختم الصلاة.",
	"قول رسول الله - صلى الله عليه وسلم-: «مَنْ قال لا إلهَ إلَّا اللهُ وحدَهُ لَا شرِيكَ لَهُ، لَهُ الملْكُ، ولَهُ الحمْدُ، وهُوَ عَلَى كُلِّ شيءٍ قديرٌ، فِي يومٍ مائَةَ مرةٍ، كانتْ لَهُ عِدْلَ عشرِ رقابٍ، وكُتِبَتْ لَهُ مائَةُ حسنَةٍ، ومُحِيَتْ عنه مائَةُ سيِّئَةٍ، وكانَتْ لَهُ حِرْزًا منَ الشيطانِ يَوْمَهُ ذَلِكَ حتى يُمْسِيَ، ولم يأتِ أحدٌ بأفضلَ مِمَّا جاءَ بِهِ، إلَّا أحدٌ عَمِلَ عملًا أكثرَ مِنْ ذلِكَ».",
	"ورد عن الرسول صلى الله عليه وسلم أنه قال: (من قالَ سبحانَ اللهِ وبحمدهِ في يومٍ مائةُ مرَّةٍ حطتْ خطاياهُ وإن كانتْ مثلَ زبدِ البحرِ)",
	"سبح بما تريد بدون هدف او عدد معين.",
	"من يقولوها حين يُصبح، أُجير من الجن حتى يُمسي، ومن يقولوها حين يُمسي، أُجير من الجن حتى يصبح.",
];

window.addEventListener("load", () => {
	main.style.display = "none";
});

// return to zero
returnToZero.onclick = () => {
	Tasbeeh.count = 0;
	count.textContent = Tasbeeh.count;
	addToLocalStorage(Tasbeeh, name);
};
// add from localStorage
if (localStorage.getItem("Tasbeeh1")) {
	addFromLocalStorage("Tasbeeh1");
	handelPressOne("Tasbeeh1");
	fadl.style.opacity = "0";
	handelFadl(1);
}
if (localStorage.getItem("Tasbeeh2")) {
	addFromLocalStorage("Tasbeeh2");
	handelPressOne("Tasbeeh2");
	fadl.style.opacity = "0";
	handelFadl(2);
}
if (localStorage.getItem("Tasbeeh3")) {
	addFromLocalStorage("Tasbeeh3");
	handelPressOne("Tasbeeh3");
	fadl.style.opacity = "0";
	handelFadl(3);
}
if (localStorage.getItem("Tasbeeh4")) {
	addFromLocalStorage("Tasbeeh4");
	handelPressTwo("Tasbeeh4");
	fadl.style.opacity = "0";
	handelFadl(4);
}
if (localStorage.getItem("Tasbeeh5")) {
	addFromLocalStorage("Tasbeeh5");
	handelPressOne("Tasbeeh5");
	fadl.style.opacity = "0";
	handelFadl(5);
}
if (localStorage.getItem("Tasbeeh6")) {
	addFromLocalStorage("Tasbeeh6");
	handelPressOne("Tasbeeh6");
	fadl.style.opacity = "0";
	handelFadl(6);
}

if (Tasbeeh.text === "" && Tasbeeh.count === 0 && Tasbeeh.aim === 0) {
	main.style.display = "none";
}
// handel which chios has taken
one.onclick = () => {
	main.style.display = "block";
	if (localStorage.getItem("Tasbeeh1")) {
		addFromLocalStorage("Tasbeeh1");
	} else {
		Tasbeeh.count = "0";
		Tasbeeh.text = "";
		Tasbeeh.aim = "0";
		Tasbeeh.text =
			"اللَّهُمَّ صَلِّ عَلَى مُحَمَّدٍ، وَعَلَى آلِ مُحَمَّدٍ، كَمَا صَلَّيْتَ عَلَى إِبْرَاهِيمَ، وَعَلَى آلِ إِبْرَاهِيمَ، إِنَّكَ حَمِيدٌ مَجِيدٌ، وَبَارِكْ عَلَى مُحَمَّدٍ، وَعَلَى آلِ مُحَمَّدٍ، كَمَا بَارَكْتَ عَلَى إِبْرَاهِيمَ، وَعَلَى آلِ إِبْرَاهِيمَ، فِي الْعَالَمِينَ إِنَّكَ حَمِيدٌ مَجِيدٌ";
		Tasbeeh.aim = 100;
		pressText.textContent = Tasbeeh.text;
		aim.textContent = Tasbeeh.aim;
		count.textContent = Tasbeeh.count;
		handelPressOne("Tasbeeh1");
	}
	fadl.style.opacity = "0";
	handelFadl(1);
};
two.onclick = () => {
	main.style.display = "block";
	if (localStorage.getItem("Tasbeeh2")) {
		addFromLocalStorage("Tasbeeh2");
	} else {
		Tasbeeh.mainCount = 0;
		Tasbeeh.count = "0";
		Tasbeeh.text = "";
		Tasbeeh.aim = "0";
		Tasbeeh.text = "سُـبْحانَ اللهِ";
		Tasbeeh.aim = 33;
		setInterval(() => {
			pressText.textContent = Tasbeeh.text;
			aim.textContent = Tasbeeh.aim;
			count.textContent = Tasbeeh.count;
		}, 300);
		handelPressTwo("Tasbeeh2");
	}
	fadl.style.opacity = "0";
	handelFadl(2);
};
three.onclick = () => {
	main.style.display = "block";
	if (localStorage.getItem("Tasbeeh3")) {
		addFromLocalStorage("Tasbeeh3");
	} else {
		Tasbeeh.count = "0";
		Tasbeeh.text = "";
		Tasbeeh.aim = "0";
		Tasbeeh.text =
			" لا إلهَ إلاَّ اللَّه وحْدهُ لاَ شَرِيكَ لهُ، لَهُ المُلْكُ، ولَهُ الحمْدُ، وَهُو عَلَى كُلِّ شَيءٍ قَدِيرٌ ";
		Tasbeeh.aim = 100;
		pressText.textContent = Tasbeeh.text;
		aim.textContent = Tasbeeh.aim;
		count.textContent = Tasbeeh.count;
		handelPressOne("Tasbeeh3");
	}
	fadl.style.opacity = "0";
	handelFadl(3);
};
four.onclick = () => {
	main.style.display = "block";
	if (localStorage.getItem("Tasbeeh4")) {
		addFromLocalStorage("Tasbeeh4");
	} else {
		Tasbeeh.count = "0";
		Tasbeeh.text = "";
		Tasbeeh.aim = "0";
		Tasbeeh.text = " سبحان الله وبحمده، سبحان الله العظيم";
		Tasbeeh.aim = 100;
		pressText.textContent = Tasbeeh.text;
		aim.textContent = Tasbeeh.aim;
		count.textContent = Tasbeeh.count;
		handelPressOne("Tasbeeh4");
	}
	fadl.style.opacity = "0";
	handelFadl(4);
};
five.onclick = () => {
	main.style.display = "block";
	if (localStorage.getItem("Tasbeeh5")) {
		addFromLocalStorage("Tasbeeh5");
	} else {
		Tasbeeh.count = 0;
		Tasbeeh.text = "";
		Tasbeeh.aim = "-";
		pressText.textContent = Tasbeeh.text;
		aim.textContent = Tasbeeh.aim;
		count.textContent = Tasbeeh.count;
		handelPressThree("Tasbeeh5");
	}
	fadl.style.opacity = "0";
};
six.onclick = () => {
	main.style.display = "block";
	if (localStorage.getItem("Tasbeeh6")) {
		addFromLocalStorage("Tasbeeh6");
	} else {
		Tasbeeh.count = 0;
		Tasbeeh.mainCount = 0;
		Tasbeeh.text =
			"اللَّهُ لَا إِلَهَ إِلَّا هُوَ الْحَيُّ الْقَيُّومُ لَا تَأْخُذُهُ سِنَةٌ وَلَا نَوْمٌ لَهُ مَا فِي السَّمَاوَاتِ وَمَا فِي الْأَرْضِ مَنْ ذَا الَّذِي يَشْفَعُ عِنْدَهُ إِلَّا بِإِذْنِهِ يَعْلَمُ مَا بَيْنَ أَيْدِيهِمْ وَمَا خَلْفَهُمْ وَلَا يُحِيطُونَ بِشَيْءٍ مِنْ عِلْمِهِ إِلَّا بِمَا شَاءَ وَسِعَ كُرْسِيُّهُ السَّمَاوَاتِ وَالْأَرْضَ وَلَا يَئُودُهُ حِفْظُهُمَا وَهُوَ الْعَلِيُّ الْعَظِيمُ";
		Tasbeeh.aim = "1";
		pressText.textContent = Tasbeeh.text;
		aim.textContent = Tasbeeh.aim;
		count.textContent = Tasbeeh.count;
		// handel change in handel press 5
		setInterval(() => {
			pressText.textContent = Tasbeeh.text;
			aim.textContent = Tasbeeh.aim;
			count.textContent = Tasbeeh.count;
		}, 300);
		handelPressFour("Tasbeeh6");
	}
	fadl.style.opacity = "0";
	handelFadl(6);
};
function addToLocalStorage(params, name) {
	localStorage.setItem(name, JSON.stringify(params));
}

function handelPressOne(name) {
	press.onclick = () => {
		console.log("click 1");
		fill.style.width = "100%";
		fill.style.height = "100%";
		setTimeout(() => {
			fill.style.width = "0";
			fill.style.height = "0";
		}, 300);
		if (Tasbeeh.count < Tasbeeh.aim) {
			Tasbeeh.count++;
			count.textContent = Tasbeeh.count;
			addToLocalStorage(Tasbeeh, name);
		}
		// add new
		newMain.onclick = () => {
			newOne(name);
		};
	};
}

function handelPressTwo(name) {
	press.onclick = () => {
		console.log("click 2");
		Tasbeeh.mainCount++;
		fill.style.width = "100%";
		fill.style.height = "100%";
		setTimeout(() => {
			fill.style.width = "0";
			fill.style.height = "0";
		}, 300);
		if (Tasbeeh.count < Tasbeeh.aim) {
			Tasbeeh.count++;
			count.textContent = Tasbeeh.count;
			if (Tasbeeh.mainCount === 33) {
				startVibrate();
				Tasbeeh.count = 0;
				Tasbeeh.text = "الحَمْـدُ لله";
				addToLocalStorage(Tasbeeh, name);
			} else if (Tasbeeh.mainCount === 66) {
				startVibrate();
				Tasbeeh.count = 0;
				Tasbeeh.text = " اللهُ أكْـبَر";
				addToLocalStorage(Tasbeeh, name);
			} else if (Tasbeeh.mainCount === 99) {
				startVibrate();
				Tasbeeh.count = 0;
				Tasbeeh.mainCount = 0;
				Tasbeeh.text =
					" لا إلهَ إلاّ اللّهُ وَحْـدَهُ لا شريكَ لهُ، لهُ الملكُ ولهُ الحَمْد، وهُوَ على كُلّ شَيءٍ قَـدير";
				Tasbeeh.aim = 1;
				addToLocalStorage(Tasbeeh, name);
			}
			addToLocalStorage(Tasbeeh, name);
		}
		// add new
		newMain.onclick = () => {
			newOne(name);
		};
		returnToZero.onclick = () => {
			Tasbeeh.count = 0;
			count.textContent = Tasbeeh.count;
			if (Tasbeeh.mainCount < 33) {
				Tasbeeh.mainCount = 0;
			} else if (Tasbeeh.mainCount > 33) {
				Tasbeeh.mainCount = 33;
			} else if (Tasbeeh.mainCount > 66) {
				Tasbeeh.mainCount = 66;
			} else {
				Tasbeeh.mainCount = 99;
			}
			addToLocalStorage(Tasbeeh, name);
		};
	};
}
function handelPressThree(name) {
	press.onclick = () => {
		console.log("click 3");
		fill.style.width = "100%";
		fill.style.height = "100%";
		setTimeout(() => {
			fill.style.width = "0";
			fill.style.height = "0";
		}, 300);
		Tasbeeh.count++;
		count.textContent = Tasbeeh.count;
		addToLocalStorage(Tasbeeh, name);
	};
	// add new
	newMain.onclick = () => {
		newOne(name);
	};
}
function handelPressFour(name) {
	press.onclick = () => {
		console.log("click 4");
		Tasbeeh.mainCount++;
		fill.style.width = "100%";
		fill.style.height = "100%";
		setTimeout(() => {
			fill.style.width = "0";
			fill.style.height = "0";
		}, 300);
		if (Tasbeeh.count < Tasbeeh.aim) {
			Tasbeeh.count++;
			count.textContent = Tasbeeh.count;
			// handel change in handel press 5
			setInterval(() => {
				pressText.textContent = Tasbeeh.text;
				aim.textContent = Tasbeeh.aim;
				count.textContent = Tasbeeh.count;
			}, 300);
			switch (Tasbeeh.mainCount) {
				case 1:
					startVibrate();
					Tasbeeh.count = 0;
					Tasbeeh.text =
						"قُلْ هُوَ اللَّهُ أَحَدٌ * اللَّهُ الصَّمَدُ * لَمْ يَلِدْ وَلَمْ يُولَدْ * وَلَمْ يَكُنْ لَهُ كُفُوًا أَحَدٌ";
					Tasbeeh.aim = 3;
					fadl.textContent = "من يقولوها حين يصبح وحين يمسي، كفتْه من كل شيء.";
					addToLocalStorage(Tasbeeh, name);
					break;
				case 4:
					startVibrate();
					Tasbeeh.count = 0;
					Tasbeeh.aim = 3;
					Tasbeeh.text =
						"قُلْ أَعُوذُ بِرَبِّ الْفَلَقِ * مِنْ شَرِّ مَا خَلَقَ * وَمِنْ شَرِّ غَاسِقٍ إِذَا وَقَبَ * وَمِنْ شَرِّ النَّفَّاثَاتِ فِي الْعُقَدِ * وَمِنْ شَرِّ حَاسِدٍ إِذَا حَسَدَ";
					fadl.textContent = "من يقولوها حين يصبح وحين يمسي، كفتْه من كل شيء.";
					addToLocalStorage(Tasbeeh, name);
					break;
				case 7:
					startVibrate();
					Tasbeeh.count = 0;
					Tasbeeh.text =
						"قُلْ أَعُوذُ بِرَبِّ النَّاسِ * مَلِكِ النَّاسِ * إِلَهِ النَّاسِ * مِنْ شَرِّ الْوَسْوَاسِ الْخَنَّاسِ * الَّذِي يُوَسْوِسُ فِي صُدُورِ النَّاسِ * مِنَ الْجِنَّةِ وَالنَّاسِ";
					Tasbeeh.aim = 3;
					fadl.textContent = "من يقولوها حين يصبح وحين يمسي، كفتْه من كل شيء.";
					addToLocalStorage(Tasbeeh, name);
					break;
				case 10:
					startVibrate();
					Tasbeeh.count = 0;
					Tasbeeh.text =
						"أصبحنا وأصبح الملك لله، والحمد لله، لا إله إلا الله وحده لا شريك له، له الملك وله الحمد، وهو على كل شيء قدير، ربِّ أسألك خير ما في هذا اليوم، وخير ما بعده، وأعوذ بك من شر هذا اليوم وشر ما بعده، رب أعوذ بك من الكسل وسوء الكِبر، ربِّ أعوذ بك من عذاب في النار وعذاب في القبر";
					Tasbeeh.aim = 1;
					fadl.textContent = "";
					addToLocalStorage(Tasbeeh, name);
					break;
				case 11:
					startVibrate();
					Tasbeeh.count = 0;
					Tasbeeh.text =
						"اللهم أنت ربي، لا إله إلا أنت، خلقتني وأنا عبدك، وأنا على عهدك ووعدك ما استطعت، أعوذ بك من شرِّ ما صنعت، أبوء لك بنعمتك عليّ، وأبوء بذنبي، فاغفر لي؛ فإنه لا يغفر الذنوب إلا أنت.";
					Tasbeeh.aim = 1;
					fadl.textContent =
						"من يقولوها موقنًا بها حين يمسي ومات من ليلته، دخل الجنة، وكذلك حين يصبح";
					addToLocalStorage(Tasbeeh, name);
					break;
				case 12:
					startVibrate();
					Tasbeeh.count = 0;
					Tasbeeh.text =
						"رضيتُ بالله ربًّا، وبالإسلام دينًا، وبمحمد - صلى الله عليه وسلم - نبيًّا";
					Tasbeeh.aim = 3;
					fadl.textContent =
						"من يقولوها حين يصبح وحين يمسي، كان حقًّا على الله أن يُرضيه يوم القيامة";
					addToLocalStorage(Tasbeeh, name);
					break;
				case 15:
					startVibrate();
					Tasbeeh.count = 0;
					Tasbeeh.text =
						"اللهم إني أصبحت أشهدك، وأشهد حملة عرشك، وملائكتك، وجميع خلقك، أنك أنت الله لا إله إلا أنت وحدك لا شريك لك، وأن محمدًا عبدك ورسولك";
					Tasbeeh.aim = 4;
					fadl.textContent = "من يقولوها أعتقه الله من النار";
					addToLocalStorage(Tasbeeh, name);
					break;
				case 19:
					startVibrate();
					Tasbeeh.count = 0;
					Tasbeeh.text =
						"اللهم ما أصبح بي من نعمة أو بأحد من خلقك، فمنك وحدك لا شريك لك، فلك الحمد ولك الشكر";
					Tasbeeh.aim = 1;
					fadl.textContent = "من يقولوها حين يصبح، أدَّى شكر يومه";
					addToLocalStorage(Tasbeeh, name);
					break;
				case 20:
					startVibrate();
					Tasbeeh.count = 0;
					Tasbeeh.text =
						"حسبي الله لا إله إلا هو عليه توكَّلت وهو رب العرش العظيم.";
					Tasbeeh.aim = 7;
					fadl.textContent =
						"من يقولوها كفاه الله ما أهمه من أمر الدنيا والآخرة";
					addToLocalStorage(Tasbeeh, name);
					break;
				case 27:
					startVibrate();
					Tasbeeh.count = 0;
					Tasbeeh.text =
						"بسم الله الذي لا يضر مع اسمه شيء في الأرض ولا في السماء وهو السميع العليم";
					Tasbeeh.aim = 3;
					fadl.textContent = "لم يضره من الله شيء.";
					addToLocalStorage(Tasbeeh, name);
					break;
				case 30:
					startVibrate();
					Tasbeeh.count = 0;
					Tasbeeh.text =
						"اللهم بك أصبحنا وبك أمسينا، وبك نحيا وبك نموت وإليك النشور";
					Tasbeeh.aim = 1;
					fadl.textContent = "";
					addToLocalStorage(Tasbeeh, name);
					break;
				case 31:
					startVibrate();
					Tasbeeh.count = 0;
					Tasbeeh.text =
						"أصبحنا على فطرة الإسلام وعلى كلمة الإخلاص، وعلى دين نبينا محمد - صلى الله عليه وسلم - وعلى مِلة أبينا إبراهيم حنيفًا مسلمًا وما كان من المشركين";
					Tasbeeh.aim = 1;
					fadl.textContent = "";
					addToLocalStorage(Tasbeeh, name);
					break;
				case 32:
					startVibrate();
					Tasbeeh.count = 0;
					Tasbeeh.text =
						"سبحان الله وبحمده عدد خلقه، ورضا نفسه، وزنة عرشه، ومداد كلماته";
					Tasbeeh.aim = 3;
					fadl.textContent = "";
					addToLocalStorage(Tasbeeh, name);
					break;
				case 35:
					startVibrate();
					Tasbeeh.count = 0;
					Tasbeeh.text =
						"اللهم عافني في بدني، اللهم عافني في سمعي، اللهم عافني في بصري، لا إله إلا أنت";
					Tasbeeh.aim = 3;
					fadl.textContent = "";
					addToLocalStorage(Tasbeeh, name);
					break;
				case 38:
					startVibrate();
					Tasbeeh.count = 0;
					Tasbeeh.text =
						"اللهم إني أعوذ بك من الكفر، والفقر، وأعوذ بك من عذاب القبر، لا إله إلا أنت";
					Tasbeeh.aim = 3;
					fadl.textContent = "";
					addToLocalStorage(Tasbeeh, name);
					break;
				case 41:
					startVibrate();
					Tasbeeh.count = 0;
					Tasbeeh.text =
						"اللهم إني أسألك العفو والعافية في الدنيا والآخرة، اللهم إني أسألك العفو والعافية في ديني ودنياي وأهلي ومالي، اللهم استر عوراتي وآمن روعاتي، اللهم احفظني من بين يدي ومن خلفي وعن يميني وعن شمالي، ومن فوقي، وأعوذ بعظمتك أن أغتال من تحتي";
					Tasbeeh.aim = 1;
					fadl.textContent = "";
					addToLocalStorage(Tasbeeh, name);
					break;
				case 42:
					startVibrate();
					Tasbeeh.count = 0;
					Tasbeeh.text =
						"يا حيّ يا قيوم، برحمتك أستغيث، أصلح لي شأني كله، ولا تَكِلني إلى نفسي طرْفة عين";
					Tasbeeh.aim = 1;
					fadl.textContent = "";
					addToLocalStorage(Tasbeeh, name);
					break;
				case 43:
					startVibrate();
					Tasbeeh.count = 0;
					Tasbeeh.text =
						"أصبحنا وأصبح الملك لله رب العالمين، اللهم إني أسألك خير هذا اليوم فتحه، ونصره، ونوره وبركته، وهداه، وأعوذ بك من شر ما فيه وشر ما بعده";
					Tasbeeh.aim = 1;
					fadl.textContent = "";
					addToLocalStorage(Tasbeeh, name);
					break;
				case 44:
					startVibrate();
					Tasbeeh.count = 0;
					Tasbeeh.text =
						"اللهم عالم الغيب والشهادة فاطر السماوات والأرض رب كل شيء ومليكه، أشهد أنْ لا إله إلا أنت، أعوذ بك من شر نفسي ومن شر الشيطان وشركه، وأن أقترف على نفسي سوءًا، أو أجره إلى مسلم";
					Tasbeeh.aim = 1;
					fadl.textContent = "";
					addToLocalStorage(Tasbeeh, name);
					break;
				case 45:
					startVibrate();
					Tasbeeh.count = 0;
					Tasbeeh.text = "أعوذ بكلمات الله التامات من شر ما خلق";
					Tasbeeh.aim = 3;
					fadl.textContent = "";
					addToLocalStorage(Tasbeeh, name);
					break;
				case 48:
					startVibrate();
					Tasbeeh.count = 0;
					Tasbeeh.text = "اللهم  صلِّ وسلم على نبينا محمد";
					Tasbeeh.aim = 10;
					fadl.textContent =
						"من صلى عليّ حين يصبح وحين يُمسي، أدركته شفاعتي يوم القيامة	";
					addToLocalStorage(Tasbeeh, name);
					break;
				case 58:
					startVibrate();
					Tasbeeh.count = 0;
					Tasbeeh.text =
						"اللهم إنا نعوذ أن نشرك بك شيئًا نعلمه ونستغفرك لما لا نعلمه.";
					Tasbeeh.aim = 3;
					fadl.textContent = "";
					addToLocalStorage(Tasbeeh, name);
					break;
				case 61:
					startVibrate();
					Tasbeeh.count = 0;
					Tasbeeh.text =
						"اللهم إنى أعوذ بك من الهم والحزن، وأعوذ بك من العجز والكسل، وأعوذ بك من الجبن والبخل، وأعوذ بك من غلَبة الدَّين وقهر الرجال";
					Tasbeeh.aim = 3;
					fadl.textContent = "";
					addToLocalStorage(Tasbeeh, name);
					break;
				case 64:
					startVibrate();
					Tasbeeh.count = 0;
					Tasbeeh.text =
						"أستغفر الله العظيم الذي لا اله الا هو الحي القيوم وأتوب اليه.";
					Tasbeeh.aim = 3;
					fadl.textContent = "غفر له وإن كان عليه مثل زبد البحر";
					addToLocalStorage(Tasbeeh, name);
					break;
				case 67:
					startVibrate();
					Tasbeeh.count = 0;
					Tasbeeh.text =
						"اللهم إني أسألك علمًا نافعًا، ورزقًا طيبًا وعملًا متقبلًا.";
					Tasbeeh.aim = 1;
					fadl.textContent = "";
					// newOne(name);
					addToLocalStorage(Tasbeeh, name);
					break;
			}
			addToLocalStorage(Tasbeeh, name);
		}
		// add new
		newMain.onclick = () => {
			newOne(name);
		};
	};
}
function addFromLocalStorage(key) {
	Tasbeeh = JSON.parse(localStorage.getItem(key));
	pressText.textContent = Tasbeeh.text;
	aim.textContent = Tasbeeh.aim;
	count.textContent = Tasbeeh.count;
	if (key === "Tasbeeh5") {
		handelPressThree(key);
	} else if (key === "Tasbeeh6") {
		handelPressFour(key);
	} else if (key === "Tasbeeh2") {
		handelPressTwo(key);
	} else {
		handelPressOne(key);
	}
}

function newOne(params) {
	localStorage.removeItem(params);
	Tasbeeh.count = "0";
	Tasbeeh.text = "";
	Tasbeeh.aim = "0";
	window.scrollTo = 0;
	setTimeout(() => {
		location.reload();
	}, 500);
}
function handelFadl(secNum) {
	setTimeout(() => {
		fadl.style.opacity = "1";
		fadl.textContent = fdl[secNum - 1];
		handelColorChange();
	}, 1000);
}
function handelColorChange() {
	colorOne.style.opacity = "1";
	colorOne.style.transform = "translateX(0)";
	colorTwo.style.opacity = "1";
	colorTwo.style.transform = "translateX(0)";
	colorThree.style.opacity = "1";
	colorThree.style.transform = "translateX(0)";

	colorOne.onclick = () => {
		fadl.style.color = "var(--BackGround2)";
	};
	colorTwo.onclick = () => {
		fadl.style.color = "var(--Font-color1)";
	};
	colorThree.onclick = () => {
		fadl.style.color = "var(--BackGround3)";
	};
}

// Install sw
if (navigator.serviceWorker) {
	window.addEventListener("load", () => {
		navigator.serviceWorker
			.register("./sw.js")
			.then((reg) => console.log("service worker registed", reg))
			.catch((err) => console.log(err));
	});
}

// display Notification
const displayNotification = () => {
	if (Notification.permission === "granted") {
		const options = {
			body: "لا تنسى اذكار الصباح❤️.",
			icon: "./img/📿.svg",
			vibrate: [100, 50, 100],
			actions: [
				{ action: "yes", title: "اذكار الصباح" },
				{ action: "No", title: "ليس الان" },
			],
		};
		navigator.serviceWorker.getRegistration().then((reg) => {
			reg.showNotification("Welcome", options);
		});
	}
};
// Function to schedule the notification at 9:30 PM every day
// Using chatGPT
function scheduleNotification() {
	var now = new Date();
	var notificationTime = new Date(
		now.getFullYear(),
		now.getMonth(),
		now.getDate(),
		11, // 5 PM in 24-hour format
		25 // 00 minutes past the hour
	);
	if (notificationTime < now) {
		// If the notification time has already passed today, schedule it for tomorrow
		notificationTime.setDate(notificationTime.getDate() + 1);
	}
	var delay = notificationTime.getTime() - now.getTime();
	setTimeout(function () {
		displayNotification();
		// Schedule the next notification for the next day
		scheduleNotification();
	}, delay);
}

// Call the scheduleNotification function to start scheduling notifications
scheduleNotification();
const contactMe = () => {
	window.location.href = "https://wa.me201102654851";
};
// add Notification
Notification.requestPermission((status) => {
	console.log("status", status);
});

// vibration
const startVibrate = () => {
	console.log("vibrate");
	window.navigator?.vibrate?.([200, 0, 100]);
};
