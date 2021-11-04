// import functions and grab DOM elements
const catImage = document.getElementById('cat-image');
const catSound = document.getElementById('cat-sound');
const dogImage = document.getElementById('dog-image');
const dogSound = document.getElementById('dog-sound');
const horseImage = document.getElementById('horse-image');
const horseSound = document.getElementById('horse-sound');
const headerBox = document.getElementById('header-box');

// initialize global state
let catClick = 0; 
let dogClick = 0;
let horseClick = 0;
// set event listeners 
  // get user input
  // use user input to update state 
  // update DOM to reflect the new state
catImage.addEventListener('click', () =>{
    catSound.play();
    console.log(catClick); catClick++;
    headerBox.textContent = ('You clicked on the Cat!');
});

dogImage.addEventListener('click', () =>{
    dogSound.play();
    console.log(dogClick); dogClick++;
    headerBox.textContent = ('You clicked on the Dog!');
});

horseImage.addEventListener('click', () =>{
    horseSound.play();
    console.log(horseClick); horseClick++;
    headerBox.textContent = ('You clicked on the Horse!');
});

document.addEventListener('keydown', (event) => {
    if (event.key === 'c'){
        catSound.play();
        headerBox.textContent = ('You clicked the Cat!');
    }
});

document.addEventListener('keydown', (event) => {
    if (event.key === 'd'){
        dogSound.play();
        headerBox.textContent = ('You clicked the Dog!');
    }
});

document.addEventListener('keydown', (event) => {
    if (event.key === 'h'){
        horseSound.play();
        headerBox.textContent = ('You clicked the Horse!');
    }
});