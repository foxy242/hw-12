//task 2

let randNum = Math.random(Math.random() * (100 - 0) + 0);
const quessField = document.querySelector(`#guessField`);
const checkBut = document.querySelector(`#checkBut`);
const guessResult = document.querySelector(`#geussResult`);
let attempt = 0;

const checkGuess = () => Number(guessField.value) === random ? true : false;

checkBut.addEventListener("click", () => {
    if (checkGurss()) {
        guessResult.innerHTML = `Перемогаб ви вгадали число! Ви вгадали за $(attempt) попиток`;
        attempt = 0;
        random = Math.random(Math.random() * (100 - 1) + 1);
    }
    else {
        guessResult.innerHTML = Number(guessField.value) > randNum ? 'Число не вірне, ваше число більше ніж треба. Спробуй ще!' : 'Число не вірне, ваше число менше ніж треба. Спробуй ще!'
    }
    attempt++;
});

// Створи програму, яка генерує випадкове число від 1 до 100. Користувач повинен вгадати число, введенням його в текстове поле.
// При кліку на кнопку "Перевірити" програма повинна повідомити користувача, чи є їх відповідь правильною.