const numberInput=document.getElementById("numberInput");
const timeInput=document.getElementById("timeInput");
const resultTotal=document.querySelector(".result");
const startBtn=document.getElementById("startBtn")
const resetBtn=document.getElementById("resetBtn");
    
let intervalId;

startBtn.onclick=()=>{
    intervalId=setInterval(()=>{
     resultTotal.textContent=numberInput.value
    },++timeInput.value)
}
resetBtn.onclick=()=>{
    clearInterval(intervalId)
    }


 let fromDate=document.getElementById("fromDate");
let untilDate=document.getElementById("untilDate");
const calculateBtn=document.getElementById("calculateBtn");
const totalNum=document.getElementById("total");

calculateBtn.onclick=()=>{
    const one=new Date(fromDate)
    const two=new Date(untilDate)
    const time=Math.abs(one-two);
    const days=Math.ceil(time/(1000*60*60*24));
    totalNum.innerHTML=days

}
