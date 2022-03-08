const numberInput=document.getElementById("numberInput");
const timeInput=document.getElementById("timeInput");
const resultTotal=document.querySelector(".result");
const startBtn=document.getElementById("startBtn")
const resetBtn=document.getElementById("resetBtn");
    
let intervalId;

let count=10;

startBtn.onclick=()=>{
    intervalId=setInterval(()=>{
     resultTotal.textContent=numberInput.value
    },timeInput.value)
}
resetBtn.onclick=()=>{
    clearInterval(intervalId)
}