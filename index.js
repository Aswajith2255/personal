
// Initialize EmailJS
(function () {
    emailjs.init("YXjcMuMLLyu7pDIK0");
})();

document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("contactForm");

    form.addEventListener("submit", function (event) {
        event.preventDefault();

        const emailInput = form.querySelector("input[name='Email']");
        const email = emailInput.value.trim();

        // Extra email format validation (safety check)
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!emailRegex.test(email)) {
            alert("❌ Please enter a valid email address");
            emailInput.focus();
            return; // stop submission
        }

        const name = form.querySelector("input[name='Name']").value;
        const message = form.querySelector("textarea[name='message']").value;

        // Send email using EmailJS
        emailjs.send("service_hponi5m", "template_u1gpfzp", {
            from_name: name,
            from_email: email,
            message: message,
        })
        .then(() => {
            alert("✅ Message sent successfully!");
            form.reset();
        })
        .catch(error => {
            alert("❌ Failed to send message");
            console.error(error);
        });
    });
});


