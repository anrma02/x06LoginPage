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

usernameInput.addEventListener("input", () => {
  if (usernameInput.value === "") {
    errorSpan1.textContent = "Vui lòng nhập tên đăng nhập!";
  } else {
    errorSpan1.textContent = "";
  }
});

passInput.addEventListener("input", () => {
  if (passInput.value === "") {
    errorSpan2.textContent = "Vui lòng nhập mật khẩu!";
  } else {
    errorSpan2.textContent = "";
  }
});

form.addEventListener("submit", (e) => {
  e.preventDefault();

  let hasError = false;

  if (usernameInput.value === "") {
    errorSpan1.textContent = "Vui lòng nhập tên đăng nhập!";
    hasError = true;
  }

  if (passInput.value === "") {
    errorSpan2.textContent = "Vui lòng nhập mật khẩu!";
    hasError = true;
  }

  if (!hasError) {
    console.log("Form submitted successfully!");
  }
});
