const usernamesText = document.getElementById("usernamesText");
const usernames = document.getElementById("usernames");
const projectsText = document.getElementById("projectsText");
const projectCards = document.getElementById("projectCards");
let usernamesHidden = true;
let projectsHidden = false;

usernamesText.addEventListener("click", () => {
    usernamesHidden = !usernamesHidden;
    usernames.hidden = usernamesHidden;
    if (usernamesHidden) {
        usernamesText.innerHTML = "Usernames ↓";
    } else {
        usernamesText.innerHTML = "Usernames ↑";
    }
});

projectsText.addEventListener("click", () => {
    projectsHidden = !projectsHidden;
    projectCards.style.display = projectsHidden ? "none" : "flex";
    if (projectsHidden) {
        projectsText.innerHTML = "Projects ↓";
    } else {
        projectsText.innerHTML = "Projects ↑";
    }
});

projectCards.hidden = false;