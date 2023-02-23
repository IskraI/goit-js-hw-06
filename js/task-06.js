const input = document.querySelector("input");
const quantitySymbol = Number(input.dataset.length);

const inputValidation = (event) => {
  if (event.currentTarget.value.length === 0) {
    input.classList.remove("valid", "invalid");
  } else if (event.currentTarget.value.length === quantitySymbol) {
    input.classList.add("valid");
    input.classList.remove("invalid");
  } else {
    input.classList.remove("valid");
    input.classList.add("invalid");
  }
};

input.addEventListener("blur", inputValidation);
