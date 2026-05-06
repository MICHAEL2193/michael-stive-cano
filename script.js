/* ---------------------------
   Configuración general
---------------------------- */
const PROFILE = {
  email: "michaelcano2193@gmail.com",
  github: "https://github.com/MICHAEL2193",
  linkedin: "https://www.linkedin.com/in/michael-stive-cano",
  portfolio: "https://michael2193.github.io/michael-stive-cano/",
};

/* ---------------------------
   Skills con logo + descripción
   Logos cargados desde Simple Icons CDN.
---------------------------- */
const SKILLS = [
  {
    name: "AWS",
    desc: "Fundamentos cloud, EC2, IAM, redes, despliegues y arquitectura base en AWS.",
    icon: "AW",
    logo: "https://cdn.jsdelivr.net/npm/simple-icons@v13/icons/amazonwebservices.svg",
  },
  {
    name: "Microsoft Azure",
    desc: "Conocimiento inicial de servicios cloud y conceptos de infraestructura en Azure.",
    icon: "AZ",
    logo: "https://cdn.jsdelivr.net/npm/simple-icons@v13/icons/microsoftazure.svg",
  },
  {
    name: "Docker",
    desc: "Containerización de aplicaciones, imágenes, Dockerfile y Docker Compose.",
    icon: "DK",
    logo: "https://cdn.jsdelivr.net/npm/simple-icons@v13/icons/docker.svg",
  },
  {
    name: "Kubernetes",
    desc: "Deployments, Services, Ingress, health probes, rolling updates y troubleshooting.",
    icon: "K8",
    logo: "https://cdn.jsdelivr.net/npm/simple-icons@v13/icons/kubernetes.svg",
  },
  {
    name: "Terraform",
    desc: "Infraestructura como código, recursos AWS, variables, outputs y estructura reproducible.",
    icon: "TF",
    logo: "https://cdn.jsdelivr.net/npm/simple-icons@v13/icons/terraform.svg",
  },
  {
    name: "Linux",
    desc: "Administración básica, permisos, servicios, paquetes, procesos y uso de terminal.",
    icon: "LX",
    logo: "https://cdn.jsdelivr.net/npm/simple-icons@v13/icons/linux.svg",
  },
  {
    name: "Bash",
    desc: "Automatización de tareas, scripts, comandos de sistema y flujos de trabajo en terminal.",
    icon: "SH",
    logo: "https://cdn.jsdelivr.net/npm/simple-icons@v13/icons/gnubash.svg",
  },
  {
    name: "Git",
    desc: "Control de versiones, ramas, commits, resolución de cambios y flujo de trabajo colaborativo.",
    icon: "GT",
    logo: "https://cdn.jsdelivr.net/npm/simple-icons@v13/icons/git.svg",
  },
  {
    name: "GitHub",
    desc: "Gestión de repositorios, documentación técnica, README, evidencias y portfolio público.",
    icon: "GH",
    logo: "https://cdn.jsdelivr.net/npm/simple-icons@v13/icons/github.svg",
  },
  {
    name: "Python",
    desc: "Automatización, análisis de datos, scripts, proyectos geoespaciales y optimización con NumPy.",
    icon: "PY",
    logo: "https://cdn.jsdelivr.net/npm/simple-icons@v13/icons/python.svg",
  },
  {
    name: "Nginx",
    desc: "Reverse proxy, exposición de aplicaciones, configuración web y health checks.",
    icon: "NX",
    logo: "https://cdn.jsdelivr.net/npm/simple-icons@v13/icons/nginx.svg",
  },
  {
    name: "Node.js",
    desc: "APIs sencillas, endpoints de health/readiness y servicios backend para prácticas cloud.",
    icon: "JS",
    logo: "https://cdn.jsdelivr.net/npm/simple-icons@v13/icons/nodedotjs.svg",
  },
  {
    name: "Excel avanzado",
    desc: "Tablas dinámicas, análisis de KPIs, reporting operativo y dashboards de seguimiento.",
    icon: "XL",
    logo: "https://cdn.jsdelivr.net/npm/simple-icons@v13/icons/microsoftexcel.svg",
  },
  {
    name: "Power BI",
    desc: "Visualización inicial de indicadores, reporting y análisis de información operativa.",
    icon: "BI",
    logo: "https://cdn.jsdelivr.net/npm/simple-icons@v13/icons/powerbi.svg",
  },
  {
    name: "SAP",
    desc: "Uso operativo para seguimiento logístico, control documental y procesos de operación.",
    icon: "SAP",
    logo: "https://cdn.jsdelivr.net/npm/simple-icons@v13/icons/sap.svg",
  },
  {
    name: "Oracle JD Edwards",
    desc: "Participación en implementación ERP, validación de información y adaptación operativa.",
    icon: "OR",
    logo: "https://cdn.jsdelivr.net/npm/simple-icons@v13/icons/oracle.svg",
  },
];

/* ---------------------------
   Proyectos destacados
---------------------------- */
const PROJECTS = [
  {
    title: "AWS Highly Available Web Architecture",
    subtitle: "ALB + Auto Scaling + EC2",
    desc: "Arquitectura web altamente disponible en AWS con VPC multi-AZ, Application Load Balancer, Auto Scaling Group, EC2, Nginx, health checks y tolerancia a fallos.",
    tags: ["AWS", "EC2", "ALB", "Auto Scaling", "Nginx"],
    status: "Cloud Architecture",
    image: "assets/img/projects/hight_available_web_architecture.png",
    imageAlt: "Diagrama de arquitectura web altamente disponible en AWS",
    links: {
      github: "https://github.com/MICHAEL2193/cloud-deploy-platform"
    }
  },
  {
    title: "Cloud Deploy Platform",
    subtitle: "AWS + Docker + Terraform",
    desc: "Despliegue de una API Node.js con Docker y Nginx, con infraestructura automatizada en AWS mediante Terraform, EC2, IAM y Systems Manager.",
    tags: ["AWS", "Docker", "Terraform", "Node.js", "SSM"],
    status: "DevOps / IaC",
    image: "assets/img/projects/cloud-deploy-platform.png",
    imageAlt: "Proyecto Cloud Deploy Platform con AWS Docker y Terraform",
    links: {
      github: "https://github.com/MICHAEL2193/cloud-deploy-platform"
    }
  },
  {
    title: "miniOIA4DL",
    subtitle: "Optimización de rendimiento en Deep Learning",
    desc: "Optimización de operaciones Conv2D sobre CIFAR-100 con Python y NumPy, analizando cuellos de botella y mejoras de rendimiento.",
    tags: ["Python", "NumPy", "Deep Learning", "Performance"],
    status: "Performance Optimization",
    image: "assets/img/projects/miniOIA.png",
    imageAlt: "Proyecto miniOIA4DL de optimización de rendimiento en deep learning",
    links: {
      github: "https://github.com/MICHAEL2193/miniOIA4DL"
    }
  },
  {
    title: "Valencia de 15 minutos",
    subtitle: "Python + Streamlit + GeoData",
    desc: "Dashboard geoespacial con datos oficiales y OpenStreetMap para scoring, clustering y visualización interactiva de accesibilidad urbana.",
    tags: ["Python", "Streamlit", "GeoData", "Data Science"],
    status: "Data Visualization",
    image: "assets/img/projects/valencia_15_minutos.png",
    imageAlt: "Dashboard geoespacial Valencia de 15 minutos",
    links: {
      github: "https://github.com/MICHAEL2193/Valencia_de_15_minutos"
    }
  }
];

/* ---------------------------
   Helpers
---------------------------- */
function $(selector, root = document) {
  return root.querySelector(selector);
}

function $all(selector, root = document) {
  return Array.from(root.querySelectorAll(selector));
}

function uniq(array) {
  return Array.from(new Set(array));
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function escapeAttr(value) {
  return escapeHtml(value).replaceAll("`", "&#096;");
}

/* ---------------------------
   Tema claro / oscuro
---------------------------- */
function initTheme() {
  const stored = localStorage.getItem("theme");

  if (stored === "light") {
    document.documentElement.setAttribute("data-theme", "light");
  }

  $("#themeToggle")?.addEventListener("click", () => {
    const isLight = document.documentElement.getAttribute("data-theme") === "light";

    if (isLight) {
      document.documentElement.removeAttribute("data-theme");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.setAttribute("data-theme", "light");
      localStorage.setItem("theme", "light");
    }
  });
}

/* ---------------------------
   Navegación móvil
---------------------------- */
function initNav() {
  const btn = $("#navToggle");
  const menu = $("#navMenu");

  if (!btn || !menu) return;

  btn.addEventListener("click", () => {
    const isOpen = menu.classList.toggle("is-open");
    btn.setAttribute("aria-expanded", String(isOpen));
  });

  $all(".nav__link", menu).forEach((link) => {
    link.addEventListener("click", () => {
      menu.classList.remove("is-open");
      btn.setAttribute("aria-expanded", "false");
    });
  });

  document.addEventListener("click", (event) => {
    if (!menu.classList.contains("is-open")) return;

    const isInside = menu.contains(event.target) || btn.contains(event.target);

    if (!isInside) {
      menu.classList.remove("is-open");
      btn.setAttribute("aria-expanded", "false");
    }
  });
}

/* ---------------------------
   Imprimir / guardar PDF
---------------------------- */
function initPrint() {
  $("#printBtn")?.addEventListener("click", () => window.print());
}

/* ---------------------------
   Render de skills
---------------------------- */
function renderSkills() {
  const grid = $("#skillsGrid");
  const totalEl = $("#skillsTotal");
  const shownEl = $("#skillsShown");
  const toggleBtn = $("#skillsToggle");

  if (!grid || !totalEl || !shownEl || !toggleBtn) return;

  const initialCount = 12;
  let expanded = false;

  totalEl.textContent = String(SKILLS.length);

  function paint() {
    const visible = expanded ? SKILLS : SKILLS.slice(0, initialCount);

    grid.innerHTML = visible
      .map((skill) => {
        const icon = skill.logo
          ? `<img class="skillCard__logo" src="${escapeAttr(skill.logo)}" alt="Logo de ${escapeAttr(skill.name)}" loading="lazy" decoding="async" />`
          : `<span>${escapeHtml(skill.icon)}</span>`;

        return `
          <article class="skillCard" role="listitem">
            <div class="skillCard__icon" aria-hidden="true">${icon}</div>
            <div class="skillCard__body">
              <h3 class="skillCard__name">${escapeHtml(skill.name)}</h3>
              <p class="skillCard__desc">${escapeHtml(skill.desc)}</p>
            </div>
          </article>
        `;
      })
      .join("");

    shownEl.textContent = String(visible.length);
    toggleBtn.textContent = expanded ? "Show Less" : "Show All";
    toggleBtn.hidden = SKILLS.length <= initialCount;
  }

  toggleBtn.addEventListener("click", () => {
    expanded = !expanded;
    paint();
  });

  paint();
}

/* ---------------------------
   Render de proyectos + filtros
---------------------------- */
function renderProjects() {
  const grid = $("#projectsGrid");
  const totalEl = $("#projectsTotal");
  const shownEl = $("#projectsShown");
  const toggleBtn = $("#projectsToggle");
  const tagRow = $("#tagRow");
  const clearBtn = $("#clearTags");
  const infoEl = $("#activeTagsInfo");

  if (!grid || !totalEl || !shownEl || !toggleBtn || !tagRow || !clearBtn || !infoEl) return;

  const initialCount = 4;
  let expanded = false;
  let activeTags = new Set();

  const allTags = uniq(PROJECTS.flatMap((project) => project.tags)).sort((a, b) => a.localeCompare(b));
  totalEl.textContent = String(PROJECTS.length);

  tagRow.innerHTML = allTags
    .map(
      (tag) => `
        <button class="tag" type="button" aria-pressed="false" data-tag="${escapeAttr(tag)}">
          ${escapeHtml(tag)}
        </button>
      `
    )
    .join("");

  function matchesTags(project) {
    if (activeTags.size === 0) return true;
    return Array.from(activeTags).every((tag) => project.tags.includes(tag));
  }

  function updateTagUI() {
    $all(".tag", tagRow).forEach((button) => {
      const tag = button.getAttribute("data-tag");
      const isPressed = activeTags.has(tag);
      button.setAttribute("aria-pressed", String(isPressed));
    });

    infoEl.textContent = activeTags.size === 0 ? "No filters" : `Filtros activos: ${Array.from(activeTags).join(", ")}`;
  }

  function paint() {
    const filtered = PROJECTS.filter(matchesTags);
    const visible = expanded ? filtered : filtered.slice(0, initialCount);

    grid.innerHTML = visible.map((project) => projectCardHtml(project)).join("");
    shownEl.textContent = String(visible.length);
    toggleBtn.textContent = expanded ? "Show Less" : "Show All";
    toggleBtn.hidden = filtered.length <= initialCount;
  }

  $all(".tag", tagRow).forEach((button) => {
    button.addEventListener("click", () => {
      const tag = button.getAttribute("data-tag");

      if (activeTags.has(tag)) {
        activeTags.delete(tag);
      } else {
        activeTags.add(tag);
      }

      expanded = false;
      updateTagUI();
      paint();
    });
  });

  clearBtn.addEventListener("click", () => {
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
  const tags = p.tags
    .slice(0, 6)
    .map(t => `<span class="metaChip">${escapeHtml(t)}</span>`)
    .join("");

  const githubUrl = p.links?.github || "#";

  return `
    <a
      class="projectCard projectCard--clickable"
      href="${escapeAttr(githubUrl)}"
      target="_blank"
      rel="noreferrer"
      aria-label="Abrir repositorio de ${escapeAttr(p.title)}"
    >
      <div class="projectCard__cover">
        ${
          p.image
            ? `<img
                class="projectCard__image"
                src="${escapeAttr(p.image)}"
                alt="${escapeAttr(p.imageAlt || p.title)}"
                loading="lazy"
                decoding="async"
              />`
            : ""
        }
        <span class="projectCard__coverLabel">${escapeHtml(p.status)}</span>
      </div>

      <div class="projectCard__body">
        <p class="projectCard__subtitle">${escapeHtml(p.subtitle || "")}</p>
        <h3 class="projectCard__title">${escapeHtml(p.title)}</h3>
        <p class="projectCard__desc">${escapeHtml(p.desc)}</p>

        <div class="projectCard__meta">
          ${tags}
        </div>

        <div class="projectCard__actions">
          <span class="actionLink">GitHub</span>
        </div>
      </div>
    </a>
  `;
}

/* ---------------------------
   Formulario de contacto
---------------------------- */
function initContactForm() {
  const form = $("#contactForm");

  if (!form) return;

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const formData = new FormData(form);
    const name = formData.get("name");
    const email = formData.get("email");
    const message = formData.get("message");

    const subject = encodeURIComponent("Contacto desde portfolio web");
    const body = encodeURIComponent(`Hola Michael,\n\n${message}\n\nNombre: ${name}\nEmail: ${email}`);

    window.location.href = `mailto:${PROFILE.email}?subject=${subject}&body=${body}`;
  });
}

/* ---------------------------
   Año del footer
---------------------------- */
function initYear() {
  const year = $("#year");
  if (year) year.textContent = String(new Date().getFullYear());
}

/* ---------------------------
   Inicialización
---------------------------- */
document.addEventListener("DOMContentLoaded", () => {
  initTheme();
  initNav();
  initPrint();
  renderSkills();
  renderProjects();
  initContactForm();
  initYear();
});
