
//task1:

const themeBtn = document.getElementById("themeBtn");

function changeTheme() {

    document.body.classList.toggle("dark-mode");

    if (document.body.classList.contains("dark-mode")) {
        themeBtn.textContent = "Light Mode";
    } else {
        themeBtn.textContent = "Dark Mode";
    }

}

themeBtn.addEventListener("click", changeTheme);


//task2:

const moreBtn = document.getElementById("moreBtn");
const moreText = document.getElementById("moreText");

moreText.style.display = "none";

function showMore() {

    if (moreText.style.display === "none") {
        moreText.style.display = "block";
        moreBtn.textContent = "Show Less";
    } else {
        moreText.style.display = "none";
        moreBtn.textContent = "Show More";
    }

}

moreBtn.addEventListener("click", showMore);


//task3:

const projects = [
    {
        title: "Personal CV Website",
        description: "A website that displays my personal CV.",
        category: "Web",
        technologies: "HTML, CSS, JavaScript"
    },

    {
        title: "Student Management System",
        description: "A program to manage student information.",
        category: "Programming",
        technologies: "Java"
    }
];

const projectsContainer = document.getElementById("projects-container");


//task4:

function displayProjects(category) {

    projectsContainer.innerHTML = "";

    const filteredProjects = projects.filter(function(project) {
        return category === "All" || project.category === category;
    });

    filteredProjects.forEach(function(project) {

        const card = document.createElement("div");

        const title = document.createElement("h3");
        title.textContent = project.title;

        const description = document.createElement("p");
        description.textContent = project.description;

        const projectCategory = document.createElement("p");
        projectCategory.textContent = project.category;

        const technologies = document.createElement("p");
        technologies.textContent = project.technologies;

        card.appendChild(title);
        card.appendChild(description);
        card.appendChild(projectCategory);
        card.appendChild(technologies);

        projectsContainer.appendChild(card);

    });

}

const allBtn = document.getElementById("allBtn");
const webBtn = document.getElementById("webBtn");
const programmingBtn = document.getElementById("programmingBtn");

function showAllProjects() {
    displayProjects("All");
}

function showWebProjects() {
    displayProjects("Web");
}

function showProgrammingProjects() {
    displayProjects("Programming");
}

allBtn.addEventListener("click", showAllProjects);
webBtn.addEventListener("click", showWebProjects);
programmingBtn.addEventListener("click", showProgrammingProjects);


// Display all projects when the page loads

displayProjects("All");


//task5:

const printBtn = document.getElementById("printBtn");

function printCV() {
    window.print();
}

printBtn.addEventListener("click", printCV);
