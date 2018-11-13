var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var color3 = document.querySelector(".color3");
var body = document.getElementById("gradient");
var info = document.querySelector(".info-bg");
var btn = document.querySelector("#random");

function setGradient() {
	body.style.background = "linear-gradient(to right, " 
	+ color1.value 
	+ ", " 
	+ color2.value
	+ ", " 
	+ color3.value  
	+ ")";

	css.textContent = body.style.background + ";";
}

// to get random hex code
function random_hex() {
    // previously, i was created using rgb and i change to hex
    // below it, here's the random rgb generator
    // var o = Math.round, r = Math.random, s = 255;
    // return 'rgb(' + o(r()*s) + ',' + o(r()*s) + ',' + o(r()*s) + ')';
    // now change to random hex generator
    return '#'+(Math.random()*0xFFFFFF<<0).toString(16);
}

// create random gradient number
function getRandomColor(){
	var x = random_hex();
	var y = random_hex();
	var z = random_hex();

	color1.value = x;
	color2.value = y;
	color3.value = z;

	body.style.background = 
	"linear-gradient(to right, " 
	+ color1.value 
	+ ", " 
	+ color2.value
	+ ", " 
	+ color3.value  
	+ ")";

	info.textContent = "Random Css Background";
	css.textContent = body.style.background + ";";

	// help me to debug the function
	// console.log("linear-gradient(to right, " 
	// + color1.value 
	// + ", " 
	// + color2.value
	// + ", " 
	// + color3.value  
	// + ")");
}

// to show gradient background color at the first load
function firstLoad(){
	// body.style.background = "white";
	body.style.background = 
	"linear-gradient(to right, " 
	+ color1.value 
	+ ", " 
	+ color2.value
	+ ", " 
	+ color3.value  
	+ ")";
	css.textContent = body.style.background + ";";

}


// run the functions 
firstLoad();

btn.addEventListener("click", getRandomColor);

color1.addEventListener("input" , setGradient);
color2.addEventListener("input" , setGradient);
color3.addEventListener("input" , setGradient);
