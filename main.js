window.onload = function(){ 
var donateButton = document.getElementById("donate");
var unDonateButton = document.getElementById("undonate");
var tracker = document.getElementById("container");
let i = 0;

donate = function(){
    donateButton.style.color = 'red'
    tracker.innerHTML = '2';
}

donateButton.onclick = 'donate';
}