let input = document.querySelector("#input");
let form = document.querySelector("#form");
let ans = document.querySelector("#ans");
let guesses = document.querySelector("#guesses");
let submitBtn = document.querySelector("#submit-btn");
let newgameBtn = document.querySelector("#newgame-btn");
let guessCount = document.querySelector("#guess-count");

let randomNumber = Math.floor(Math.random() * 101);
let guessesArray = [];

// console.log(randomNumber);
form.addEventListener("submit", (e) => {
  e.preventDefault();
  let inputNumber = Number(input.value);

  if (inputNumber > randomNumber) {
    ans.innerText = "Too High!";
  } else if (inputNumber < randomNumber) {
    ans.innerText = "Too Low!";
  } else {
    ans.innerText = "You guess it correct!";
  }
  input.value = "";

  guessesArray.push(inputNumber);
  
  guesses.innerText = `Guesses: ${guessesArray.join(", ")}`;

  if (inputNumber == randomNumber) {
    guessCount.innerText = `You Guess it in ${guessesArray.length} attempts.`;
    submitBtn.disabled = true;
    newgameBtn.disabled = false;
  }
});

newgameBtn.addEventListener("click", () => {
  randomNumber = Math.floor(Math.random() * 101);
  input.value = "";
  ans.innerText = "";
  guessCount.innerText = "";
  guesses.innerText = "";
  guessesArray = [];
  //   console.log(randomNumber);
  submitBtn.disabled = false;
  newgameBtn.disabled = true;
});
