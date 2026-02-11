const today = new Date();
const thisYear = today.getFullYear();
const footer = document.querySelector("footer");
const copyright = document.createElement("p");
copyright.innerHTML = `© Jonathan Stambuk ${thisYear}`;
footer.appendChild(copyright);

//List of Skills
const skills = ["JavaScript", "HTML", "CSS", "GitHub"];
const skillsSection = document.getElementById("Skills");
const skillsList = skillsSection.querySelector("ul");

for (let i = 0; i < skills.length; i++) {
    const skill = document.createElement("li");
    skill.innerText = skills[i];
    skillsList.appendChild(skill);
}