// Напиши скрипт, який для кожного елемента масиву ingredients:

// Створить окремий елемент <li>. Обов'язково використовуй метод document.createElement().
// Додасть назву інгредієнта як його текстовий вміст.
// Додасть елементу клас item.
// Після чого, вставить усі <li> за одну операцію у список ul#ingredients.

const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const listForUl = document.querySelector("#ingredients");
// const listLi = ingredients.forEach((el) => {
//   const liElement = document.createElement("li");
//   liElement.classList.add("item");
//   liElement.textContent = el;

//   listForUl.prepend(liElement);
//
// });

const array = [];

const listLi = ingredients.map((el) => {
  const liElement = document.createElement("li");
  liElement.classList.add("item");
  liElement.textContent = el;
  array.push(liElement);
});
console.log(...array);

listForUl.append(...array);
