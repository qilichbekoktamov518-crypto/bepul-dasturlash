const loginForm = document.querySelector("#loginForm");

loginForm.addEventListener("submit", (event) => {

    event.preventDefault();

    const phoneInput = document.querySelector("#phone");

    const phone = phoneInput.value.trim();

    if (phone.length !== 9) {

        alert("Iltimos, 9 xonali telefon raqamingizni kiriting.");

        return;
    }

    localStorage.setItem("phone", phone);

    window.location.href = "verify.html";

});