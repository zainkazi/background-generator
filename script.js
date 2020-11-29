var body = document.getElementById("gradient");
var css = document.getElementById("css");
var color1 = document.getElementById("color1");
var color2 = document.getElementById("color2");

function setGradient() {
	body.style.background = "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";
	css.textContent = body.style.background + ";";

}

color1.addEventListener("input", setGradient);
color2.addEventListener("input" , setGradient);