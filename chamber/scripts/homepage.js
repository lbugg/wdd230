// get today's date
const datefield = document.querySelector(".date");

const now = new Date();
const fulldate = new Intl.DateTimeFormat("en-UK", { dateStyle: "full" }).format(
	now
);

datefield.innerHTML = `<em>${fulldate}</em>`;

// show dynamic year
const year = document.querySelector("#year");

year.textContent = new Date().getFullYear();

// show last modified
const lastMod = document.querySelector("#lastModified");

lastMod.textContent = new Date(document.lastModified).toLocaleString();

// toggle responsive navigation
const mainnav = document.querySelector('.navigation')
const hambutton = document.querySelector('#menu');
hambutton.addEventListener('click', () => {mainnav.classList.toggle('responsive')}, false);