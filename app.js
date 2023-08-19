const name = document.querySelector("#name");
const cardName = document.querySelector(".card-name");

const number = document.querySelector("#card-number");

const cardNumber1 = document.querySelector("#number1");
const cardNumber2 = document.querySelector("#number2");
const cardNumber3 = document.querySelector("#number3");
const cardNumber4 = document.querySelector("#number4");

const month = document.querySelector("#month");
const cardMonth = document.querySelector(".month");

const year = document.querySelector("#year");
const cardYear = document.querySelector(".year");

const cvc = document.querySelector("#cvc");
const cardCvc = document.querySelector(".card-cvc");

name.addEventListener("input", () => {
  const enteredText = name.value;
  cardName.textContent = enteredText;
});

number.addEventListener("input", () => {
  const enteredText = number.value;
  cardNumber1.textContent = enteredText.substring(0, 4);
  cardNumber2.textContent = enteredText.substring(4, 8);
  cardNumber3.textContent = enteredText.substring(8, 12);
  cardNumber4.textContent = enteredText.substring(12, 16);
});

month.addEventListener("input", () => {
  const enteredText = month.value;
  cardMonth.textContent = enteredText;
});

year.addEventListener("input", () => {
  const enteredText = year.value;
  cardYear.textContent = enteredText;
});

cvc.addEventListener("input", () => {
  const enteredText = cvc.value;
  cardCvc.textContent = enteredText;
});
