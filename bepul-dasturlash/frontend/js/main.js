const primaryButton =
    document.querySelector(".primary-btn");

const courseCards =
    document.querySelectorAll(".course-card");

const loginButton =
    document.querySelector(".login-btn");


// Darslar tugmasi

if (primaryButton) {

    primaryButton.addEventListener("click", () => {

        const courses =
            document.querySelector("#courses");

        if (courses) {

            courses.scrollIntoView({
                behavior: "smooth"
            });

        }

    });

}


// Kurs kartalari

courseCards.forEach((card) => {

    card.addEventListener("mouseenter", () => {

        card.style.transform =
            "translateY(-10px) scale(1.02)";

    });

    card.addEventListener("mouseleave", () => {

        card.style.transform =
            "translateY(0) scale(1)";

    });

});


// Kod oynasi

const codeWindow =
    document.querySelector(".code-window");

if (codeWindow) {

    codeWindow.addEventListener("mouseenter", () => {

        codeWindow.style.transform =
            "scale(1.02)";

    });

    codeWindow.addEventListener("mouseleave", () => {

        codeWindow.style.transform =
            "scale(1)";

    });

}

// ===============================
// NAVBAR ACTIVE PAGE
// ===============================

const navLinks = document.querySelectorAll(".navbar nav a");

const currentFile = window.location.pathname
    .split("/")
    .pop()
    .toLowerCase();

navLinks.forEach((link) => {
    const linkFile = new URL(link.href)
        .pathname
        .split("/")
        .pop()
        .toLowerCase();

    // index.html va bosh sahifa
    if (
        (currentFile === "index.html" || currentFile === "") &&
        (linkFile === "index.html" || linkFile === "")
    ) {
        link.classList.add("active");
    }

    // boshqa sahifalar
    else if (
        currentFile !== "index.html" &&
        currentFile !== "" &&
        currentFile === linkFile
    ) {
        link.classList.add("active");
    }
});

// ===============================
// LIGHT / DARK MODE
// FAQAT BOSH SAHIFA UCHUN
// ===============================

const themeToggle = document.querySelector("#themeToggle");

const isHomePage =
    window.location.pathname.endsWith("index.html") ||
    window.location.pathname.endsWith("/");

if (themeToggle && isHomePage) {

    const savedTheme = localStorage.getItem("theme");

    if (savedTheme === "light") {
        document.body.classList.add("light-mode");
        themeToggle.textContent = "🌙";
    } else {
        themeToggle.textContent = "☀️";
    }

    themeToggle.addEventListener("click", () => {

        document.body.classList.toggle("light-mode");

        if (document.body.classList.contains("light-mode")) {

            localStorage.setItem("theme", "light");
            themeToggle.textContent = "🌙";

        } else {

            localStorage.setItem("theme", "dark");
            themeToggle.textContent = "☀️";

        }

    });

}