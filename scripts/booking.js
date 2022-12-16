/********* create variables *********/
// useful variables might be: the cost per day, the number of days selected, and elements on the screen that will be clicked or will need to be modified. 
// Do any of these variables need to be initialized when the page is loaded? 
// When do they need to be reset or updated?

let costPerDay = 0;
let numberOfDays = 0;

const mondButton = document.getElementById("monday");
const tuesButton = document.getElementById("tuesday");
const wedButton = document.getElementById("wednesday");
const thursButton = document.getElementById("thursday");
const friButton = document.getElementById("friday");
const fullButton = document.getElementById("full");
const halfButton = document.getElementById("half");
const clearButton = document.getElementById("clear");
const calculatedCost = document.getElementById("calculated-cost");

/********* colour change days of week *********/
// when the day buttons are clicked, we will apply the "clicked" class to that element, and update any other relevant variables. Then, we can recalculate the total cost.
// added challenge: don't update the dayCounter if the same day is clicked more than once. hint: .classList.contains() might be helpful here!

function select(element){
    element.classList.add("blue-hover-selected");
}

function reset() {
    mondButton.classList.remove("blue-hover-selected");
    tuesButton.classList.remove("blue-hover-selected");
    wedButton.classList.remove("blue-hover-selected");
    thursButton.classList.remove("blue-hover-selected");
    friButton.classList.remove("blue-hover-selected");
}

function onMondButton(e) {
    e.preventDefault();
    reset();
    select(mondButton);
}

function onTuesButton(e) {
    e.preventDefault();
    reset();
    select(tuesButton);
}

function onWedButton(e) {
    e.preventDefault();
    reset();
    select(wedButton);
}

function onThursButton(e) {
    e.preventDefault();
    reset();
    select(thursButton);
}

function onFriButton(e) {
    e.preventDefault();
    reset();
    select(friButton);
}

function onFullButton(e) {
    e.preventDefault();
}

function onHalfButton(e) {
    e.preventDefault();
}

function onClearButton(e) {
    e.preventDefault();
}

mondButton.onclick = onMondButton;
tuesButton.onclick = onTuesButton;
wedButton.onclick = onWedButton;
thursButton.onclick = onThursButton;
friButton.onclick = onFriButton;
fullButton.onclick = onFullButton;
halfButton.onclick = onHalfButton;
clearButton.onclick = onClearButton;


/********* clear days *********/
// when the clear-button is clicked, the "clicked" class is removed from all days, any other relevant variables are reset, and the calculated cost is set to 0.

function clear(e) {
    e.preventDefault();
    costPerDay = 0
    reset();
}



/********* change rate *********/
// when the half-day button is clicked, set the daily rate to $20, add the "clicked" class to the "half" element, remove it from the "full" element, and recalculate the total cost.

halfButton.onclick = function(e) {
    e.preventDefault();
    costPerDay = 20;
    calculate();
}


// when the full-day button is clicked, the daily rate is set back to $35, the clicked class is added to "full" and removed from "half", and the total cost is recalculated.

fullButton.onclick = function(e) {
    e.preventDefault();
    costPerDay = 35;
    calculate();
}



/********* calculate *********/
// when a calculation is needed, set the innerHTML of the calculated-cost element to the appropriate value

function calculate() {
    calculatedCost.textContent = `$${costPerDay.toFixed(2)}`;
}
