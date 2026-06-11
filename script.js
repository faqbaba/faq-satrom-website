<<<<<<< HEAD
function showMessage() {
    document.getElementById("message").innerHTML =
    "Thank you for visiting FAQ-SATROM ENTERPRISES LTD. We look forward to serving you.";
}

function addTask() {
    let input = document.getElementById("taskInput");
    let task = input.value;

    if (task === "") {
        alert("Please enter a task.");
        return;
    }

    let li = document.createElement("li");

    li.innerHTML =
    task + ' <button onclick="this.parentElement.remove()">Delete</button>';

    li.onclick = function() {
        li.style.textDecoration = "line-through";
    };

    document.getElementById("taskList").appendChild(li);

    input.value = "";
}

function toggleDarkMode() {
    document.body.classList.toggle("dark-mode");

    let btn = document.getElementById("darkBtn");

    if (document.body.classList.contains("dark-mode")) {
        btn.innerHTML = "☀️ Light Mode";
        localStorage.setItem("theme", "dark");
    } else {
        btn.innerHTML = "🌙 Dark Mode";
        localStorage.setItem("theme", "light");
    }
}

window.onload = function() {
    if (localStorage.getItem("theme") === "dark") {
        document.body.classList.add("dark-mode");
        document.getElementById("darkBtn").innerHTML = "☀️ Light Mode";
    }
=======
function showMessage() {
    document.getElementById("message").innerHTML =
    "Thank you for visiting FAQ-SATROM ENTERPRISES LTD. We look forward to serving you.";
}

function addTask() {
    let input = document.getElementById("taskInput");
    let task = input.value;

    if (task === "") {
        alert("Please enter a task.");
        return;
    }

    let li = document.createElement("li");

    li.innerHTML =
    task + ' <button onclick="this.parentElement.remove()">Delete</button>';

    li.onclick = function() {
        li.style.textDecoration = "line-through";
    };

    document.getElementById("taskList").appendChild(li);

    input.value = "";
}

function toggleDarkMode() {
    document.body.classList.toggle("dark-mode");

    let btn = document.getElementById("darkBtn");

    if (document.body.classList.contains("dark-mode")) {
        btn.innerHTML = "☀️ Light Mode";
        localStorage.setItem("theme", "dark");
    } else {
        btn.innerHTML = "🌙 Dark Mode";
        localStorage.setItem("theme", "light");
    }
}

window.onload = function() {
    if (localStorage.getItem("theme") === "dark") {
        document.body.classList.add("dark-mode");
        document.getElementById("darkBtn").innerHTML = "☀️ Light Mode";
    }
>>>>>>> 4f4a12d0061a1daf73b49629165d05de4b7be473
}