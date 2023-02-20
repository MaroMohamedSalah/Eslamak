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
	"أذكار الصباح",
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
		Tasbeeh.text =
			"أَصبَحْنا على فِطرةِ الإسلامِ، وعلى كَلِمةِ الإخلاصِ، وعلى دِينِ نَبيِّنا محمَّدٍ صلَّى اللهُ عليه وسلَّمَ، وعلى مِلَّةِ أبِينا إبراهيمَ، حَنيفًا مُسلِمًا، وما كان مِنَ المُشرِكينَ";
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
				Tasbeeh.count = 0;
				Tasbeeh.text = "الحَمْـدُ لله";
				addToLocalStorage(Tasbeeh, name);
			} else if (Tasbeeh.mainCount === 66) {
				Tasbeeh.count = 0;
				Tasbeeh.text = " اللهُ أكْـبَر";
				addToLocalStorage(Tasbeeh, name);
			} else if (Tasbeeh.mainCount === 99) {
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
			switch (Tasbeeh.mainCount) {
				case 1:
					startVibrate();
					Tasbeeh.count = 0;
					Tasbeeh.text =
						"بسمِ اللهِ الذي لا يَضرُ مع اسمِه شيءٌ في الأرضِ ولا في السماءِ وهو السميعُ العليمِ";
					Tasbeeh.aim = 3;
					addToLocalStorage(Tasbeeh, name);
					break;
				case 4:
					startVibrate();
					Tasbeeh.count = 0;
					Tasbeeh.aim = 1;
					Tasbeeh.text = "سبحانَ اللَّهِ وبحمدِه لا قوَّةَ إلَّا باللَّهِ";
					fadl.textContent =
						"فإنَّهُ من قالَها حينَ يصبِحُ حُفِظَ حتَّى يمسيَ ومن قالَها حينَ يمسي حُفِظَ حتَّى يصبِحَ";
					addToLocalStorage(Tasbeeh, name);
					break;
				case 5:
					Tasbeeh.count = 0;
					Tasbeeh.text = "ما شاءَ اللَّهُ كانَ وما لم يشأ لم يَكن";
					Tasbeeh.aim = 1;
					fadl.textContent =
						"فإنَّهُ من قالَها حينَ يصبِحُ حُفِظَ حتَّى يمسيَ ومن قالَها حينَ يمسي حُفِظَ حتَّى يصبِحَ";
					addToLocalStorage(Tasbeeh, name);
					break;
				case 6:
					Tasbeeh.count = 0;
					Tasbeeh.text =
						"أعلمُ أنَّ اللَّهَ على كلِّ شيءٍ قديرٌ وأنَّ اللَّهَ قد أحاطَ بِكلِّ شيءٍ علمًا";
					Tasbeeh.aim = 1;
					fadl.textContent =
						"فإنَّهُ من قالَها حينَ يصبِحُ حُفِظَ حتَّى يمسيَ ومن قالَها حينَ يمسي حُفِظَ حتَّى يصبِحَ";
					addToLocalStorage(Tasbeeh, name);
					break;
				case 7:
					Tasbeeh.count = 0;
					Tasbeeh.text = "سبحانَ اللَّهِ وبحمدِهِ";
					Tasbeeh.aim = 100;
					fadl.textContent = "";
					addToLocalStorage(Tasbeeh, name);
					break;
				case 107:
					Tasbeeh.count = 0;
					Tasbeeh.text =
						"اللَّهمَّ بِكَ أصبَحنا، وبِكَ أمسَينا، وبِكَ نحيا وبِكَ نموتُ وإليكَ المصيرُ، وإذا أمسَى فليقُلْ: اللَّهمَّ بِكَ أمسَينا وبِكَ أصبَحنا وبِكَ نحيا وبِكَ نموتُ وإليكَ النُّشورُ";
					Tasbeeh.aim = 1;
					fadl.textContent = "";
					addToLocalStorage(Tasbeeh, name);
					break;
				case 108:
					Tasbeeh.count = 0;
					Tasbeeh.text =
						"رَضيتُ باللَّهِ ربًّا، وبالإسلامِ دينًا، وبِمُحمَّدٍ رسولً";
					Tasbeeh.aim = 1;
					fadl.textContent = "من قالها وجبت له الجنة";
					addToLocalStorage(Tasbeeh, name);
					break;
				case 109:
					Tasbeeh.count = 0;
					Tasbeeh.text =
						"اللَّهمَّ عالِمَ الغَيبِ والشَّهادةِ، فاطرَ السَّمواتِ والأرضِ، رَبَّ كلِّ شيءٍ ومَليكَهُ، أشهدُ أن لا إلَهَ إلَّا أنتَ، أعوذُ بِكَ مِن شرِّ نفسي وشرِّ الشَّيطانِ وشِركِهِ، قلهُ إذا أصبَحتَ، وإذا أمسَيتَ، وإذا أخَذتَ مَضجعَكَ";
					Tasbeeh.aim = 1;
					fadl.textContent = "";
					addToLocalStorage(Tasbeeh, name);
					break;
				case 110:
					Tasbeeh.count = 0;
					Tasbeeh.text =
						"اللَّهمَّ ما أصبحَ بي من نعمةٍ أو بأحدٍ من خلقِكَ فمنكَ وحدَكَ لا شريكَ لكَ فلكَ الحمدُ ولكَ الشُّكرُ";
					Tasbeeh.aim = 1;
					fadl.textContent =
						"فمن قالها عندما يُصبح فقد أدَّى شكرَ يومِهِ، ومن قالَ مثلَ ذلكَ حينَ يمسي فقد أدَّى شكرَ ليلتِهِ";
					addToLocalStorage(Tasbeeh, name);
					break;
				case 111:
					Tasbeeh.count = 0;
					Tasbeeh.text =
						"سُبْحَانَ اللهِ وَبِحَمْدِهِ، عَدَدَ خَلْقِهِ وَرِضَا نَفْسِهِ وَزِنَةَ عَرْشِهِ وَمِدَادَ كَلِمَاتِهِ";
					Tasbeeh.aim = 3;
					fadl.textContent = "";
					addToLocalStorage(Tasbeeh, name);
					break;
				case 114:
					Tasbeeh.count = 0;
					Tasbeeh.text =
						"حَسبيَ اللهُ لا إلهَ إلَّا هو، عليه تَوكَّلْتُ، وهو ربُّ العَرشِ العَظيمِ";
					Tasbeeh.aim = 7;
					fadl.textContent =
						"فمن قالها كَفاه اللهُ ما أهَمَّه من أمرِ الدُّنيا والآخِرةِ";
					addToLocalStorage(Tasbeeh, name);
					break;
				case 121:
					Tasbeeh.count = 0;
					Tasbeeh.text =
						"اللَّهُمَّ إنِّي أصبَحتُ أُشهِدُك، وأُشهِدُ حَمَلةَ عَرشِكَ، ومَلائِكَتَك، وجميعَ خَلقِكَ: أنَّكَ أنتَ اللهُ لا إلهَ إلَّا أنتَ، وأنَّ مُحمَّدًا عبدُكَ ورسولُكَ";
					Tasbeeh.aim = 1;
					fadl.textContent = "";
					addToLocalStorage(Tasbeeh, name);
					break;
				case 122:
					Tasbeeh.count = 0;
					Tasbeeh.text =
						"اللهمَّ ما أصبحَ بي منْ نعمةٍ أو بأحدٍ منْ خلقِكَ فمنكَ وحدكَ لا شريكَ لكَ، فلك الحمدُ ولك الشُّكر";
					Tasbeeh.aim = 1;
					fadl.textContent =
						"من قالها حين يصبح وحين يمسي فقد أدى شكرَ ذلك اليومَ";
					addToLocalStorage(Tasbeeh, name);
					break;
				case 123:
					Tasbeeh.count = 0;
					Tasbeeh.text =
						"أَصْـبَحْنا وَأَصْـبَحَ المُـلْكُ لله وَالحَمدُ لله، لا إلهَ إلاّ اللّهُ وَحدَهُ لا شَريكَ لهُ، لهُ المُـلكُ ولهُ الحَمْـد، وهُوَ على كلّ شَيءٍ قدير، رَبِّ أسْـأَلُـكَ خَـيرَ ما في هـذا اليوم وَخَـيرَ ما بَعْـدَه، وَأَعـوذُ بِكَ مِنْ شَـرِّ ما في هـذا اليوم وَشَرِّ ما بَعْـدَه، رَبِّ أَعـوذُ بِكَ مِنَ الْكَسَـلِ وَسـوءِ الْكِـبَر، رَبِّ أَعـوذُ بِكَ مِنْ عَـذابٍ في النّـارِ وَعَـذابٍ في القَـبْر";
					Tasbeeh.aim = 1;
					fadl.textContent = "";
					addToLocalStorage(Tasbeeh, name);
					break;
				case 124:
					Tasbeeh.count = 0;
					Tasbeeh.text =
						"اللَّهُمَّ صَلِّ وَسَلِّمْ وَبَارِكْ على نَبِيِّنَا مُحمَّد";
					Tasbeeh.aim = 1;
					fadl.textContent =
						"فقد جاء في الحديث: (مَن صلى عَلَيَّ حين يُصْبِحُ عَشْرًا، وحين يُمْسِي عَشْرًا أَدْرَكَتْه شفاعتي يومَ القيامةِ";
					addToLocalStorage(Tasbeeh, name);
					break;
				case 125:
					Tasbeeh.count = 0;
					Tasbeeh.text =
						"أستغفرُ اللهَ العظيمَ الذي لا إلهَ إلَّا هو الحيَّ القيومَ وأتوبُ إليه";
					Tasbeeh.aim = 1;
					fadl.textContent = "";
					addToLocalStorage(Tasbeeh, name);
					break;
				case 126:
					Tasbeeh.count = 0;
					Tasbeeh.text =
						"لا إلهَ إلَّا اللهُ وحدَه لا شريكَ له له الملكُ وله الحمدُ وهو على كلِّ شيءٍ قديرٌ";
					Tasbeeh.aim = 1;
					fadl.textContent = "";
					addToLocalStorage(Tasbeeh, name);
					break;
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
function addFromLocalStorage(key) {
	Tasbeeh = JSON.parse(localStorage.getItem(key));
	pressText.textContent = Tasbeeh.text;
	aim.textContent = Tasbeeh.aim;
	count.textContent = Tasbeeh.count;
	if (key === "Tasbeeh5") {
		handelPressThree(key);
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

// Trigger the prompt
// let defferredPrompt;
// window.addEventListener("beforeinstallprompt", (e) => {
// 	console.log(e);
// 	e.preventDefault();
// 	defferredPrompt = e;
// });
// const handelClick = () => {
// 	defferredPrompt.prompt();
// 	defferredPrompt.userChoice.then((choiceResult) => {
// 		if (choiceResult.outCome === "accepted") {
// 			console.log("accepted");
// 		}
// 		defferredPrompt = null;
// 	});
// };
// handelClick();

// detect time
// function timeToAlert() {
// 	alert("The time is 4:35 AM");
// }
// var timeIsBeing936 = new Date("04:38:00 PM").getTime(),
// 	currentTime = new Date().getTime(),
// 	subtractMilliSecondsValue = timeIsBeing936 - currentTime;
// setTimeout(timeToAlert, subtractMilliSecondsValue);

// display Notification
const displayNotification = () => {
	if (Notification.permission === "granted") {
		const options = {
			body: "مرحبا بك في سبح, هذا اشعار تجريبي ^_^.",
			icon: "./img/📿.svg",
			vibrate: [100, 50, 100],
			actions: [
				{ action: "Yes", title: "Go to the site" },
				{ action: "No", title: "still here" },
			],
		};
		navigator.serviceWorker.getRegistration().then((reg) => {
			reg.showNotification("اهلا بك", options);
		});
	}
};
displayNotification();
// add Notification
Notification.requestPermission((status) => {
	console.log("status", status);
});

// vibration
const startVibrate = () => {
	console.log("vibrate");
	window.navigator?.vibrate?.([200, 0, 100]);
};
