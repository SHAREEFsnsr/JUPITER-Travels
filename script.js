// Trip Cost Calculator
function calculateTrip() {

    const destination = document.getElementById("destinationPrice");

    if (!destination) return;

    let price = Number(destination.value);
    let persons = Number(document.getElementById("persons").value);
    let days = Number(document.getElementById("days").value);

    if (persons <= 0 || days <= 0) {
        alert("Please enter valid numbers.");
        return;
    }

    let total = price * persons;

    document.getElementById("totalCost").innerHTML =
        "Estimated Trip Cost: ₹" + total.toLocaleString("en-IN");
}


// Contact Form
const form = document.getElementById("bookingForm");

if (form) {

    form.addEventListener("submit", function (e) {

        e.preventDefault();

        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const phone = document.getElementById("phone").value.trim();
        const destination = document.getElementById("destination").value;
        const message = document.getElementById("message").value.trim();

        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const phonePattern = /^[6-9]\d{9}$/;

        if (name === "") {
            alert("Please enter your name.");
            return;
        }

        if (!emailPattern.test(email)) {
            alert("Please enter a valid email address.");
            return;
        }

        if (!phonePattern.test(phone)) {
            alert("Please enter a valid 10-digit Indian mobile number.");
            return;
        }

        if (destination === "") {
            alert("Please select a destination.");
            return;
        }

        if (message === "") {
            alert("Please enter your message.");
            return;
        }

        document.getElementById("popup").style.display = "flex";

        form.reset();

    });

}

function closePopup() {

    document.getElementById("popup").style.display = "none";

}


// Hamburger Menu
const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");

if (menuToggle && navLinks) {

    menuToggle.addEventListener("click", function () {

        navLinks.classList.toggle("active");

    });

}