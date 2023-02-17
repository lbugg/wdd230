// initialize display element
const lastVisitedDays = document.querySelector(".last-visited");

// calculate current time
let today = Date.now();

// get the stored value in localStorage
let lastVisited = Number(window.localStorage.getItem("last-visit"));

// if stored value is 0, print first visit message
if (lastVisited == 0) {
    lastVisitedDays.textContent = "This is your first visit!";
}
// otherwise, print days since last visit
else {
    let daysSince = (today - lastVisited) / 84600000;
    daysSince = daysSince.toFixed(0);
    lastVisitedDays.textContent = `It has been ${daysSince} days since your last visit`;
}

// reset lastVisited timer
localStorage.setItem("last-visit", today);