// Tema
const themeToggle = document.getElementById("theme-toggle");
const body = document.body;

themeToggle.addEventListener("click", () => {
  body.classList.toggle("dark");
  body.classList.toggle("light");
  themeToggle.textContent = body.classList.contains("dark") ? "🌙" : "☀️";
});

// Dil
const langSwitch = document.getElementById("lang-switch");

langSwitch.addEventListener("change", () => {
  const lang = langSwitch.value;
  document.querySelectorAll("[data-en]").forEach(el => {
    el.textContent = el.getAttribute(`data-${lang}`);
  });
});

// Sayfa açıldığında varsayılan dili uygula
window.addEventListener("DOMContentLoaded", () => {
  const lang = langSwitch.value; // select'teki mevcut dil (ör. English)
  document.querySelectorAll("[data-en]").forEach(el => {
    el.textContent = el.getAttribute(`data-${lang}`);
  });
});

