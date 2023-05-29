import "./style.css";
import Swal from "sweetalert2";

const encrypt = (str) => {
  return str
    .split("")
    .map((char) => char.charCodeAt(0))
    .join("");
};

const input = document.querySelector("#input");
const output = document.querySelector("#output");

input.addEventListener("keyup", (e) => {
  const value = e.target.value;
  const output = document.querySelector("#output");
  output.textContent = encrypt(value);
});

// clering input field
const clearInput = document.querySelector("#clear-input");
const clearOutput = document.querySelector("#clear-output");

clearInput.addEventListener("click", () => {
  input.value = "";
});

clearOutput.addEventListener("click", () => {
  output.value = "";
});

// copy to clipboard
output.addEventListener("click", () => {
  const text = output.value;

  if (text === "") return;

  navigator.clipboard.writeText(text);
  Swal.fire({
    toast: true,
    icon: "success",
    title: "Copiado al portapapeles",
    animation: false,
    position: "top-end",
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.addEventListener("mouseenter", Swal.stopTimer);
      toast.addEventListener("mouseleave", Swal.resumeTimer);
    },
  });
});
