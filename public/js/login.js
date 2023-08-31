console.log("Login script loaded!");

const loginFormHandler = async (event) => {
  event.preventDefault();
  console.log("Login form submitted");

  // Collect values from the login form
  const email = document.querySelector("#email-login").value.trim();
  const password = document.querySelector("#password-login").value.trim();
  console.log("Email:", email);
  console.log("Password:", password);

  if (email && password) {
    // Send a POST request to the API endpoint (make sure the path matches your API route)
    const response = await fetch("/api/users/login", {
      method: "POST",
      body: JSON.stringify({ email, password }),
      headers: { "Content-Type": "application/json" },
    });
    console.log("API Response:", response);

    if (response.ok) {
      // If successful, redirect the browser to the home page
      document.location.replace("/home");
    } else {
      alert(response.statusText);
    }
  }
};

const signupFormHandler = async (event) => {
  event.preventDefault();

  const name = document.querySelector("#signupUsername").value.trim();
  const email = document.querySelector("#signUpEmail").value.trim();
  const password = document.querySelector("#signupPassword").value.trim();

  if (name && email && password) {
    // Send a POST request to the API endpoint (make sure the path matches your API route)
    const response = await fetch("/api/users", {
      method: "POST",
      body: JSON.stringify({ name, email, password }),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      // If successful, redirect the browser to the home page
      document.location.replace("/home");
    } else {
      alert(response.statusText);
    }
  }
};

document
  .querySelector(".login-form")
  .addEventListener("submit", loginFormHandler);
console.log("Login form listener attached!");

document
  .querySelector(".signup-form")
  .addEventListener("submit", signupFormHandler);
console.log("Signup form listener attached!");
