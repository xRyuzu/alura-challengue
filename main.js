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
const copyBtn = document.querySelector("#copy");

input.addEventListener("keyup", (e) => {
  const value = e.target.value;
  if (value === undefined || value === null || value.trim() == "") {
    output.textContent = "";
    copyBtn.disabled = true;
    return;
  }

  output.textContent = encrypt(value);
  copyBtn.disabled = false;
});

copyBtn.addEventListener("click", () => {
  const text = output.value;

  if (text === undefined || text === null || text.trim() == "") return;

  navigator.clipboard.writeText(text);
  Swal.fire({
    toast: true,
    icon: "success",
    title: "Texto copiado al portapapeles",
    animation: true,
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
