// Your code here
const deleteLi = document.querySelectorAll("li");

for (let i = 0; i < deleteLi.length; i++) {
    deleteLi[i].firstElementChild.firstElementChild.addEventListener("click", (e) => {
        // console.log(e.target.parentElement)
        // console.log(deleteLi[i].firstElementChild.firstElementChild)
        e.target.parentElement.parentElement.remove()
    })
}





const inputTarea = document.getElementById("addToDo");
let myList = document.querySelector("ul");
const newItem = document.createElement("li");

inputTarea.addEventListener("change", (e) => {
    newItem.innerHTML = `<span><i class="fa fa-trash"></i></span> ${inputTarea.value}`;
    myList.appendChild(newItem);
    // console.log(inputTarea)
})

inputTarea.addEventListener("keypress", (e) => {
    if(e.key = "Enter") {
    newItem.innerHTML = `<span><i class="fa fa-trash"></i></span> ${inputTarea.value}`;
    myList.appendChild(newItem);
    }
// console.log(e.key)
      
    
    
})