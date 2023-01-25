
var donateButton = document.getElementById("donate");
var unDonateButton = document.getElementById("undonate");
var tracker = document.getElementById("container");
let i = 0;

donate = function(){
    donateButton.style.backgroundColor = 'red';
    tracker.innerHTML = i++;
}

undonate = function(){
    unDonateButton.style.backgroundColor = 'blue';
    tracker.innerHTML = i--;
}

donateButton.addEventListener('click', donate());

unDonateButton.addEventListener('click', donate());