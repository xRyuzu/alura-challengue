const translations = {};

/* JSON STRUCTURE from lang.json
{
  "text_to_encrypt_decrypt": {
    "en": "Text to encrypt/decrypt",
    "es": "Texto a encriptar/desencriptar",
    "br": "Texto a criptografar/descriptografar"
  },
*/

function loadTranslations() {
  fetch("./translations/lang.json")
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
