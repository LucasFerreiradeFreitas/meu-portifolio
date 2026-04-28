// Scroll reveal simples
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  },
  { threshold: 0.1 },
);

document.querySelectorAll(".fade-in").forEach((el) => {
  observer.observe(el);
});

// Adiciona delay nos cards para efeito cascata
document.querySelectorAll(".card").forEach((card, i) => {
  card.style.transitionDelay = `${i * 80}ms`;
});
