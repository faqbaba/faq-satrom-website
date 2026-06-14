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
}
// Back to Top Button

// Back To Top
window.onscroll = function () {
    let topBtn = document.getElementById("topBtn");

    if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
        topBtn.style.display = "block";
    } else {
        topBtn.style.display = "none";
    }
};

function topFunction() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}
// Hero Slider
let slides = document.querySelectorAll(".slide");
let currentSlide = 0;

function showSlide() {
    slides.forEach(slide => slide.classList.remove("active"));

    currentSlide++;
    if(currentSlide >= slides.length){
        currentSlide = 0;
    }

    slides[currentSlide].classList.add("active");
}

setInterval(showSlide, 4000);
// Visitor Counter
let count = localStorage.getItem("visitorCount");

if (!count) {
    count = 0;
}

count++;
localStorage.setItem("visitorCount", count);

document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("visitorCount").textContent = count;
});