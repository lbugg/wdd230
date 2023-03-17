// define source
const source = 'json/data.json';

// pull json data
async function getBusinessData() {
    const response = await fetch(source);
    const data = await response.json();
    buildSpotlights(data.businesses);
}

// run function
getBusinessData();

// define grid display
const buildSpotlights = (spotlights) => {
    const cards = document.querySelector("section.spotlights"); // select the output container element

    // keep tally of businesses selected
    let buildCount = 0;

    // limit to gold membership
    const topSpotlights = spotlights.filter(spotlight => spotlight.membership == "Gold");

    // new spotlight list to hold chosen businesses
    const newSpotlights = [];

    // loop to choose 3 businesses with Gold membership
    while (buildCount < 3) {
        const currentChoice = topSpotlights[Math.floor(Math.random() * topSpotlights.length)];

        // add to chosen businesses list and remove from options
        newSpotlights.push(currentChoice);
        let index = topSpotlights.indexOf(currentChoice);
        if (index > -1) {
          topSpotlights.splice(index, 1);
        }
        buildCount++;
    }

    // count spotlights to add third-spotlight id
    let spotlightCount = 0;

    newSpotlights.forEach((spotlight) => {
        // increment spotlightCount
        spotlightCount++;

        // Create elements to add to the div.cards element
        let card = document.createElement("div");
        let logo = document.createElement("img");
        let name = document.createElement("h2");
        let website = document.createElement("p");
        let phone = document.createElement("p");
    
        // Build the image logo by setting all the relevant attributes
        logo.setAttribute("src", spotlight.image);
        logo.setAttribute("alt", `${name} logo`);
        logo.setAttribute("loading", "lazy");
        logo.setAttribute("width", "120");
        logo.setAttribute("height", "120");

        // Build the other content out to show the business information
        name.textContent = `${spotlight.name}`;
        website.textContent = `${spotlight.website}`;
        phone.textContent = `${spotlight.phone}`;

        // add third-spotlight id if relevant
        if (spotlightCount == 3) {
            card.setAttribute("id","third-spotlight");
        }
    
        // Append the section(card) with the created elements
        card.appendChild(logo);
        card.appendChild(name);
        card.appendChild(website);
        card.appendChild(phone);
    
        cards.appendChild(card);
    }) // end of forEach loop
} // end of function expression