// script.js

document.addEventListener("DOMContentLoaded", () => {
  const headings = document.querySelectorAll(".sticky-heading");

  window.addEventListener("scroll", () => {
    headings.forEach(heading => {
      const rect = heading.getBoundingClientRect();
      if (rect.top <= 0 && rect.bottom >= 0) {
        heading.classList.add("active");
      } else {
        heading.classList.remove("active");
      }
    });
  });
});
