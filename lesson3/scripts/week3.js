const year = document.querySelector("#year");

year.textContent = new Date().getFullYear();

const lastMod = document.querySelector("#lastModified");

lastMod.textContent = new Date(document.lastModified).toLocaleString();