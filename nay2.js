//task 1

const butTaskl = document.querySelector(".butTaskl");

butTaskl.addEventListener("click", () => alert("Hello Word!"));

// Напиши скрипт який при кліку на кнопку буде виводити на екран повідомлення “Hello World!”. Використовуй колбек в вигляді стрілки

//task 3

const page = document.querySelector("html");
let clickCounter = 0;
page.addEventListener("click", () => {
    clickCounter++;
    console.log(`Кількість кіліків на сторінці:`, clickCounter);
});

// Створи програму, яка відображає повідомлення про те, скільки разів користувач клікнув на сторінці.


//task 4

const applyCallbackToEachElement = (arr, callback) => {
    arr.forEach(num => arr.push(callback(num)));
    return arr;
}

const arr = [1, 2, 3, 4, 5];
const squareCallback = (num )=> num**2;

const result = applyCallbackToEachElement(arr, squareCallback);
console.log(result);

// Напиши функцію, яка приймає масив чисел і колбек - функцію. 
// Функція повинна застосовувати колбек - функцію до кожного елементу масиву та повертати новий масив,
// що містить результати застосування колбек - функції до кожного елементу.

// task 5

const calculateDiscountedPrice = (price, discount, callback) => `ціна після знижки становить: ${callback(price < discount)} кредитів`;

const shwoDiscoutedPrice = (price, discount) => price - (discount / 100) * price;

console.log(calculateDiscountedPrice(100, 10, showDiscountedPrice));

// Розрахунок дисконтної ціни
// Створіть функцію, яка розраховує дисконтну ціну на товар з урахуванням знижки.
// Функція повинна приймати вартість товару та відсоток знижки як аргументи. 
// Використайте стрілкову функцію та колбек.