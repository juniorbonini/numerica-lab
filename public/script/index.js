/*
  updateRange — Busca Binária visual

  A cada chute errado, o intervalo possível é cortado ao meio:
  - chute alto → rangeMax cai  (descarta metade superior)
  - chute baixo → rangeMin sobe (descarta metade inferior)

  O chute ideal é sempre o meio do intervalo restante:
  ideal = (rangeMin + rangeMax) / 2

  Isso é busca binária: log₂(100) ≈ 7 tentativas para acertar
  qualquer número entre 1 e 100 seguindo essa estratégia.
*/

const maxAttempts = 10;
const minNumber = 1;
const maxNumber = 100;

const randomNumber = (min, max) => Math.floor(Math.random() * max) + min;
let attemptsLeft = maxAttempts;
let rangeMin = minNumber;
let rangeMax = maxNumber;

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
  const secretNumber = Number(randomNumber(1, 100));
  return secretNumber;
}
let secret = generateSecret();

function showMessage(message) {
  const msg = (getElement("feedbackText").textContent = message);
  return msg;
}

function showAttempts() {
  const attempts = (getElement("attemptsLeft").textContent = attemptsLeft);
  return attempts;
}

function endGame() {
  getElement("guessButton").disabled = true;
  getElement("guessInput").disabled = true;
  getElement("restartBtn").hidden = false;
}

function restartGame() {
  secret = generateSecret();
  rangeMin = minNumber;
  rangeMax = maxNumber;
  attemptsLeft = maxAttempts;
  getElement("guessButton").disabled = false;
  getElement("guessInput").disabled = false;
  getElement("restartBtn").hidden = true;
  showMessage("Aguardando seu primeiro palpite...");
  showAttempts();

  updateRange();
  clearField();
}

function updateRange() {
  const total = maxNumber - minNumber;
  const left = ((rangeMin - minNumber) / total) * 100;
  const right = ((rangeMax - minNumber) / total) * 100;
  const width = right - left;
  const ideal = Math.floor((rangeMin + rangeMax) / 2);

  getElement("rangeFill").style.left = `${left}%`;
  getElement("rangeFill").style.width = `${width}%`;
  getElement("rangeThumb").style.left =
    `${((ideal - minNumber) / total) * 100}%`;
  getElement("rangeIdeal").textContent = ideal;
}

function guessSecret() {
  const inputValue = numbetInt(getValue("guessInput"));

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
    showMessage(`Você perdeu! O número secreto era ${secret}.`);
    engGame();
    return;
  }

  if (numberIsHigher(inputValue)) {
    rangeMax = inputValue - 1; // chutou alto → fecha o teto
    showMessage("O número secreto é menor, tente novamente!");
    updateRange();
    return;
  }

  rangeMin = inputValue + 1; // chutou baixo → sobe o piso
  showMessage("O número secreto é maior, tente novamente!");
  updateRange();
}

getElement("guessButton").addEventListener("click", guessSecret);
getElement("restartBtn").addEventListener("click", restartGame);
getElement("guessInput").addEventListener("keydown", (keydown) => {
  if (keydown.key === "Enter") guessSecret();
});

showAttempts();
updateGame();
