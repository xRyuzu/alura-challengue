const translations = {};

const URL =
  "https://raw.githubusercontent.com/xRyuzu/alura-challengue/master/lang.json";

function loadTranslations() {
  fetch(URL)
    .then((response) => response.json())
    .then((data) => {
      Object.assign(translations, data);
      console.table(translations);
    });
}

function translate(locale) {
  const elements = document.querySelectorAll("[data-i18n]");
  elements.forEach((element) => {
    const key = element.getAttribute("data-i18n");
    const translationsForKey = translations[key];
    if (translationsForKey && translationsForKey[locale]) {
      const translation = translationsForKey[locale];
      if (element.placeholder) {
        element.placeholder = translation;
      } else {
        element.textContent = translation;
      }
    }
  });
}

function changeLanguage(locale) {
  translate(locale);
}

document.addEventListener("DOMContentLoaded", () => {
  loadTranslations();
});

const languageBtns = document.querySelectorAll(".language-btn");
languageBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    const locale = btn.getAttribute("data-locale");
    changeLanguage(locale);
  });
});

export { changeLanguage };
