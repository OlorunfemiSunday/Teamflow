//profile
document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".tab-link").forEach((button) => {
    button.addEventListener("click", () => {
      const tabContainer = button.parentElement.parentElement;
      const tabNumber = button.dataset.tab;

      tabContainer.querySelectorAll(".tab-link").forEach((btn) => {
        btn.classList.remove("active");
      });

      tabContainer.querySelectorAll(".tab-content").forEach((tab) => {
        tab.classList.remove("active");
      });

      button.classList.add("active");
      tabContainer.querySelector(`#${tabNumber}`).classList.add("active");
    });
  });
});
