const formEl = document.querySelector(".login-form");

formEl.addEventListener("submit", handleFormSubmit);

function handleFormSubmit(event) {
  event.preventDefault();

  const { email, password } = event.currentTarget;

  const elements = {
    email: email.value,
    password: password.value,
  };

  if (elements.email === "" || elements.password === "") {
    return alert("Please fill in all the fields!");
  }

  console.log("Sent data:", elements);

  event.currentTarget.reset();
}
