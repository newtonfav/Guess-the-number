let secretNumber = Math.trunc(Math.random() * 20) + 1;

let score = 20;
let highscore = 0;

const displayMessage = (message) => {
  document.querySelector(".message").textContent = message;
};

const displayScore = (score) => {
  document.querySelector(".score").textContent = score;
};

const displayNumber = (number) => {
  document.querySelector(".number").textContent = number;
};

document.querySelector(".check").addEventListener("click", () => {
  const userInput = Number(document.querySelector(".guess").value);

  console.log(secretNumber);

  if (!userInput) {
    displayMessage("Enter a valid number!⚠️");
  } else if (userInput === secretNumber) {
    displayMessage("Congratulations, You win🏆🎉");
    document.querySelector("body").style.backgroundColor = "rgb(86, 154, 22)";
    displayNumber(secretNumber);

    if (score > highscore) {
      highscore += score;
      document.querySelector(".highscore").textContent = highscore;
    }
  } else if (userInput !== secretNumber) {
    if (score > 1) {
      displayMessage(
        userInput > secretNumber ? "Number too HIGH📉" : "Number too LOW📈"
      );
      score--;
      displayScore(score);
    } else {
      displayMessage("Game Over😔");
      displayScore(0);
    }
  }
});

document.querySelector(".again").addEventListener("click", () => {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  displayMessage("Start guessing...");
  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".guess").value = "";
  displayScore(20);
  displayNumber("?");
});
