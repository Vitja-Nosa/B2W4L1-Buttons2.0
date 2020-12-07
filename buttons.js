var button1 = document.getElementById("button1");
var button2 = document.getElementById("button2");
var button3 = document.getElementById("button3");

var container = document.getElementById("container")
var numberImage = document.getElementById("numberImage");

var button1Clicks = 0;
var button2Clicks = 0;
var button3Clicks = 0;

button1.addEventListener("click", button1Event);
button2.addEventListener("click", button2Event);
button3.addEventListener("click", button3Event);

function button1Event() {
	if (button1.style.backgroundColor != "red") {
		button1Clicks = button1Clicks + 1;
		button1.style.backgroundColor = "red";
		button1.innerHTML = button1Clicks;
		button2.style.backgroundColor = "#4CB050";
		button3.style.backgroundColor = "#4CB050";
		container.style.backgroundImage = "url(images/bg1.jpg)"
		numberImage.src = "images/1.jpg"
	}
}
function button2Event() {
	if (button2.style.backgroundColor != "red") {
		button2Clicks = button2Clicks + 1;
		button2.style.backgroundColor = "red";
		button2.innerHTML = button2Clicks;
		button1.style.backgroundColor = "#4CB050";
		button3.style.backgroundColor = "#4CB050";
		container.style.backgroundImage = "url(images/bg2.jpg)"
		numberImage.src = "images/2.jpg"
	}
}
function button3Event() {
	if (button3.style.backgroundColor != "red") {
		button3Clicks = button3Clicks + 1;
		button3.style.backgroundColor = "red";
		button3.innerHTML = button3Clicks;
		button2.style.backgroundColor = "#4CB050";
		button1.style.backgroundColor = "#4CB050";
		container.style.backgroundImage = "url(images/bg3.jpg)"
		numberImage.src = "images/3.jpg"
	}
}