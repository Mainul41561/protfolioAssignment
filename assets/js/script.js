//'use strict';



//navbar toggle
const header = document.querySelector("[data-header]");
const navToggleBtn = document.querySelector("[data-nav-toggle-btn]");

navToggleBtn.addEventListener("click", function () {
  header.classList.toggle("nav-active");
  this.classList.toggle("active");
});

//toggle the navbar when click any navbar link

const navbarLinks = document.querySelectorAll("[data-nav-link]");

for (let i = 0; i < navbarLinks.length; i++) {
  navbarLinks[i].addEventListener("click", function () {
    header.classList.toggle("nav-active");
    navToggleBtn.classList.toggle("active");
  });
}



// back to top & header
 

const backTopBtn = document.querySelector("[data-back-to-top]");

window.addEventListener("scroll", function () {
  if (window.scrollY >= 100) {
    header.classList.add("active");
    backTopBtn.classList.add("active");
  } else {
    header.classList.remove("active");
    backTopBtn.classList.remove("active");
  }
});

// Adding from validation
document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector(".contact-form");
  const flashMessage = document.getElementById("flash-message");

  form.addEventListener("submit", (event) => {
      event.preventDefault(); // Prevent the default form submission behavior

      const name = form.name.value.trim();
      const email = form.email.value.trim();
      const message = form.message.value.trim();

      // Simple email validation
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

      if (!emailRegex.test(email)) {
          alert("Please enter a valid email address.");
          return;
      }

      if (!name || !email || !message) {
          alert("All fields are required.");
          return;
      }

      // Show a flash message
      flashMessage.textContent = "Thank you! Your message has been submitted.";
      flashMessage.style.display = "block";

      // clear the form after submission
      form.reset();

      // Hide the flash message after a few seconds
      setTimeout(() => {
          flashMessage.style.display = "none";
      }, 3000);
  });
});
