import "./style.css";
import Swal from "sweetalert2";
import { hash } from "./hash.js";
import { themeCheck } from "./theme.js";
import { changeLanguage } from "./translation.js";

const input = document.querySelector("#input");
const output = document.querySelector("#output");
const copyBtn = document.querySelector("#copy");
const clearBtn = document.querySelector("#clear");

clearBtn.addEventListener("click", () => {
  input.value = "";
  output.value = "";
  copyBtn.disabled = true;
  clearBtn.disabled = true;
});

input.addEventListener("keyup", (e) => {
  const value = e.target.value;
  if (value === undefined || value === null || value.trim() == "") {
    output.value = "";
    copyBtn.disabled = true;
    clearBtn.disabled = true;
    return;
  }

  output.value = hash(value);
  copyBtn.disabled = false;
  clearBtn.disabled = false;
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

themeCheck();
changeLanguage("en");
