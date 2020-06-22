const form = document.querySelector(".js-form"),
    input = form.querySelector("input"),
    greeting = document.querySelector(".js-greetings");

const userLs = "currentUser",
    showingCN = "showing";

function saveName(text){
    localStorage.setItem(userLs, text);
}
function handleSubmit(event){
    event.preventDefault();
    const currentVal = input.value;
    paintGreeting(currentVal);
    saveName(currentVal);
}
function askForName() {
    form.classList.add(showingCN);
    form.addEventListener("submit",handleSubmit);
}
function paintGreeting(text) {
    form.classList.remove(showingCN);
    greeting.classList.add(showingCN);
    greeting.innerText = `Hello!! ${text}`;
}

function loadName() {
    const currentUser = localStorage.getItem(userLs);
    if (currentUser === null) {
        askForName();
    } else {
        paintGreeting(currentUser);
    }
}


function init() {
    loadName();
}

init();