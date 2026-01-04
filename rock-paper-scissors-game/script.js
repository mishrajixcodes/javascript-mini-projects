let rockBtn = document.querySelector(".rock-btn");
let paperBtn = document.querySelector(".paper-btn");
let scissorBtn = document.querySelector(".scissors-btn");
let userHandIcon = document.querySelector(".user.hand-icon");
let computerHandIcon = document.querySelector(".computer.hand-icon");
let userScore = document.querySelector(".user-score");
let computerScore = document.querySelector(".computer-score");
let result = document.querySelector(".result");

const rockIcon = "✊";
const paperIcon = "✋";
const scissorIcon = "✌️";

const iconList = [rockIcon, paperIcon, scissorIcon];

function finalResult(userIcon, computerWinningIcon) {
  userHandIcon.textContent = "🤜";
  computerHandIcon.textContent = "🤛";
  result.textContent = "";
  userHandIcon.classList.add("shakeUserHands");
  computerHandIcon.classList.add("shakeComputerHands");

  setTimeout(() => {
    const iconNumber = Math.floor(Math.random() * 3);
    userHandIcon.classList.remove("shakeUserHands");
    computerHandIcon.classList.remove("shakeComputerHands");
    userHandIcon.textContent = userIcon;
    computerHandIcon.textContent = iconList[iconNumber];

    if (userHandIcon.textContent === computerHandIcon.textContent) {
      result.textContent = "Draw";
    } else if (computerHandIcon.textContent === computerWinningIcon) {
      result.textContent = "Computer Won!!";
      computerScore.textContent = Number(computerScore.textContent) + 1;
    } else {
      result.textContent = "You Won!!";
      userScore.textContent = Number(userScore.textContent) + 1;
    }
  }, 1000);
}

rockBtn.addEventListener("click", () => {
  finalResult(rockIcon, paperIcon);
});

paperBtn.addEventListener("click", () => {
  finalResult(paperIcon, scissorIcon);
});

scissorBtn.addEventListener("click", () => {
  finalResult(scissorIcon, rockIcon);
});
