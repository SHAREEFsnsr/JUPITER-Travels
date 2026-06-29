document.getElementById("bookingForm").addEventListener("submit", function (event) {

    event.preventDefault();

    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let phone = document.getElementById("phone").value.trim();
    let destination = document.getElementById("destination").value;

    if (name === "" || email === "" || phone === "" || destination === "") {
        alert("Please fill in all required fields.");
        return;
    }

    alert("Thank you for choosing JUPITER Travels! Your booking request has been received.");

    this.reset();

});
function calculateTrip() {

    let price = Number(document.getElementById("destinationPrice").value);
    let persons = Number(document.getElementById("persons").value);
    let days = Number(document.getElementById("days").value);

    if (persons <= 0 || days <= 0) {
        alert("Please enter valid numbers.");
        return;
    }

    // Package price is for the full trip per person.
    let total = price * persons;

    document.getElementById("totalCost").innerHTML =
        "Estimated Trip Cost: ₹" + total.toLocaleString("en-IN");
}
const form = document.getElementById("bookingForm");

if(form){

form.addEventListener("submit",function(e){

e.preventDefault();

const name=document.getElementById("name").value.trim();
const email=document.getElementById("email").value.trim();
const phone=document.getElementById("phone").value.trim();
const destination=document.getElementById("destination").value;
const message=document.getElementById("message").value.trim();

const emailPattern=/^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const phonePattern=/^[6-9]\d{9}$/;

if(name===""){
alert("Please enter your name.");
return;
}

if(!emailPattern.test(email)){
alert("Please enter a valid email address.");
return;
}

if(!phonePattern.test(phone)){
alert("Please enter a valid 10-digit Indian mobile number.");
return;
}

if(destination===""){
alert("Please select a destination.");
return;
}

if(message===""){
alert("Please enter your message.");
return;
}

document.getElementById("popup").style.display="flex";

form.reset();

});

}

function closePopup(){

document.getElementById("popup").style.display="none";

}
const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");

if(menuToggle){

menuToggle.addEventListener("click",function(){

navLinks.classList.toggle("active");

});

}