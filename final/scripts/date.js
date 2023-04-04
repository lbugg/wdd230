// show dynamic year
const year = document.querySelector("#year");

year.textContent = new Date().getFullYear();

// show last modified
const lastMod = document.querySelector("#lastModified");

lastMod.textContent = new Date(document.lastModified).toLocaleString();