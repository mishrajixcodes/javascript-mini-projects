const inputAmount = document.querySelector("#input-amount");
const customTipInput = document.querySelector("#custom-tip-input");
const numberOfPeopleInput = document.querySelector("#number-of-people-input");
const generateBillBtn = document.querySelector(".generate-bill-btn");
const tipAmountOutput = document.querySelector("#tip-amount-output span");
const totalAmountOutput = document.querySelector("#total-amount-output span");
const eachPersonBillOutput = document.querySelector(
  "#each-person-bill-output span"
);
const resetBtn = document.querySelector(".reset-btn");

const btnTip = document.querySelector(".btn-tip");

let tipPercentage;

generateBillBtn.addEventListener("click", () => {
  const inputAmountValue = Number(inputAmount.value);
  //   const customTipInputValue = Number(customTipInput.value);
  const numberOfPeopleInputValue = Number(numberOfPeopleInput.value);

  if (!inputAmountValue || !tipPercentage || !numberOfPeopleInputValue) {
    alert("Please enter amount, tip, and number of people");
    return;
  }

  const tipAmount = (inputAmountValue * tipPercentage) / 100;
  const totalAmount = tipAmount + inputAmountValue;
  const eachPersonBillAmount = totalAmount / numberOfPeopleInputValue;

  tipAmountOutput.textContent = `₹ ${tipAmount.toFixed(2)}`;
  totalAmountOutput.textContent = `₹ ${totalAmount.toFixed(2)}`;
  eachPersonBillOutput.textContent = `₹ ${eachPersonBillAmount.toFixed(2)}`;
});

resetBtn.addEventListener("click", () => {
  inputAmount.value = "";
  customTipInput.value = "";
  numberOfPeopleInput.value = "";

  tipAmountOutput.textContent = ``;
  totalAmountOutput.textContent = ``;
  eachPersonBillOutput.textContent = ``;

  tipPercentage = null;

  [...btnTip.children].forEach((btn) => {
    btn.classList.remove("selected-btn");
  });
});

btnTip.addEventListener("click", (e) => {
  if (e.target !== btnTip) {
    [...btnTip.children].forEach((btn) => {
      btn.classList.remove("selected-btn");
    });
    e.target.classList.add("selected-btn");
    customTipInput.value = "";

    if (e.target.classList.contains("selected-btn")) {
      tipPercentage = parseInt(e.target.textContent);
    }
  }
});

customTipInput.addEventListener("input", () => {
  [...btnTip.children].forEach((btn) => {
    btn.classList.remove("selected-btn");
  });
  tipPercentage = Number(customTipInput.value);
});
