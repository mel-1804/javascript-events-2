let button = document.getElementById("superDuperButton");
button.addEventListener("click", function() {
	// Your code here

	let elem = document.createElement("li");
	elem.innerHTML = "Forth element";
	let myList = document.getElementById("myList")
	myList.appendChild(elem)
	
});
