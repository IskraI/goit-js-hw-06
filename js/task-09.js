function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const colorChangeBtnEl = document.querySelector(".change-color");
const colorSpanEl = document.querySelector("span.color");
const bodyEl = document.querySelector("body");

function handleChangeColorBody() {
  const colorRandom = getRandomHexColor();
  bodyEl.style.background = colorRandom;
  colorSpanEl.textContent = colorRandom;
}

colorChangeBtnEl.addEventListener("click", handleChangeColorBody);
