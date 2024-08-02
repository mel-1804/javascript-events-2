let countries = ["USA", "France", "Italy", "Brazil", "Colombia", "Belize", "Venezuela"];

// Your code here
let input = document.getElementById("mySelect");

for (let i = 0; i < countries.length; i++){
    let option = document.createElement("option");
    option.value = countries[i];
    option.innerHTML = countries[i];
    input.appendChild(option);
    
}

input.addEventListener("change", function () {
    let pais = input.value;
    alert(pais);
});

