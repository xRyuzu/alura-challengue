import "./style.css";
import Swal from "sweetalert2";

const encrypt = (text) => {
  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  const alphabetArray = alphabet.split("");
  const textArray = text.split("");
  const encryptedArray = textArray.map((letter) => {
    const index = alphabetArray.indexOf(letter);
    if (index === -1) return letter;
    const newIndex = (index + 13) % 26;
    return alphabetArray[newIndex];
  });
  return encryptedArray.join("");
};

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

  output.value = encrypt(value);
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

const sun = document.querySelector("#sun");
const moon = document.querySelector("#moon");

const userTheme = localStorage.getItem("theme");
const systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches;

const iconToggle = () => {
  moon.classList.toggle("hidden");
  sun.classList.toggle("hidden");
};

const themeCheck = () => {
  if (userTheme === "dark" || (userTheme === null && systemTheme)) {
    document.documentElement.classList.add("dark");
    localStorage.setItem("theme", "dark");
    sun.classList.remove("hidden");
    return;
  }

  localStorage.setItem("theme", "light");
  moon.classList.remove("hidden");
};

const themeSwitch = () => {
  if (document.documentElement.classList.contains("dark")) {
    document.documentElement.classList.remove("dark");
    localStorage.setItem("theme", "light");
    iconToggle();
    return;
  }

  document.documentElement.classList.add("dark");
  localStorage.setItem("theme", "dark");
  iconToggle();
};

sun.addEventListener("click", themeSwitch);
moon.addEventListener("click", themeSwitch);

themeCheck();
