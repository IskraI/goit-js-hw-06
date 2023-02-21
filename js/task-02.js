const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ingredientsItemEl = ingredients.map((ingredientName) => {
  const ingredientItemEl = document.createElement("li");
  ingredientItemEl.textContent = ingredientName;
  ingredientItemEl.classList.add("item");
  return ingredientItemEl;
});

const ingredientListEl = document.querySelector("#ingredients");
// console.log(ingredientListEl);
ingredientListEl.append(...ingredientsItemEl);
