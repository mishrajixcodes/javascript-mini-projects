let count = document.querySelector("#count");
let incrementBtn = document.querySelector("#increment");
let decrementBtn = document.querySelector("#decrement");
let input = document.querySelector("#input-field");
let resetBtn = document.querySelector("#reset-btn");

function increment() {
  let countValue = Number(count.textContent);
  let inputValue = Number(input.value);
  count.textContent = countValue + inputValue;
}

function decrement() {
  let countValue = Number(count.textContent);
  let inputValue = Number(input.value);
  count.textContent = countValue - inputValue;
}

function reset() {
  count.textContent = 0;
}

incrementBtn.addEventListener("click", () => {
  increment();
});

decrementBtn.addEventListener("click", () => {
  decrement();
});

resetBtn.addEventListener("click", () => {
  reset();
});

document.addEventListener("keydown", (e) => {
  if (e.target === input) return;

  if (e.key == "+" || e.key == "ArrowUp") {
    increment();
  } else if (e.key == "-" || e.key == "ArrowDown") {
    decrement();
  }
});
