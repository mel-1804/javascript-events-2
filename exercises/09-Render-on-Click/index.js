let button = document.getElementById("superDuperButton");
button.addEventListener("click", function() {
	// Your code here
	
let elem = document.createElement("p");
elem.innerHTML = "Hello World";
document.body.appendChild(elem)
elem.style.background = "yellow"
});
