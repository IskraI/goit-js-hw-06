const refs = {
  decrementBtnEL: document.querySelector('[data-action="decrement"]'),
  incrementBtnEL: document.querySelector('[data-action="increment"]'),
  counterValue: Number(document.querySelector("#value").textContent),
};

const counterIncrementStep = Number(refs.incrementBtnEL.textContent);
const counterDecrementStep = Number(refs.decrementBtnEL.textContent);

const handleDecrementValue = () => {
  refs.counterValue += counterDecrementStep;
  document.querySelector("#value").textContent = refs.counterValue;
};

const handleIncrementValue = () => {
  refs.counterValue += counterIncrementStep;
  document.querySelector("#value").textContent = refs.counterValue;
};

refs.decrementBtnEL.addEventListener("click", handleDecrementValue);

refs.incrementBtnEL.addEventListener("click", handleIncrementValue);
