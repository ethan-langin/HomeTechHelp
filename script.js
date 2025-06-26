// Modularized JavaScript for landing page
// Add your interactivity here

document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector(".contact-form");
  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      // You can add AJAX or other form handling here
      alert("Thank you for your submission! We will contact you soon.");
      form.reset();
    });
  }
});
