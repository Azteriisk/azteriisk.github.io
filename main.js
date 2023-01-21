var unDonateButton = document.getElementById("undonate");
var tracker = document.getElementById("container");
let i = 0;

donate = function(){
    var donateButton = document.getElementById("donate");
    donateButton.style.color = 'red'
    tracker.innerHTML = '2';
}

donateButton.onclick = 'donate';