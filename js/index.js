const today = new Date();
const thisYear = today.getFullYear();
const footer = document.querySelector("footer");
const copyright = document.createElement("p");
copyright.innerHTML = `© Jonathan Stambuk ${thisYear}`;
footer.appendChild(copyright);