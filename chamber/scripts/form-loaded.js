// initialize display element
const formLoaded = document.querySelector("#dateTime");

//calculate current date and time
let currentTime = Date.now();
currentTime = new Intl.DateTimeFormat("en-UK", { dateStyle: "full", timeStyle: "long" }).format(currentTime);

//set hidden input to current date and time
formLoaded.textContent = currentTime;