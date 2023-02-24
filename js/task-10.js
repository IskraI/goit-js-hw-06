function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const controlsEl = document.querySelector("#controls");
const createBtnEl = controlsEl.querySelector("[data-create]");
const destroyBtnEl = controlsEl.querySelector("[data-destroy]");
const amountEl = controlsEl.querySelector("input");

const boxesEl = document.querySelector("#boxes");

createBtnEl.addEventListener("click", handleCreateBoxes);
destroyBtnEl.addEventListener("click", handleDestroyBoxes);
amountEl.addEventListener("change", handleGetAmount);

function createBoxes(amount) {
  let height = 20;
  let width = 20;
  for (let i = 1; i <= amount; i += 1) {
    height += 10;
    width += 10;
    boxesEl.insertAdjacentHTML(
      "beforeend",
      `<div style="width: ${height}px; height: ${width}px; background-color: ${getRandomHexColor()}"></div>`
    );
  }
}

function handleGetAmount(event) {
  const value = event.currentTarget.value;

  if (value === 0 || value > 100) {
    event.currentTarget.value = "";
    return alert("Enter a number from 1 to 100");
  }
  return value;
}

function handleCreateBoxes() {
  const amount = amountEl.value;
  boxesEl.innerHTML = "";
  createBoxes(amount);
}

function handleDestroyBoxes() {
  boxesEl.innerHTML = "";
  amountEl.value = "";
}
