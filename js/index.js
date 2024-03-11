const form = document.querySelector("form");
const usernameInput = document.querySelector('input[type="text"]');
const passInput = document.querySelector('input[type="password"]');
const labels = document.querySelectorAll(".form-control label");
const errorSpan1 = document.querySelector(".error-message1");
const errorSpan2 = document.querySelector(".error-message2");
const generalErrorMessage = document.getElementById("error-message");

labels.forEach((label) => {
  label.innerHTML = label.innerText
    .split("")
    .map((letter, idx) => `<span style=" ">${letter}</span>`)
    .join("");
});

const button = document.getElementById("myButton");

button.addEventListener("mousedown", function () {
  button.classList.add("active");
});

button.addEventListener("mouseup", function () {
  button.classList.remove("active");
});

usernameInput.addEventListener("input", () => {
  if (usernameInput.value === "") {
    errorSpan1.textContent = "Vui lòng nhập tên đăng nhập!";
  } else {
    errorSpan1.textContent = "";
    generalErrorMessage.textContent = ""; // Clear general error message
  }
});

passInput.addEventListener("input", () => {
  if (passInput.value === "") {
    errorSpan2.textContent = "Vui lòng nhập mật khẩu!";
  } else {
    errorSpan2.textContent = "";
    generalErrorMessage.textContent = ""; // Clear general error message
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
    generalErrorMessage.textContent = "Tên đăng nhập hoặc mật khẩu sai!";
    generalErrorMessage.style.display = "block";
  } else {
    generalErrorMessage.textContent = "";
    generalErrorMessage.style.display = "none";

    console.log("Form submitted successfully!");
  }
});
