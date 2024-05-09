// З використанням властивостей і методів DOM-елементів, напиши скрипт, який:

// Порахує й виведе в консоль кількість категорій в ul#categories, тобто елементів li.item.
// Для кожного елемента li.item у списку ul#categories знайде й виведе в консоль текст заголовка елемента (тегу <h2>) і кількість елементів у категорії (усіх <li>, вкладених у нього).

const liEls = document.querySelectorAll('.item');
console.log(`Number of categories: ${liEls.length}`);

liEls.forEach(evt => {
  const categoryName = evt.querySelector('h2').textContent;
  const liNumber = evt.querySelectorAll('li').length;

  console.log(`Category: ${categoryName}`);
  console.log(`Elements: ${liNumber}`);
});

// console.log(`Category ${ClassEls.}`);
