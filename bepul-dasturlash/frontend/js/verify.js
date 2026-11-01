const verifyForm = document.querySelector("#verifyForm");
const otpInputs = document.querySelectorAll(".otp-input");
const message = document.querySelector("#message");
const resendBtn = document.querySelector("#resendBtn");

// Har bir inputga faqat raqam kiritish
otpInputs.forEach((input, index) => {

    input.addEventListener("input", () => {

        input.value = input.value.replace(/\D/g, "");

        if (input.value && index < otpInputs.length - 1) {
            otpInputs[index + 1].focus();
        }
    });

    input.addEventListener("keydown", (event) => {

        if (
            event.key === "Backspace" &&
            !input.value &&
            index > 0
        ) {
            otpInputs[index - 1].focus();
        }
    });
});


// Kodni tekshirish
verifyForm.addEventListener("submit", (event) => {

    event.preventDefault();

    let code = "";

    otpInputs.forEach((input) => {
        code += input.value;
    });

    if (code.length !== 6) {
        message.textContent = "Iltimos, 6 xonali kodni kiriting.";
        return;
    }

    // Hozircha DEMO kod
    if (code === "123456") {

        message.textContent = "Kod tasdiqlandi! ✅";

        localStorage.setItem("isLoggedIn", "true");

        setTimeout(() => {
            window.location.href = "../index.html";
        }, 1000);

    } else {

        message.textContent = "Kod noto‘g‘ri. Qaytadan urinib ko‘ring.";
    }
});


// Qayta yuborish
resendBtn.addEventListener("click", () => {

    message.textContent = "Yangi kod yuborildi. 📩";

});