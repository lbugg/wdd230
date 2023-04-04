// define source
const source = "json/fruit.json";

let fruitData = "";

// pull json data
async function getFruitData() {
    const fruitResponse = await fetch(source);
    fruitData = await fruitResponse.json();
        listFruit(fruitData);
}

// run function
getFruitData();

// add to select lists
const listFruit = (fruits) => {
    const list1 = document.querySelector("#fruit1"); // select the output container elements
    const list2 = document.querySelector("#fruit2");
    const list3 = document.querySelector("#fruit3");

    fruits.forEach((fruit) => {
        // Create elements to add to the select lists
        let fruitItem1 = document.createElement("option");
        let fruitItem2 = document.createElement("option");
        let fruitItem3 = document.createElement("option");
    
        // Add the name and value to the options
        fruitItem1.textContent = `${fruit.name}`;
        fruitItem1.value = `${fruit.name}`;
        fruitItem2.textContent = `${fruit.name}`;
        fruitItem2.value = `${fruit.name}`;
        fruitItem3.textContent = `${fruit.name}`;
        fruitItem3.value = `${fruit.name}`;

        // Append the selects with the options
        list1.appendChild(fruitItem1);
        list2.appendChild(fruitItem2);
        list3.appendChild(fruitItem3);
    }) // end of forEach loop
} // end of function expression

// define function
const displayDrink = (fruits) => {
    const displayLocation = document.querySelector("main"); // select the output container elements

    // Create elements to add to the output
    const order = document.createElement("section");
    const firstName = document.createElement("p");
    const email = document.createElement("p");
    const phone = document.createElement("p");
    const firstFruit = document.createElement("p");
    const secondFruit = document.createElement("p");
    const thirdFruit = document.createElement("p");
    const instructions = document.createElement("p");
    const orderDate = document.createElement("p");
    const carbs = document.createElement("p");
    const protein = document.createElement("p");
    const fat = document.createElement("p");
    const sugar = document.createElement("p");
    const calories = document.createElement("p");

    // add class to order section
    order.classList.add("order");

    // Add content to elements
    const nameInput = document.querySelector("#first-name");
    firstName.textContent = `Name: ${nameInput.value}`;
    const emailInput = document.querySelector("#email");
    email.textContent = `Email: ${emailInput.value}`;
    const phoneInput = document.querySelector("#phone");
    phone.textContent = `Phone: ${phoneInput.value}`;
    const firstChoice = document.querySelector("#fruit1");
    firstFruit.textContent = `1st Fruit: ${firstChoice.value}`;
    const secondChoice = document.querySelector("#fruit2");
    secondFruit.textContent = `2nd Fruit: ${secondChoice.value}`;
    const thirdChoice = document.querySelector("#fruit3");
    thirdFruit.textContent = `3rd Fruit: ${thirdChoice.value}`;
    const instructionInput = document.querySelector("#special-instructions");
    instructions.textContent = `Special Instructions: ${instructionInput.value}`;

    // Calculate dietary info
    let carbCount = 0;
    let proteinCount = 0;
    let fatCount = 0;
    let sugarCount = 0;
    let calorieCount = 0;

    fruits.forEach((fruit) => {
        if (fruit.name == firstChoice.value || fruit.name == secondChoice.value || fruit.name == thirdChoice.value) {
            carbCount += fruit.nutritions.carbohydrates;
            proteinCount += fruit.nutritions.protein;
            fatCount += fruit.nutritions.fat;
            sugarCount += fruit.nutritions.sugar;
            calorieCount += fruit.nutritions.calories;
        }
    })

    // Add dietary info to elements
    carbs.textContent = `Total Carbs: ${carbCount}`;
    protein.textContent = `Total Protein: ${proteinCount}`;
    fat.textContent = `Total Fat: ${fatCount}`;
    sugar.textContent = `Total Sugar: ${sugarCount}`;
    calories.textContent = `Total Calories: ${calorieCount}`;

    // Calculate current date and add to element
    let currentTime = Date.now();
    currentTime = new Intl.DateTimeFormat('en-US').format(currentTime);
    orderDate.textContent = `Date of order: ${currentTime}`;

    // Add elements to section
    order.appendChild(firstName);
    order.appendChild(email);
    order.appendChild(phone);
    order.appendChild(firstFruit);
    order.appendChild(secondFruit);
    order.appendChild(thirdFruit);
    order.appendChild(instructions);
    order.appendChild(carbs);
    order.appendChild(protein);
    order.appendChild(fat);
    order.appendChild(sugar);
    order.appendChild(calories);
    order.appendChild(orderDate);

    // Add section to main
    displayLocation.appendChild(order);

    // Add to drink tracker
    let drinksMade = Number(window.localStorage.getItem("drinks-made"));
    drinksMade++;
    localStorage.setItem("drinks-made", drinksMade);
}

// add event listeners
const submitButton = document.querySelector(".submitBtn");

submitButton.addEventListener("click", () => {
	displayDrink(fruitData);
});