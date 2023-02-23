const refs = {
  input: document.querySelector("#name-input"),
  nameLabel: document.querySelector("#name-output"),
};

const nameLabelText = refs.nameLabel.textContent;

const handleNameLabelChange = (event) => {
  event.currentTarget.value !== ""
    ? (refs.nameLabel.textContent = event.currentTarget.value)
    : (refs.nameLabel.textContent = nameLabelText);
};

refs.input.addEventListener("input", handleNameLabelChange);
