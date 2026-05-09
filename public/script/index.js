const maxAttempts = 10;
const minNumber = 1;
const maxNumber = 100;

const randomNumber = (min, max) => Math.floor(Math.random() * max) + min;
const secretNumber = randomNumber(1, 100);

let secret = /* Function em andamento */;
let attemptsLeft = maxAttempts;

const getElement = (id) => document.getElementById(id);
const getValue = (id) => getElement(id).value;
const clearField = () => getElement("guessInput").value = "";
const numbetInt = (value) => parseInt(value, 10)
const isValidNumber = (number) => isNaN(number) || number < minNumber || number > maxNumber;
const isRightSecret = (number) => number === secret;
const numberIsHigher = (number) => number > secret;
const noAttempts = () => attemptsLeft === 0;

