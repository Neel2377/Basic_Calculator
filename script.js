function sum(){
const num1 = document.getElementById("num1").value;
const num2 = document.getElementById("num2").value;
document.getElementById("result").value = num1 + num2;
}

function sub(){
const num1 = document.getElementById("num1").value;
const num2 = document.getElementById("num2").value;
document.getElementById("result").value = num1-num2;
}

function mul(){
const num1 = document.getElementById("num1").value;
const num2 = document.getElementById("num2").value;
document.getElementById("result").value = num1*num2;
}

function div(){
const num1 = document.getElementById("num1").value;
const num2 = document.getElementById("num2").value;
document.getElementById("result").value = num1/num2;
}

function cle(){
document.getElementById("result").value = null;
}

