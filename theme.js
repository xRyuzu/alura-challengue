const sun = document.querySelector("#sun");
const moon = document.querySelector("#moon");

const userTheme = localStorage.getItem("theme");
const systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches;

const iconToggle = () => {
  moon.classList.toggle("hidden");
  sun.classList.toggle("hidden");
};

const setDarkTheme = (value) => {
  localStorage.setItem("theme", value ? "dark" : "light");
};

const themeCheck = () => {
  if (userTheme === "dark" || (userTheme === null && systemTheme)) {
    document.documentElement.classList.add("dark");
    setDarkTheme(true);
    sun.classList.remove("hidden");
    return;
  }

  setDarkTheme(false);
  moon.classList.remove("hidden");
};

const themeSwitch = () => {
  if (document.documentElement.classList.contains("dark")) {
    document.documentElement.classList.remove("dark");
    setDarkTheme(false);
    iconToggle();
    return;
  }

  document.documentElement.classList.add("dark");
  setDarkTheme(true);
  iconToggle();
};

sun.addEventListener("click", themeSwitch);
moon.addEventListener("click", themeSwitch);

export { themeCheck };
