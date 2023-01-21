const donateButton = document.getElementById('donate');
const unDonateButton = document.getElementById('undonate');
const tracker = document.getElementById('container');
let i = 0;

donateButton.addEventListener('click', donate);

const donate = function(tracker){
    tracker.innerHTML = 'i++'
}