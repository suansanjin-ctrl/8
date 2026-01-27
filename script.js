const $ = (s) => document.querySelector(s);
const $$ = (s) => document.querySelectorAll(s);

function setActiveNav() {
  const hash = location.hash || "#home";
  $$(".links a").forEach(a => a.classList.toggle("active", a.getAttribute("href") === hash));
}
window.addEventListener("hashchange", setActiveNav);
setActiveNav();

// ===== 人物列传弹窗 =====
const backdrop = $("#modalBackdrop");
const modalTitle = $("#modalTitle");
const modalSub = $("#modalSub");
const modalBody = $("#modalBody");

$$("[data-bio]").forEach(btn => {
  btn.addEventListener("click", () => {
    const data = JSON.parse(btn.getAttribute("data-bio"));
    modalTitle.textContent = data.title;
    modalSub.textContent = data.sub;
    modalBody.innerHTML = data.html;
    backdrop.style.display = "flex";
  });
});

$("#closeModal")?.addEventListener("click", () => (backdrop.style.display = "none"));
backdrop?.addEventListener("click", (e) => {
  if (e.target === backdrop) backdrop.style.display = "none";
});

// ===== 诏书展开 + 金粉 =====
const edict = $("#edict");
const edictScroll = $("#edictScroll");
const edictToggle = $("#edictToggle");
const dustBox = $("#goldDust");

function buildDust(n = 70) {
  if (!dustBox) return;
  dustBox.innerHTML = "";
  for (let i = 0; i < n; i++) {
    const p = document.createElement("i");
    const left = Math.random() * 100;
    const top = Math.random() * 30;
    const dur = 1.6 + Math.random() * 2.6;
    const delay = Math.random() * 1.8;
    const drift = (Math.random() * 60 - 30).toFixed(1) + "px";

    p.style.left = left.toFixed(2) + "%";
    p.style.top = top.toFixed(2) + "px";
    p.style.setProperty("--dur", dur.toFixed(2) + "s");
    p.style.setProperty("--delay", delay.toFixed(2) + "s");
    p.style.setProperty("--drift", drift);

    dustBox.appendChild(p);
  }
}

function openEdict(replay = false) {
  if (!edictScroll) return;

  if (replay) {
    document.body.classList.remove("edict-open");
    edictScroll.setAttribute("aria-hidden", "true");
    setTimeout(() => {
      buildDust(80);
      document.body.classList.add("edict-open");
      edictScroll.setAttribute("aria-hidden", "false");
    }, 60);
    return;
  }

  buildDust(80);
  document.body.classList.add("edict-open");
  edictScroll.setAttribute("aria-hidden", "false");
}

edictToggle?.addEventListener("click", () => openEdict(true));

// 滚动进入自动展开一次
if (edict) {
  const io = new IntersectionObserver((entries) => {
    entries.forEach((e) => {
      if (e.isIntersecting) {
        openEdict(false);
        io.disconnect();
      }
    });
  }, { threshold: 0.35 });
  io.observe(edict);
}

// 从导航点“诏书”也会触发重演
$$('a[href="#edict"]').forEach(a => {
  a.addEventListener("click", () => {
    setTimeout(() => openEdict(true), 120);
  });
});