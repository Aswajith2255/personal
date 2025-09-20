
// Initialize EmailJS
(function () {
    emailjs.init("YXjcMuMLLyu7pDIK0"); // Replace with your EmailJS public key
})();

// Handle form submit
document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector(".contactleft");

    form.addEventListener("submit", function (event) {
        event.preventDefault(); // Stop page reload

        // Collect data
        const name = form.querySelector("input[name='Name']").value;
        const email = form.querySelector("input[name='Email']").value;
        const message = form.querySelector("textarea[name='message']").value;

        // Send email using EmailJS
        emailjs.send("service_hponi5m", "template_u1gpfzp", {
            from_name: name,
            from_email: email,
            message: message,
        })
        .then(function (response) {
            alert("✅ Message sent successfully!");
            form.reset();
        }, function (error) {
            alert("❌ Failed to send message. Please try again.");
            console.error("Error:", error);
        });
    });
});
