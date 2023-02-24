const formEl = document.querySelector(".login-form");

formEl.addEventListener("submit", handleFormSubmit);

function handleFormSubmit(event) {
  event.preventDefault();

  const elements = {
    email: event.currentTarget.email.value,
    password: event.currentTarget.password.value,
  };

  if (elements.email === "" || elements.password === "") {
    return alert("Please fill in all the fields!");
  }

  console.log("Sent data:", elements);

  event.currentTarget.reset();
}
