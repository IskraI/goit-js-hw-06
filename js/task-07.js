const input = document.querySelector("#font-size-control");
const textChange = document.querySelector("#text");

input.addEventListener("input", (event) => {
  textChange.style.fontSize = `${event.currentTarget.value}px`;
});
