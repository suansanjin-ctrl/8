const navLinks = document.querySelectorAll(".links a[href^='#']");

function setActiveNav() {
  if (!navLinks.length) return;
  const hash = window.location.hash || "#front";
  navLinks.forEach((link) => {
    link.classList.toggle("active", link.getAttribute("href") === hash);
  });
}

window.addEventListener("hashchange", setActiveNav);
setActiveNav();
