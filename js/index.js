const form = document.querySelector("form");
const usernameInput = document.querySelector('input[type="text"]');
const passInput = document.querySelector('input[type="password"]');

const labels = document.querySelectorAll(".form-control label");
const input = document.querySelector(".form-control input");
const errorSpan1 = document.querySelector(".error-message1");
const errorSpan2 = document.querySelector(".error-message2");

labels.forEach((label) => {
  label.innerHTML = label.innerText
    .split("")
    .map((letter, idx) => `<span style=" ">${letter}</span>`)
    .join("");
});

input.addEventListener("focus", () => {
  input.classList.add("focused");
});

input.addEventListener("blur", () => {
  if (!input.value.trim()) {
    input.classList.remove("focused");
  }
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

usernameInput.addEventListener("input", () => {
  errorSpan1.textContent = "";
});

passInput.addEventListener("input", () => {
  errorSpan2.textContent = "";
});
