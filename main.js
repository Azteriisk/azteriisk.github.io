let donateButton = document.getElementById('donate');
let unDonateButton = document.getElementById('undonate');
let tracker = document.getElementById('container');
let i = 0;

donate = function(){
    donateButton.style.color = 'red'
    tracker.innerHTML = '2';
}

donateButton.onclick = 'donate';