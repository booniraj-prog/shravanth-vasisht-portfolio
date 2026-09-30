const nav = document.querySelector(".nav");
const toggle = document.querySelector(".nav-toggle");

toggle?.addEventListener("click", () => {
  const open = nav.classList.toggle("open");
  toggle.setAttribute("aria-expanded", String(open));
});

nav?.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => nav.classList.remove("open"));
});

document.querySelectorAll("[data-tabs]").forEach((group) => {
  const buttons = group.querySelectorAll(".tab");
  const panels = group.querySelectorAll(".panel");

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      const id = button.dataset.tab;
      buttons.forEach((item) => item.classList.toggle("active", item === button));
      panels.forEach((panel) => {
        panel.hidden = panel.id !== id;
      });
    });
  });
});

const year = document.querySelector("[data-year]");
if (year) year.textContent = String(new Date().getFullYear());

if (window.lucide) {
  window.lucide.createIcons({
    attrs: {
      "stroke-width": 1.6,
      width: 18,
      height: 18,
    },
  });
}
