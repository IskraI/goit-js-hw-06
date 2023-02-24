function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const controlsEl = document.querySelector("#controls");
const createBtnEl = controlsEl.querySelector("[data-create]");
const destroyBtnEl = controlsEl.querySelector("[data-destroy]");
const amountEl = controlsEl.querySelector("input");
console.log(controlsEl);
console.log("createBtnEl ", createBtnEl);
console.log("destroyBtnEl ", destroyBtnEl);
console.log("amountEl ", amountEl);

createBtnEl.addEventListener("click", handleCreateBoxes);
destroyBtnEl.addEventListener("click", handleDestroyBoxes);
amountEl.addEventListener("change", handleGetAmount);

function handleGetAmount(event) {}
