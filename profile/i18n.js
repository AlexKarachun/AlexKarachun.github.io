const i18n = (() => {
  const STORAGE_KEY = "profile-lang";

  function getLang() {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored === "ru" || stored === "en") return stored;
    return navigator.language && navigator.language.startsWith("ru") ? "ru" : "en";
  }

  function setLang(lang) {
    localStorage.setItem(STORAGE_KEY, lang);
    document.documentElement.lang = lang;
  }

  function initToggle(onChange) {
    const lang = getLang();
    setLang(lang);
    onChange(lang);

    document.querySelectorAll("[data-lang-toggle]").forEach((btn) => {
      btn.addEventListener("click", () => {
        const next = getLang() === "ru" ? "en" : "ru";
        setLang(next);
        updateToggleLabel();
        onChange(next);
      });
    });
    updateToggleLabel();
  }

  function updateToggleLabel() {
    const next = getLang() === "ru" ? "EN" : "RU";
    document.querySelectorAll("[data-lang-toggle]").forEach((btn) => {
      btn.textContent = next;
    });
  }

  return { getLang, setLang, initToggle };
})();
