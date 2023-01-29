const donateButton = document.getElementById("donate");
const unDonateButton = document.getElementById("undonate");
const tracker = document.getElementById("container");
var i = 0;

tracker.innerHTML = i;

donate = function(){
    unDonateButton.style.backgroundColor = '';
    unDonateButton.style.color = '';
    donateButton.style.backgroundColor = 'red';
    donateButton.style.color = 'white';
    tracker.innerHTML = ++i;
}

undonate = function(){
    donateButton.style.backgroundColor = '';
    donateButton.style.color = '';
    unDonateButton.style.backgroundColor = 'blue';
    unDonateButton.style.color = 'white';
    tracker.innerHTML = --i;
}

reset = function() {
    donateButton.style.backgroundColor = '';
    donateButton.style.color = '';
    unDonateButton.style.backgroundColor = '';
    unDonateButton.style.color = '';
}

donateButton.onclick = donate;
unDonateButton.onclick = undonate;
tracker.onclick = reset;