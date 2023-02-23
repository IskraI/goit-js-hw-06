const counterEl = document.querySelector("#counter");

const refs = {
  decrementBtnEL: counterEl.querySelector('[data-action="decrement"]'),
  incrementBtnEL: counterEl.querySelector('[data-action="increment"]'),
  counterValue: Number(counterEl.querySelector("#value").textContent),
  counterValueUi: counterEl.querySelector("#value"),
};

const counterIncrementStep = Number(refs.incrementBtnEL.textContent);
const counterDecrementStep = Number(refs.decrementBtnEL.textContent);

const handleDecrementValue = () => {
  refs.counterValue += counterDecrementStep;
  refs.counterValueUi.textContent = refs.counterValue;
};

const handleIncrementValue = () => {
  refs.counterValue += counterIncrementStep;
  refs.counterValueUi.textContent = refs.counterValue;
};

refs.decrementBtnEL.addEventListener("click", handleDecrementValue);

refs.incrementBtnEL.addEventListener("click", handleIncrementValue);
