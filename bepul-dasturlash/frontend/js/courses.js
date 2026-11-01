
const params = new URLSearchParams(window.location.search);
const course = params.get("course");

const courses = {
    html: {
        title: "HTML darslari",
        description: "HTML yordamida web sahifalar yaratishni o‘rganing.",
        total: 1
    },
    css: {
        title: "CSS darslari",
        description: "Web sahifalarni chiroyli dizayn qilishni o‘rganing.",
        total: 7
    },
    javascript: {
        title: "JavaScript darslari",
        description: "Web sahifalarga interaktivlik qo‘shishni o‘rganing.",
        total: 90
    },
    typescript: {
        title: "TypeScript darslari",
        description: "JavaScript uchun kuchli tip tizimi bilan ishlashni o‘rganing.",
        total: 37
    },
    tailwind: {
        title: "Tailwind CSS darslari",
        description: "Tailwind CSS yordamida zamonaviy interfeyslar yarating.",
        total: 1
    },
    react: {
        title: "React darslari",
        description: "React yordamida zamonaviy web ilovalar yarating.",
        total: 48
    },
    nextjs: {
        title: "Next.js darslari",
        description: "Next.js yordamida professional web ilovalar yarating.",
        total: 19
    },
    python: {
        title: "Python darslari",
        description: "Python dasturlash tilini o‘rganing.",
        total: 50
    },
    oop: {
        title: "OOP darslari",
        description: "Obyektga yo‘naltirilgan dasturlashni o‘rganing.",
        total: 7
    },
    postgresql: {
        title: "PostgreSQL darslari",
        description: "Ma’lumotlar bazasi bilan ishlashni o‘rganing.",
        total: 28
    },
    http: {
        title: "HTTP darslari",
        description: "Internet va server aloqasini o‘rganing.",
        total: 1
    },
    api: {
        title: "JSON / API darslari",
        description: "API va ma’lumot almashishni o‘rganing.",
        total: 2
    },
    flask: {
        title: "Flask darslari",
        description: "Flask yordamida web ilovalar yarating.",
        total: 1
    },
    django: {
        title: "Django darslari",
        description: "Django yordamida web ilovalar yarating.",
        total: 26
    },
    git: {
        title: "Git & GitHub darslari",
        description: "Git va GitHub bilan ishlashni o‘rganing.",
        total: 1
    }
};

// ELEMENTLAR
const courseTitle = document.querySelector("#courseTitle");
const courseDescription = document.querySelector("#courseDescription");
const lessonList = document.querySelector("#lessonList");
const searchInput = document.querySelector("#lessonSearch");

// KURSNI TEKSHIRISH
const currentCourse = courses[course];

if (!currentCourse) {
    if (courseTitle) {
        courseTitle.textContent = "Kurs topilmadi";
    }

    if (courseDescription) {
        courseDescription.textContent =
            "URL ichida kurs aniqlanmadi.";
    }
} else {
    courseTitle.textContent = currentCourse.title;
    courseDescription.textContent = currentCourse.description;

    // BARCHA DARSLARNI YARATISH
    for (let i = 1; i <= currentCourse.total; i++) {
        const lesson = document.createElement("a");

        lesson.className = "lesson-card";
        lesson.href = `lesson.html?course=${course}&lesson=${i}`;

        lesson.innerHTML = `
            <div class="lesson-number">
                ${String(i).padStart(2, "0")}
            </div>

            <div class="lesson-info">
                <span>${course.toUpperCase()}</span>

                <h3>
                    ${course.toUpperCase()} — ${i}-dars
                </h3>

                <p>
                    Darsni boshlash uchun bosing.
                </p>
            </div>

            <div class="lesson-arrow">
                →
            </div>
        `;

        lessonList.appendChild(lesson);
    }
}

// DARS QIDIRISH
if (searchInput) {
    searchInput.addEventListener("input", () => {
        const text = searchInput.value.toLowerCase().trim();

        const lessons = document.querySelectorAll(".lesson-card");

        lessons.forEach((lesson) => {
            lesson.style.display =
                lesson.textContent.toLowerCase().includes(text)
                    ? "grid"
                    : "none";
        });
    });
}
