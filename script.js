const buttons = document.querySelectorAll(".button");
const result = document.querySelector("#result");


// Event listeners to the buttons
buttons.forEach(button => {
    button.addEventListener("click", () => {
        result.value += button.value;
    });
}); 
document.querySelector(".allClear").addEventListener("click", ()=>{
    result.value = "";
});
document.querySelector(".delete").addEventListener("click", ()=>{
    result.value = result.value.toString().slice(0, -1);
});
document.querySelector(".equalBtn").addEventListener("click",()=>{
    try {
        result.value = eval(result.value);
    } catch (err) {
        result.value = "Unsupported Operation! Try Again."
    }
})
