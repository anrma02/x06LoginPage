const form = document.querySelector("form");
const usernameInput = document.querySelector('input[type="text"]');
const passInput = document.querySelector('input[type="password"]');
const labels = document.querySelectorAll(".form-control label");
const errorSpan1 = document.querySelector(".error-message1");
const errorSpan2 = document.querySelector(".error-message2");

labels.forEach((label) => {
  label.innerHTML = label.innerText
    .split("")
    .map((letter, idx) => `<span style=" ">${letter}</span>`)
    .join("");
});

function toggleActiveClass(label, isActive) {
  if (isActive) {
    label.classList.add("active");
  } else {
    label.classList.remove("active");
  }
}

function handleInputFocus(input, label) {
  input.classList.add("focused");
  toggleActiveClass(label, true);
}

function handleInputBlur(input, label) {
  input.classList.remove("focused");
  toggleActiveClass(label, input.value.trim() !== "");
}

usernameInput.addEventListener("focus", () => {
  handleInputFocus(usernameInput, labels[0]);
});

usernameInput.addEventListener("blur", () => {
  handleInputBlur(usernameInput, labels[0]);
});

passInput.addEventListener("focus", () => {
  handleInputFocus(passInput, labels[1]);
});

passInput.addEventListener("blur", () => {
  handleInputBlur(passInput, labels[1]);
});

form.addEventListener("submit", (e) => {
  e.preventDefault();

  let hasError = false;

  if (usernameInput.value === "") {
    errorSpan1.textContent = "Vui lòng nhập tên đăng nhập!";
    hasError = true;
  } else {
    errorSpan1.textContent = "";
  }

  if (passInput.value === "") {
    errorSpan2.textContent = "Vui lòng nhập mật khẩu!";
    hasError = true;
  } else {
    errorSpan2.textContent = "";
  }

  if (!hasError) {
    console.log("Form submitted successfully!");
  }
});
