const numberInput=document.getElementById("numberInput");
const timeInput=document.getElementById("timeInput");
const resultTotal=document.querySelector(".result");
const startBtn=document.getElementById("startBtn")
const resetBtn=document.getElementById("resetBtn");
    
let intervalId;

startBtn.onclick=()=>{
    intervalId=setInterval(()=>{
     resultTotal.textContent=--numberInput.value
    },timeInput.value)
}
resetBtn.onclick=()=>{
    clearInterval(intervalId)
    }


 const fromDate=document.getElementById("fromDate");
const untilDate=document.getElementById("untilDate");
const calculateBtn=document.getElementById("calculateBtn");
const totalNum=document.getElementById("total");

calculateBtn.onclick=()=>{
    const one=new Date(fromDate.value)
    const two=new Date(untilDate.value)
    const time=Math.abs(one-two);
    const days=(two-one)/1000/60/60/24
totalNum.textContent=`${Math.round(days/30)} мес ${days%30} д`

}
