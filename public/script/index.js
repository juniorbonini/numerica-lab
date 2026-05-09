const maxAttempts = 10;
const minNumber = 1;
const maxNumber = 100;

const randomNumber = (min, max) => Math.floor(Math.random() * max) + min;
const secretNumber = randomNumber(1, 100);

let secret = /* Function em andamento */;
let attemptsLeft = maxAttempts;
