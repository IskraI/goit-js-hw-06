const categoriesEl = document.querySelectorAll(".item").length;
console.log(`Number of categories: ${categoriesEl}`);
const itemCategoryEl = document.querySelectorAll(".item");

itemCategoryEl.forEach((elem) => {
  console.log(`Category: ${elem.querySelector("h2").textContent}`);
  console.dir(`Elements: ${elem.lastElementChild.children.length}`);
});
