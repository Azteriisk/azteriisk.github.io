const donateButton = document.getElementById("donate");
const unDonateButton = document.getElementById("undonate");
const tracker = document.getElementById("container");
const body = document.querySelector("body");
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

randomColor = function() {
    var r = Math.floor(Math.random() * 255)+ 1
    var g = Math.floor(Math.random() * 255)+ 1
    var b = Math.floor(Math.random() * 255)+ 1
    console.log("body.style.backgroundColor = 'rgb(" + r + "," + g + "," + b + ")'");
    body.style.backgroundColor = 'rgb(' + r + ',' + g + ',' + b + ')';
    donateButton.style.backgroundColor = '';
    donateButton.style.color = '';
    unDonateButton.style.backgroundColor = '';
    unDonateButton.style.color = '';
}

donateButton.onclick = donate;
unDonateButton.onclick = undonate;
tracker.onclick = randomColor;