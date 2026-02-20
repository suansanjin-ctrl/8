const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
const MODAL_VERSION = "royal-2026-02-20c";
document.body.classList.toggle("reduced-motion", prefersReducedMotion);

const data = {
  headline: {
    href: "./front/tian-kehan/",
    title: "帝国成为大一统的多民族国家",
    excerpt:
      "安多来者躬身归附，非奉命而来，非代人而言，乃自择其道而投其所信，如清流自归大海。其既入，四方诸族闻其向化，乃相继来会：辞语虽殊，而同愿受律；礼俗各异，而共求安业。朝廷不以衣冠别亲疏，不以族类分缓急，惟以同律为绳，以信约为本：曲直有据，赏罚有章。于是诸族各安其俗，各循其业，而同归一法，同奉一统；名分始一，众心渐齐。群下遂共举尊号曰天可汗、丁可汗，帝辞之再而受之，以一身当万方之托；自此帝国不止一族一地之聚，乃万方同轨、诸族共治之大一统。",
    tags: ["头条", "御前告示"],
  },
  edicts: [
    {
      href: "./edict/tonglv/",
      title: "同律诏",
      excerpt: "族类虽殊，同愿受律；朝廷惟以法度定曲直，不以衣冠分亲疏。",
      tags: ["同律", "信约"],
    },
  ],
  chronicles: [
    {
      href: "./chronicle/zihan-four/",
      title: "紫晗四年纪要",
      excerpt: "法度既立，同律入册；四方来会，名分始一。此卷录其概。",
      tags: ["紫晗四年", "纪要"],
    },
  ],
  people: [
    {
      slug: "dingdi",
      title: "丁帝",
      subtitle: "本纪 · 开国御极",
      excerpt:
        "丁帝者，苏州人也。少而沉静，目有光，语不妄。道山举义，亲秉旌钺，禁扰民、明赏罚，群心自归。",
      content: [
        "丁帝者，苏州人也。少而沉静，目有光，语不妄。见世道崩坏，常曰：“欲定天下，当先定人心。”",
        "道山举义，帝亲临其事，禁扰民、止滥杀、明赏罚。士卒甘为其死，百姓愿为其守。",
        "即位之后，昼理百务，夜阅章奏；其威不怒而肃，其恩不言而泽。群下以为法度所归，众心由是而定。",
        "众皆称曰：“帝心若鉴，照奸如昼；帝手若衡，轻重不差。”",
        "帝居殿中，言简而断；帝行郊外，民自肃而不扰。",
      ],
      tags: ["本纪", "御极"],
    },
    {
      slug: "liujun",
      title: "刘将军",
      subtitle: "骑羊大将",
      excerpt:
        "轻骑如风，羊铃为号。道山之役护民不惊，北上之行断粮不惧，以奇正相济，敌未觉而势已定。",
      content: [
        "刘将军者，号“骑羊大将”。兵贵神速，胜在奇正。常以白羊为前导，铃声清越，闻者心惊。",
        "道山之役，刘将军穿巷入市，护民不惊；北上之行，雪夜断粮，乃驱羊负囊，行山径三百里，军中赖之而全。",
        "帝赐金符，命掌轻骑。众皆称曰：“其来也不见尘，其击也不见影；敌未觉而势已折。”",
        "羊铃一响，影落千军；铃息而阵息，众闻之而自肃。",
      ],
      tags: ["列传", "骑羊大将"],
    },
    {
      slug: "haobowen",
      title: "郝博文",
      subtitle: "帝师 · 帝国第一勇士",
      excerpt:
        "苏州辅佐帝研卷讲解有功，青衿诸科算题应对如流。帝本勇武，不轻许第一，只比掰腕，再三而定名。",
      content: [
        "郝博文者，少习经义，兼通算学。帝在苏州时，召之研卷讲解，尤重青衿诸科算题。博文对答明切，帝嘉其用心。",
        "帝本勇武，不轻许第一。乃与博文比掰腕，别无他技。初比力均，再比亦然，复比而后决。",
        "帝遂册之为帝国第一勇士，仍居帝师之位，主讲国学，启迪群才。",
        "其言简而意深，其教严而不苛，诸生由是知所归。",
      ],
      tags: ["帝师", "第一勇士"],
    },
    {
      slug: "wangyuan",
      title: "王远",
      subtitle: "交通部部长 · 帝国第一球王",
      excerpt:
        "未建元时，帝数以轻车送其归；北上镇东北，后擢交通部部长。",
      content: [
        "王远者，早岁未建元时，帝数以轻车送其归，王远感恩，遂誓以忠心。",
        "帝国初立，王远一度为女子巧言所惑，心志摇动，不识帝命。其后自悟，乃北上助帝镇东北，驻扎大连，以守一方。",
        "帝念其功，擢为交通部部长，掌行旅之令，定关市互市之程。廷中试蹴鞠，发球如电，众皆叹服。帝曰：“此可称第一球王。”遂册之。",
        "王远自请谨守信约，凡事取其诚，不以浮词乱众。",
      ],
      tags: ["交通部", "第一球王"],
    },
    {
      slug: "jiayangcao",
      title: "嘉央草（降央措）",
      subtitle: "安多来者 · 旧府交通馆主席",
      excerpt:
        "甘肃安多人，非使者，自愿归附。旧府交通馆主席，朝中传曰预掌甘肃。",
      content: [
        "嘉央草（降央措），甘肃安多人也，非使者，乃自来。",
        "旧府交通馆主席，仍守其职。其心向帝国天威与法度，自愿归附，辞色甚诚，朝廷遂纳之。",
        "朝中传曰，帝意属之，命预掌甘肃条目，后当为甘肃省长，以定一方之务。",
        "安多人众闻其向化，亦相继来会，皆愿同律而安业。",
      ],
      tags: ["安多", "甘肃"],
    },
    {
      slug: "jiangyitong",
      title: "姜贼/姜懿桐",
      excerpt:
        "姜懿桐，旧称姜贼。初以教务自矜，言多惑众，帝初容之，后见其扰纪，夺其权，使自省。",
      content: [
        "姜懿桐，旧称姜贼。初以教务自矜，言多惑众，帝初容之，后见其扰纪，夺其权，使自省。",
        "其后姜懿桐数从帝入王者峡谷，遇围急之际，辄护其前后，断追截冲，屡有功。帝念其能改，曰：“前过可赦，后功可录。”遂释其旧罪，不复尽以旧名罪之，使仍听调度，以观其志。",
        "然近来复为女色所惑，志气时摇，言行或失其度。帝闻而戒曰：“能护驾于峡中，亦当护心于色前；一念不正，则万功皆轻。”众皆侧目，观其后效。",
        "帝虽宽其罪，仍以礼法督其行，俾知慎终如始。",
      ],
      tags: ["列传", "旧称姜贼"],
    },
  ],
  artifacts: [
    {
      href: "./artifacts/daoshan-stele/",
      title: "道山遗碑",
      excerpt: "道山举义之后立石以记誓言，同律与信约刻其上。",
      tags: ["古迹", "遗碑"],
    },
    {
      href: "./artifacts/jinlong-emblem/",
      title: "金龙环徽",
      excerpt: "金龙环护，徽中书国号，以示法信与同轨。",
      tags: ["徽章", "法信"],
    },
  ],
  campaigns: [
    {
      href: "./campaigns/guan-zhong/",
      title: "关中定策",
      excerpt: "帝察其势，先定纲纪，后合诸军；令出如山，众心自归。",
      tags: ["关中", "定策"],
    },
  ],
  seals: [
    {
      href: "./seal/imperial/",
      title: "朱玺镇国",
      excerpt: "玺者信也，令有据而民自从。",
      image: "./assets/seal.jpeg",
      imageAlt: "朱玺印章",
      tags: ["国玺", "法信"],
    },
  ],
};

function renderTags(tags) {
  if (!tags || !tags.length) return "";
  return `<div class="kicker">${tags
    .map((tag) => `<span class="tag">${tag}</span>`)
    .join("")}</div>`;
}

function renderParagraph(text) {
  if (!text) return "";
  return `<p>${text}</p>`;
}

function renderHeadline(headline) {
  if (!headline || !headline.title || !headline.excerpt || !headline.href) return "";
  return `
    <section class="headline reveal">
      <a class="headline-card interactive" href="${headline.href}">
        ${renderTags(headline.tags)}
        <h2>${headline.title}</h2>
        ${renderParagraph(headline.excerpt)}
      </a>
    </section>
  `;
}

function renderCard(item) {
  if (!item || !item.title || !item.href) return "";
  const subtitle = item.subtitle ? `<p>${item.subtitle}</p>` : "";
  const excerpt = item.excerpt ? `<p>${item.excerpt}</p>` : "";
  const extra = item.extra ? `<p>${item.extra}</p>` : "";
  const tail = item.tail ? `<p>${item.tail}</p>` : "";
  const image = item.image
    ? `<div class="card-media"><img src="${item.image}" alt="${item.imageAlt || item.title}" /></div>`
    : "";
  const hasMediaClass = item.image ? " has-media" : "";
  return `
    <a class="card interactive${hasMediaClass}" href="${item.href}">
      <div class="card-body">
        ${renderTags(item.tags)}
        <h3>${item.title}</h3>
        ${subtitle}
        ${excerpt}
        ${extra}
        ${tail}
      </div>
      ${image}
    </a>
  `;
}

function renderPeopleSection(items) {
  if (!items || !items.length) return "";
  const cards = items
    .map((person) => {
      if (!person.title || !person.slug) return "";
      const subtitle = person.subtitle ? `<p>${person.subtitle}</p>` : "";
      const excerpt = person.excerpt ? `<p>${person.excerpt}</p>` : "";
      return `
        <button class="card interactive card-button" type="button" data-person="${person.slug}">
          <div class="card-body">
            ${renderTags(person.tags)}
            <h3>${person.title}</h3>
            ${subtitle}
            ${excerpt}
          </div>
        </button>
      `;
    })
    .filter(Boolean)
    .join("");
  if (!cards) return "";
  return `
    <section class="section reveal" id="ministers">
      <h2>列传</h2>
      <p class="lead">诸臣事略，皆为概览。点入可见详情。</p>
      <div class="grid">${cards}</div>
    </section>
  `;
}

function renderCardSection({ id, title, lead, items }) {
  if (!items || !items.length) return "";
  const cards = items.map(renderCard).filter(Boolean).join("");
  if (!cards) return "";
  return `
    <section class="section reveal" id="${id}">
      ${title ? `<h2>${title}</h2>` : ""}
      ${lead ? `<p class="lead">${lead}</p>` : ""}
      <div class="grid">${cards}</div>
    </section>
  `;
}

function renderSections() {
  const sections = [];

  const headline = renderHeadline(data.headline);
  if (headline) sections.push(headline);

  const edicts = renderCardSection({
    id: "edict",
    title: "诏书",
    lead: "诏示以同律为纲，以信约为本。择其要者录于此页。",
    items: data.edicts,
  });
  if (edicts) sections.push(edicts);

  const chronicle = renderCardSection({
    id: "chronicle",
    title: "纪年",
    lead: "紫晗四年纪要在此，细目另入诸卷。",
    items: data.chronicles,
  });
  if (chronicle) sections.push(chronicle);

  const people = renderPeopleSection(data.people);
  if (people) sections.push(people);

  const artifacts = renderCardSection({
    id: "artifacts",
    title: "古迹与物品",
    lead: "旧物有记，言出有据。择其可陈者列之。",
    items: data.artifacts,
  });
  if (artifacts) sections.push(artifacts);

  const campaigns = renderCardSection({
    id: "campaigns",
    title: "征讨",
    lead: "军令所行，先定法度，后合诸军。此卷录其一隅。",
    items: data.campaigns,
  });
  if (campaigns) sections.push(campaigns);

  const seal = renderCardSection({
    id: "seal",
    title: "国玺",
    lead: "玺者信也，令必有据。此卷略述其制。",
    items: data.seals,
  });
  if (seal) sections.push(seal);

  if (!sections.length) return "";

  return sections
    .map((section, index) => {
      const divider = index < sections.length - 1 ? '<hr class="sep" />' : "";
      return `${section}${divider}`;
    })
    .join("");
}

function mountSections() {
  const container = document.getElementById("content");
  if (!container) return;
  const html = renderSections();
  if (!html) {
    container.remove();
    return;
  }
  container.innerHTML = html;
}

function pruneNavLinks() {
  const navLinks = document.querySelectorAll(".links a[href^='#']");
  navLinks.forEach((link) => {
    const target = document.querySelector(link.getAttribute("href"));
    if (!target) link.remove();
  });
}

function setActiveNav() {
  const navLinks = document.querySelectorAll(".links a[href^='#']");
  if (!navLinks.length) return;
  const hash = window.location.hash || "#front";
  navLinks.forEach((link) => {
    link.classList.toggle("active", link.getAttribute("href") === hash);
  });
}

function initReveal() {
  const revealItems = document.querySelectorAll(".reveal");
  if (!revealItems.length) return;

  if (prefersReducedMotion) {
    revealItems.forEach((item) => item.classList.add("is-visible"));
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.18 }
  );

  revealItems.forEach((item) => observer.observe(item));
}

function initStagger() {
  const groups = document.querySelectorAll("[data-stagger]");
  if (!groups.length) return;
  if (prefersReducedMotion) {
    groups.forEach((group) => {
      group.querySelectorAll("[data-animate]").forEach((item) => {
        item.style.opacity = "1";
        item.style.transform = "none";
      });
    });
    return;
  }
  groups.forEach((group) => {
    const items = group.querySelectorAll("[data-animate]");
    items.forEach((item, index) => {
      item.style.animationDelay = `${120 + index * 80}ms`;
      item.classList.add("stagger-in");
    });
  });
}


function createImperialModal(headline) {
  if (!headline || !headline.title || !headline.excerpt) return null;

  const modal = document.createElement("div");
  modal.className = "imperial-modal";
  modal.setAttribute("role", "dialog");
  modal.setAttribute("aria-modal", "true");
  modal.setAttribute("aria-hidden", "true");
  modal.innerHTML = `
    <div class="imperial-overlay" data-close></div>
    <div class="imperial-dialog" role="document" tabindex="-1">
      <div class="imperial-glitter" aria-hidden="true"></div>
      <div class="imperial-watermark" aria-hidden="true"></div>
      <button class="imperial-close" type="button" aria-label="关闭">×</button>
      <div class="imperial-content">
        <p class="eyebrow">御前告示</p>
        <h2>${headline.title}</h2>
        <p>${headline.excerpt}</p>
        <div class="imperial-actions">
          <a class="imperial-primary interactive" href="${headline.href}">入卷详览</a>
          <button class="imperial-secondary" type="button" data-dismiss>今日不再提示</button>
        </div>
        <p class="imperial-seal">紫晗四年</p>
      </div>
    </div>
  `;
  document.body.appendChild(modal);
  return modal;
}

function initImperialModal() {
  if (!data.headline || !data.headline.title || !data.headline.excerpt) return;
  const modal = createImperialModal(data.headline);
  if (!modal) return;

  const dialog = modal.querySelector(".imperial-dialog");
  const closeBtn = modal.querySelector(".imperial-close");
  const dismissBtn = modal.querySelector("[data-dismiss]");
  const overlay = modal.querySelector("[data-close]");
  let lastFocused = null;

  const focusables = () =>
    Array.from(modal.querySelectorAll("a[href], button, [tabindex]:not([tabindex='-1'])"));

  const trapFocus = (event) => {
    if (event.key !== "Tab") return;
    const items = focusables();
    if (!items.length) return;
    const first = items[0];
    const last = items[items.length - 1];
    if (event.shiftKey && document.activeElement === first) {
      event.preventDefault();
      last.focus();
    } else if (!event.shiftKey && document.activeElement === last) {
      event.preventDefault();
      first.focus();
    }
  };

  const openModal = (trigger, fromAuto = false) => {
    lastFocused = trigger || document.activeElement;
    modal.setAttribute("aria-hidden", "false");
    modal.classList.add("is-open");
    document.body.classList.add("modal-open");
    dialog.focus();
    document.addEventListener("keydown", handleKeydown);
    modal.addEventListener("keydown", trapFocus);
    if (fromAuto) {
      try {
        localStorage.setItem("imperialModalLastShown", String(Date.now()));
        localStorage.setItem("imperialModalVersion", MODAL_VERSION);
      } catch {}
    }
  };

  const closeModal = () => {
    modal.classList.remove("is-open");
    modal.setAttribute("aria-hidden", "true");
    document.body.classList.remove("modal-open");
    document.removeEventListener("keydown", handleKeydown);
    modal.removeEventListener("keydown", trapFocus);
    if (lastFocused && typeof lastFocused.focus === "function") {
      lastFocused.focus();
    }
  };

  const handleKeydown = (event) => {
    if (event.key === "Escape") closeModal();
  };

  closeBtn.addEventListener("click", closeModal);
  overlay.addEventListener("click", closeModal);

  if (dismissBtn) {
    dismissBtn.addEventListener("click", () => {
      try {
        const today = new Date().toISOString().slice(0, 10);
        localStorage.setItem("imperialModalDismissedDate", today);
      } catch {}
      closeModal();
    });
  }

  const headlineCard = document.querySelector(".headline-card");
  if (headlineCard) {
    headlineCard.addEventListener("click", (event) => {
      event.preventDefault();
      openModal(headlineCard, false);
    });
  }

  const shouldAutoOpen = () => {
    try {
      const version = localStorage.getItem("imperialModalVersion");
      const versionChanged = version !== MODAL_VERSION;
      const last = Number(localStorage.getItem("imperialModalLastShown") || 0);
      const dismissed = localStorage.getItem("imperialModalDismissedDate");
      const today = new Date().toISOString().slice(0, 10);
      if (dismissed === today) return false;
      if (versionChanged) return true;
      return Date.now() - last > 24 * 60 * 60 * 1000;
    } catch {
      return true;
    }
  };

  if (!prefersReducedMotion && shouldAutoOpen()) {
    const delay = 300 + Math.floor(Math.random() * 600);
    setTimeout(() => openModal(document.body, true), delay);
  } else if (prefersReducedMotion && shouldAutoOpen()) {
    setTimeout(() => openModal(document.body, true), 350);
  }
}

function createPeopleModal() {
  if (!data.people || !data.people.length) return null;
  const modal = document.createElement("div");
  modal.className = "people-modal";
  modal.setAttribute("role", "dialog");
  modal.setAttribute("aria-modal", "true");
  modal.setAttribute("aria-hidden", "true");
  modal.innerHTML = `
    <div class="people-overlay" data-close></div>
    <div class="people-dialog" role="document" tabindex="-1">
      <div class="people-watermark" aria-hidden="true"></div>
      <button class="people-close" type="button" aria-label="关闭">×</button>
      <div class="people-content">
        <p class="eyebrow">列传</p>
        <h2 class="people-title"></h2>
        <p class="people-sub"></p>
        <div class="people-body"></div>
      </div>
    </div>
  `;
  document.body.appendChild(modal);
  return modal;
}

function initPeopleModal() {
  const cards = Array.from(document.querySelectorAll("[data-person]"));
  if (!cards.length) return;
  const modal = createPeopleModal();
  if (!modal) return;

  const dialog = modal.querySelector(".people-dialog");
  const closeBtn = modal.querySelector(".people-close");
  const overlay = modal.querySelector("[data-close]");
  const titleEl = modal.querySelector(".people-title");
  const subEl = modal.querySelector(".people-sub");
  const bodyEl = modal.querySelector(".people-body");
  let lastFocused = null;
  let activeCard = null;

  const peopleMap = new Map(data.people.map((p) => [p.slug, p]));

  const focusables = () =>
    Array.from(modal.querySelectorAll("button, [tabindex]:not([tabindex='-1'])"));

  const trapFocus = (event) => {
    if (event.key !== "Tab") return;
    const items = focusables();
    if (!items.length) return;
    const first = items[0];
    const last = items[items.length - 1];
    if (event.shiftKey && document.activeElement === first) {
      event.preventDefault();
      last.focus();
    } else if (!event.shiftKey && document.activeElement === last) {
      event.preventDefault();
      first.focus();
    }
  };

  const openModal = (person, trigger) => {
    if (!person) return;
    lastFocused = trigger || document.activeElement;
    if (titleEl) titleEl.textContent = person.title || "";
    if (subEl) {
      if (person.subtitle) {
        subEl.textContent = person.subtitle;
        subEl.style.display = "block";
      } else {
        subEl.textContent = "";
        subEl.style.display = "none";
      }
    }
    if (bodyEl) {
      bodyEl.innerHTML = "";
      (person.content || [])
        .filter(Boolean)
        .forEach((para) => {
          const p = document.createElement("p");
          p.textContent = para;
          bodyEl.appendChild(p);
        });
    }

    modal.setAttribute("aria-hidden", "false");
    modal.classList.add("is-open");
    document.body.classList.add("modal-open");
    dialog.focus();
    document.addEventListener("keydown", handleKeydown);
    modal.addEventListener("keydown", trapFocus);
    if (activeCard) activeCard.classList.remove("is-selected");
    activeCard = trigger;
    if (activeCard) activeCard.classList.add("is-selected");
  };

  const closeModal = () => {
    modal.classList.remove("is-open");
    modal.setAttribute("aria-hidden", "true");
    document.body.classList.remove("modal-open");
    document.removeEventListener("keydown", handleKeydown);
    modal.removeEventListener("keydown", trapFocus);
    if (activeCard) activeCard.classList.remove("is-selected");
    if (lastFocused && typeof lastFocused.focus === "function") {
      lastFocused.focus();
    }
  };

  const handleKeydown = (event) => {
    if (event.key === "Escape") closeModal();
  };

  closeBtn.addEventListener("click", closeModal);
  overlay.addEventListener("click", closeModal);

  cards.forEach((card) => {
    card.addEventListener("click", () => {
      const slug = card.getAttribute("data-person");
      const person = peopleMap.get(slug);
      openModal(person, card);
    });
  });
}

mountSections();
pruneNavLinks();
setActiveNav();
initStagger();
initReveal();
initImperialModal();
initPeopleModal();
window.addEventListener("hashchange", setActiveNav);
