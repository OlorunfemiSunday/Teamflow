function toggleForm(formType) {
  const loginForm = document.getElementById("login-form");
  const signupForm = document.getElementById("signup-form");
  const loginButton = document.querySelector(
    "button[onclick=\"toggleForm('login')\"]"
  );
  const signupButton = document.querySelector(
    "button[onclick=\"toggleForm('signup')\"]"
  );

  if (formType === "login") {
    loginForm.classList.add("active");
    signupForm.classList.remove("active");
    loginButton.classList.add("active");
    signupButton.classList.remove("active");
  } else if (formType === "signup") {
    loginForm.classList.remove("active");
    signupForm.classList.add("active");
    loginButton.classList.remove("active");
    signupButton.classList.add("active");
  }
}

// Show login form by default
document.addEventListener("DOMContentLoaded", () => {
  toggleForm("login");
});
