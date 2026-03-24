/* ---------------------------
   Config (edita aquí tus links y datos)
---------------------------- */
const PROFILE = {
  email: "tu-email@dominio.com",
  github: "#",
  linkedin: "#",
  devto: "#", // o tu perfil dev.to/medium
};

/* Skills (curado, “tipo recruiter”)
   - icon: iniciales si no hay logo (fallback).
   - logo (opcional): SVG en assets/skills/ (Simple Icons CC0 — https://simpleicons.org/)
*/
const SKILLS = [
  { name: "AWS", icon: "AW", logo: "assets/skills/amazonaws.svg" },
  { name: "EC2", icon: "E2", logo: "assets/skills/amazonaws.svg" },
  { name: "ALB", icon: "LB", logo: "assets/skills/amazonaws.svg" },
  { name: "Auto Scaling", icon: "AS", logo: "assets/skills/amazonaws.svg" },
  { name: "RDS (MySQL)", icon: "DB", logo: "assets/skills/mysql.svg" },
  { name: "SSM Parameter Store", icon: "SS", logo: "assets/skills/amazonaws.svg" },
  { name: "CloudWatch", icon: "CW", logo: "assets/skills/amazoncloudwatch.svg" },
  { name: "IAM (base)", icon: "IA", logo: "assets/skills/amazonaws.svg" },
  { name: "Terraform", icon: "TF", logo: "assets/skills/terraform.svg" },
  { name: "Terraform Modules", icon: "MD", logo: "assets/skills/terraform.svg" },
  { name: "Remote State (opt.)", icon: "ST", logo: "assets/skills/terraform.svg" },
  { name: "Linux", icon: "LX", logo: "assets/skills/linux.svg" },
  { name: "Docker", icon: "DK", logo: "assets/skills/docker.svg" },
  { name: "Kubernetes", icon: "K8", logo: "assets/skills/kubernetes.svg" },
  { name: "Ingress", icon: "IN", logo: "assets/skills/kubernetes.svg" },
  { name: "Liveness/Readiness", icon: "HP", logo: "assets/skills/kubernetes.svg" },
  { name: "Git & GitHub", icon: "GT", logo: "assets/skills/github.svg" },
  { name: "CI/CD (opt.)", icon: "CI", logo: "assets/skills/githubactions.svg" },
  { name: "Observabilidad", icon: "OB", logo: "assets/skills/prometheus.svg" },
  { name: "Runbooks", icon: "RB" },
  { name: "Troubleshooting", icon: "TR" },
];

/* Proyectos (placeholders hasta que crees repos) */
const PROJECTS = [
  {
    title: "AWS Mini Helpdesk (Escalable + Observable)",
    desc: "Deploy de app con ALB + ASG + RDS + SSM + CloudWatch. Evidencias: health checks, alarmas y runbook.",
    tags: ["AWS", "ALB", "ASG", "RDS", "SSM", "CloudWatch"],
    status: "MVP en construcción",
    links: { github: "#", live: "#", blog: "#" },
  },
  {
    title: "Terraform: Infra Reproducible (Modules + Environments)",
    desc: "Estructura profesional: modules/ + environments/ (dev/prod), outputs útiles y convenciones de tags/naming.",
    tags: ["Terraform", "IaC", "AWS"],
    status: "MVP en construcción",
    links: { github: "#", live: null, blog: "#" },
  },
  {
    title: "Kubernetes Lab: Deploy + Ingress + Probes",
    desc: "App dockerizada y desplegada en K8s con Ingress, liveness/readiness, rolling updates y troubleshooting.",
    tags: ["Docker", "Kubernetes", "Ingress"],
    status: "MVP en construcción",
    links: { github: "#", live: null, blog: "#" },
  },
  /* Puedes añadir más proyectos después */
];

/* ---------------------------
   Helpers
---------------------------- */
function $(sel, root = document) { return root.querySelector(sel); }
function $all(sel, root = document) { return Array.from(root.querySelectorAll(sel)); }
function uniq(arr) { return Array.from(new Set(arr)); }

/* ---------------------------
   Theme toggle
---------------------------- */
function initTheme() {
  const stored = localStorage.getItem("theme");
  if (stored === "light") document.documentElement.setAttribute("data-theme", "light");

  $("#themeToggle")?.addEventListener("click", () => {
    const isLight = document.documentElement.getAttribute("data-theme") === "light";
    if (isLight) document.documentElement.removeAttribute("data-theme");
    else document.documentElement.setAttribute("data-theme", "light");
    localStorage.setItem("theme", isLight ? "dark" : "light");
  });
}

/* ---------------------------
   Mobile nav
---------------------------- */
function initNav() {
  const btn = $("#navToggle");
  const menu = $("#navMenu");
  if (!btn || !menu) return;

  btn.addEventListener("click", () => {
    const isOpen = menu.classList.toggle("is-open");
    btn.setAttribute("aria-expanded", String(isOpen));
  });

  // Close on click link
  $all(".nav__link", menu).forEach(a => {
    a.addEventListener("click", () => {
      menu.classList.remove("is-open");
      btn.setAttribute("aria-expanded", "false");
    });
  });

  // Close on outside click
  document.addEventListener("click", (e) => {
    if (!menu.classList.contains("is-open")) return;
    const within = menu.contains(e.target) || btn.contains(e.target);
    if (!within) {
      menu.classList.remove("is-open");
      btn.setAttribute("aria-expanded", "false");
    }
  });
}

/* ---------------------------
   Print to PDF
---------------------------- */
function initPrint() {
  $("#printBtn")?.addEventListener("click", () => window.print());
}

/* ---------------------------
   Skills render + Show All
---------------------------- */
function renderSkills() {
  const grid = $("#skillsGrid");
  if (!grid) return;

  const totalEl = $("#skillsTotal");
  const shownEl = $("#skillsShown");
  const toggleBtn = $("#skillsToggle");

  const initialCount = 12;
  let expanded = false;

  totalEl.textContent = String(SKILLS.length);

  function paint() {
    const visible = expanded ? SKILLS : SKILLS.slice(0, initialCount);
    grid.innerHTML = visible.map(s => {
      const iconInner = s.logo
        ? `<img class="skillCard__logo" src="${escapeAttr(s.logo)}" alt="" width="28" height="28" loading="lazy" decoding="async" />`
        : escapeHtml(s.icon);
      return `
      <div class="skillCard" role="listitem">
        <div class="skillCard__icon" aria-hidden="true">${iconInner}</div>
        <p class="skillCard__name">${escapeHtml(s.name)}</p>
      </div>`;
    }).join("");

    shownEl.textContent = String(visible.length);
    toggleBtn.textContent = expanded ? "Show Less" : "Show All";
  }

  toggleBtn?.addEventListener("click", () => {
    expanded = !expanded;
    paint();
  });

  paint();
}

/* ---------------------------
   Projects render + tag filter + Show All
---------------------------- */
function renderProjects() {
  const grid = $("#projectsGrid");
  const totalEl = $("#projectsTotal");
  const shownEl = $("#projectsShown");
  const toggleBtn = $("#projectsToggle");
  const tagRow = $("#tagRow");
  const clearBtn = $("#clearTags");
  const infoEl = $("#activeTagsInfo");

  if (!grid || !totalEl || !shownEl || !tagRow || !toggleBtn) return;

  const initialCount = 6;
  let expanded = false;
  let activeTags = new Set();

  const allTags = uniq(PROJECTS.flatMap(p => p.tags)).sort((a,b) => a.localeCompare(b));

  totalEl.textContent = String(PROJECTS.length);

  // Render tags
  tagRow.innerHTML = allTags.map(t => `
    <button class="tag" type="button" aria-pressed="false" data-tag="${escapeAttr(t)}">${escapeHtml(t)}</button>
  `).join("");

  function matchesTags(project) {
    if (activeTags.size === 0) return true;
    // AND filter: project must include all selected tags
    return Array.from(activeTags).every(tag => project.tags.includes(tag));
  }

  function updateTagUI() {
    $all(".tag", tagRow).forEach(btn => {
      const t = btn.getAttribute("data-tag");
      const pressed = activeTags.has(t);
      btn.setAttribute("aria-pressed", String(pressed));
    });

    if (activeTags.size === 0) infoEl.textContent = "No filters";
    else infoEl.textContent = `Active: ${Array.from(activeTags).join(", ")}`;
  }

  function paint() {
    const filtered = PROJECTS.filter(matchesTags);
    const visible = expanded ? filtered : filtered.slice(0, initialCount);

    grid.innerHTML = visible.map(p => projectCardHtml(p)).join("");
    shownEl.textContent = String(visible.length);

    toggleBtn.textContent = expanded ? "Show Less" : "Show All";
  }

  // Tag click
  $all(".tag", tagRow).forEach(btn => {
    btn.addEventListener("click", () => {
      const t = btn.getAttribute("data-tag");
      if (activeTags.has(t)) activeTags.delete(t);
      else activeTags.add(t);

      expanded = false; // reset pagination on filter change
      updateTagUI();
      paint();
    });
  });

  clearBtn?.addEventListener("click", () => {
    activeTags = new Set();
    expanded = false;
    updateTagUI();
    paint();
  });

  toggleBtn.addEventListener("click", () => {
    expanded = !expanded;
    paint();
  });

  updateTagUI();
  paint();
}

function projectCardHtml(p) {
  const tags = p.tags.slice(0, 6).map(t => `<span class="metaChip">${escapeHtml(t)}</span>`).join("");
  const links = [];

  if (p.links.github) links.push(`<a class="actionLink" href="${escapeAttr(p.links.github)}" target="_blank" rel="noreferrer">GitHub</a>`);
  if (p.links.blog) links.push(`<a class="actionLink" href="${escapeAttr(p.links.blog)}" target="_blank" rel="noreferrer">Blog</a>`);
  if (p.links.live) links.push(`<a class="actionLink" href="${escapeAttr(p.links.live)}" target="_blank" rel="noreferrer">Live</a>`);

  return `
    <article class="projectCard">
      <div class="projectCard__cover">
        <span class="projectCard__coverLabel">${escapeHtml(p.status)}</span>
      </div>
      <div class="projectCard__body">
        <h3 class="projectCard__title">${escapeHtml(p.title)}</h3>
        <p class="projectCard__desc">${escapeHtml(p.desc)}</p>

        <div class="projectCard__meta">${tags}</div>

        <div class="projectCard__actions">
          ${links.join("")}
        </div>
      </div>
    </article>
  `;
}

/* ---------------------------
   Blogs (placeholder)
   - Puedes cambiar a fetch real cuando tengas usuario en dev.to/medium
---------------------------- */
function initBlogs() {
  const state = $("#blogState");
  const stateText = $("#blogStateText");
  const list = $("#blogList");
  if (!state || !stateText || !list) return;

  // Simula carga + muestra 3 placeholders “pro”
  setTimeout(() => {
    const items = [
      { title: "Cómo estructuro un proyecto AWS con evidencias (diagramas + runbook)", meta: "Coming soon · Cloud portfolio" },
      { title: "Terraform modules: buenas prácticas para entornos dev/prod", meta: "Coming soon · IaC" },
      { title: "Kubernetes health probes: liveness vs readiness en la práctica", meta: "Coming soon · K8s" },
    ];

    list.innerHTML = items.map(i => `
      <div class="blogItem">
        <p class="blogItem__title">${escapeHtml(i.title)}</p>
        <p class="blogItem__meta">${escapeHtml(i.meta)}</p>
      </div>
    `).join("");

    stateText.textContent = "Blogs listos para publicar (placeholders).";
    $(".spinner", state)?.remove();
    list.hidden = false;
  }, 700);
}

/* ---------------------------
   Contact form (frontend-only)
---------------------------- */
function initContactForm() {
  const form = $("#contactForm");
  if (!form) return;

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    alert("✅ Mensaje preparado. Para envío real, conecta Formspree/Netlify Forms/AWS SES.");
    form.reset();
  });
}

/* ---------------------------
   Footer year
---------------------------- */
function initYear() {
  const y = $("#year");
  if (y) y.textContent = String(new Date().getFullYear());
}

/* ---------------------------
   Escape helpers (XSS-safe)
---------------------------- */
function escapeHtml(str) {
  return String(str)
    .replaceAll("&","&amp;")
    .replaceAll("<","&lt;")
    .replaceAll(">","&gt;")
    .replaceAll('"',"&quot;")
    .replaceAll("'","&#039;");
}
function escapeAttr(str) {
  return escapeHtml(str).replaceAll("`","&#096;");
}

/* ---------------------------
   Init
---------------------------- */
document.addEventListener("DOMContentLoaded", () => {
  initTheme();
  initNav();
  initPrint();
  renderSkills();
  renderProjects();
  initBlogs();
  initContactForm();
  initYear();
});