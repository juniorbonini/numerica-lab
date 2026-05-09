const maxAttempts = 10;
const minNumber = 1;
const maxNumber = 100;

let secret = generateSecret();
let attemptsLeft = maxAttempts;

const randomNumber = (min, max) => Math.floor(Math.random() * max) + min;
const getElement = (id) => document.getElementById(id);
const getValue = (id) => getElement(id).value;
const clearField = () => (getElement("guessInput").value = "");
const numbetInt = (value) => parseInt(value, 10);
const isValidNumber = (number) =>
  isNaN(number) || number < minNumber || number > maxNumber;
const isRightSecret = (number) => number === secret;
const numberIsHigher = (number) => number > secret;
const noAttempts = () => attemptsLeft === 0;

function generateSecret() {
  const secretNumber = randomNumber(1, 100);
  return secretNumber;
}

function showMessage(message) {
  const msg = (getElement("feedbackText").textContent = message);
  return msg;
}

function showAttempts() {
  const attempts = (getElement("attemptsLeft").textContent = attemptsLeft);
  return attempts;
}

function endGame() {
  const buttonPrimary = (getElement("guessButton").disabled = true);
  const input = (getElement("guessInput").disabled = true);
  const buttonRestart = (getElement("restartBtn").hidden = false);

  return { buttonPrimary, input, buttonRestart };
}

function restartGame() {
  const { buttonPrimary, input, buttonRestart } = endGame();
  secret = generateSecret();
  attemptsLeft = maxAttempts;

  buttonPrimary = false;
  input = false;
  buttonRestart = true;

  showMessage("Aguardando seu primeiro palpite...");
  showAttempts();
  clearField();
}

function guessSecret() {
  const inputValue = numbetInt(getValue("guesValue"));

  if (isValidNumber(inputValue)) {
    showMessage("Digite um número válido entre 1 e 100");
    return;
  }

  attemptsLeft--;
  showAttempts();
  clearField();

  if (isRightSecret(inputValue)) {
    showMessage(`Você acertou! O número secreto era ${secret}.`);
    endGame();
    return;
  }

  if (noAttempts()) {
    showMessage(`Você perdeu! O número secreto era ${secretNumber}.`);
    engGame();
    return;
  }

  if (numberIsHigher(inputValue)) {
    showMessage("O número secreto é maior, tente novamente!");

    return;
  }
  showMessage("O número secreto é menor, tente novamente!");
}
