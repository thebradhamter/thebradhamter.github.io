const usernamesText = document.getElementById("usernamesText");
const usernames = document.getElementById("usernames");
const projectsText = document.getElementById("projectsText");
const projectCards = document.getElementById("projectCards");
const profilesText = document.getElementById("profilesText");
const profileCards = document.getElementById("profileCards");
let usernamesHidden = true;
let projectsHidden = false;
let profilesHidden = false;

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

profilesText.addEventListener("click", () => {
    profilesHidden = !profilesHidden;
    profileCards.style.display = profilesHidden ? "none" : "flex";
    if (profilesHidden) {
        profilesText.innerHTML = "Profiles ↓";
    } else {
        profilesText.innerHTML = "Profiles ↑";
    }
});

usernames.hidden = true;
projectCards.hidden = false;
profileCards.hidden = true;