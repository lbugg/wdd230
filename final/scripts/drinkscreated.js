// initialize display element
const drinksCreated = document.querySelector("#drinks-created");

// get the stored value in localStorage
let drinkCount = Number(window.localStorage.getItem("drinks-made"));
drinksCreated.textContent = `You have created ${drinkCount} drinks so far`;