const donateButton = document.getElementById("donate");
const unDonateButton = document.getElementById("undonate");
const tracker = document.getElementById("container");
var i = 0;

tracker.innerHTML = i;

donate = function(){
    donateButton.style.backgroundColor = 'red';
    tracker.innerHTML = ++i;
}

undonate = function(){
    unDonateButton.style.backgroundColor = 'blue';
    tracker.innerHTML = --i;
}

donateButton.onclick = donate;
unDonateButton.onclick = undonate;