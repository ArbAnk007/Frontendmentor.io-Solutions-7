const form = document.querySelector("#form");
const successBox = document.querySelector("#success-box");
const submitBtn = document.querySelector("#submit-btn");
const dismissBtn = document.querySelector("#dismiss-btn");
const emailInput = document.querySelector("#email");
const errorText = document.querySelector("#error-text");
const emailPlaceholder = document.querySelector("#email-placeholder");

const submitForm = () => {
  removeError();
  const emailRegx =
    /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
  const whitespaceRegx = /\s/;
  if (whitespaceRegx.test(emailInput.value)) {
    addError();
    return;
  }
  if (!emailRegx.test(emailInput.value)) {
    addError();
    return;
  }
  emailPlaceholder.innerText = emailInput.value;
  emailInput.value = "";
  successBox.classList.remove("sm:hidden", "hidden");
  form.classList.add("sm:hidden", "hidden");
};

const dismissMessage = () => {
  successBox.classList.add("sm:hidden", "hidden");
  form.classList.remove("sm:hidden", "hidden");
};

const addError = () => {
  errorText.classList.remove("hidden");
  emailInput.classList.add(
    "outline-red-500",
    "border-red-500",
    "bg-red-200",
    "text-red-500"
  );
};

const removeError = () => {
  errorText.classList.add("hidden");
  emailInput.classList.remove(
    "outline-red-500",
    "border-red-500",
    "bg-red-200",
    "text-red-500"
  );
};

submitBtn.addEventListener("click", submitForm);
dismissBtn.addEventListener("click", dismissMessage);
