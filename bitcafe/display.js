const MENU = document.querySelectorAll(".menu");
const cofBtn = document.querySelector(".btn-cof");
const bevBtn = document.querySelector(".btn-bev");
const desBtn = document.querySelector(".btn-des");
const etcBtn = document.querySelector(".btn-etc");

function choiceMenu(btn){
	
}
function click(menuClass) {
	removeShowing();
	menuClass.classList.add("showing");
}

function removeShowing() {
	for (var i=0; i<MENU.length;i++) {
		if (MENU[i].classList.contains("showing")) {
			MENU[i].classList.remove("showing");
		}
	}
}
function displayCofMenu() {
	// console.log("clickc");
	const menuClass = document.querySelector(".coffee");
	click(menuClass);
}

function displayBevMenu() {
	console.log("clickb");
	const menuClass = document.querySelector(".beverage");
	click(menuClass);
}

function displayDesMenu() {
	console.log("clickd");
	const menuClass = document.querySelector(".desert");
	click(menuClass);
}

function displayEtcMenu() {
	console.log("clicke");
	const menuClass = document.querySelector(".etc");
	click(menuClass);
}
function printDisplay(){
	cofBtn.addEventListener("click", displayCofMenu);
	bevBtn.addEventListener("click", displayBevMenu);
	desBtn.addEventListener("click", displayDesMenu);
	etcBtn.addEventListener("click", displayEtcMenu);
}



function init() {
	
	// console.log(cofBtn.innerText);
	printDisplay();
}
init();