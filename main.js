const donateButton = document.getElementById('donate');
const unDonateButton = document.getElementById('undonate');
const tracker = document.querySelector('container');
let i = 0;

donateButton.addEventListener('click', donate);

const donate = function(){
    container.innerHTML = i++
}