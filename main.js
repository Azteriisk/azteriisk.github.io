var donateButton = document.getElementById("donate");
var unDonateButton = document.getElementById("undonate");
var tracker = document.getElementById("container");
let i = 0;

donate = function(){
    donateButton.style.color = 'red'
    donateButton.style.transition = ''
    tracker.innerHTML = '2';
}

donateButton.target.onclick = 'donate';