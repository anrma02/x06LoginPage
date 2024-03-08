const labels = document.querySelectorAll(".form-control label");

labels.forEach((label) => {
  label.innerHTML = label.innerText
    .split("")
    .map((letter, idx) => `<span  ">${letter}</span>`)
    .join("");
});

const input = document.querySelector(".form-control input");

input.addEventListener("focus", () => {
  input.classList.add("focused");
});

input.addEventListener("blur", () => {
  if (!input.value.trim()) {
    input.classList.remove("focused");
  }
});

const form = document.querySelector("form");

const usernameInput = document.querySelector('input[type="text"]');
const passInput = document.querySelector('input[type="password"]');

const errorSpan1 = document.querySelector(".error-message1 ");
const errorSpan2 = document.querySelector(".error-message2 ");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  if (usernameInput.value === "") {
    errorSpan1.textContent = "Vui lòng nhập tên đăng nhập!";
  } else {
    errorSpan1.textContent = "";
  }
  if (passInput.value === "") {
     errorSpan2.textContent = "Vui lòng nhập mật khẩu!";
   } else {
     errorSpan2.textContent = "";
   }

});
usernameInput.addEventListener("input", () => {
  errorSpan1.textContent = "";
});

passInput.addEventListener("input",()=>{
     errorSpan2.textContent=''
})
