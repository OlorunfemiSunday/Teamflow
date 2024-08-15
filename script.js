const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".container");

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("open");
});

document.addEventListener("DOMContentLoaded", function () {
  const divs = document.querySelectorAll(".div");

  divs.forEach((div) => {
    div.addEventListener("click", function () {
      // Remove 'active' class from all divs
      divs.forEach((d) => d.classList.remove("active"));

      // Add 'active' class to the clicked div
      this.classList.add("active");
    });
  });
});
