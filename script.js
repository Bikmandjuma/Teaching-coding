/* ============================================================
   DATA — the full 14-day curriculum
   ============================================================ */
const DAYS = [
  {
    week: 1, index: 1, tag: "intro", title: "Introduction to HTML",
    project: "Your first webpage",
    theory: ["How the internet works: client vs. server", "Browsers, websites, domains & hosting", "What HTML is, and a short history of its versions"],
    lab: ["Build a personal “Hello World” page", "Break down <!DOCTYPE html>, <html>, <head>, <body>"],
    homework: ["Build an “About Me” page"]
  },
  {
    week: 1, index: 2, tag: "text", title: "Text & Styling",
    project: "Personal profile page",
    theory: ["Attributes, headings & paragraphs", "Line breaks and horizontal rules", "Inline styles, colors & comments"],
    lab: ["Write a short biography page"],
    homework: ["Profile page using headings, paragraphs, colors & comments"]
  },
  {
    week: 1, index: 3, tag: "format", title: "Formatting & Special Characters",
    project: "Blog article",
    theory: ["Text formatting tags & quotations", "Computer code elements: <code>, <pre>, <kbd>", "Entities, symbols, emojis & character sets"],
    lab: ["Publish a short technical article"],
    homework: ["Write a programming tutorial page"]
  },
  {
    week: 1, index: 4, tag: "nav", title: "Navigation & Images",
    project: "Photo gallery",
    theory: ["Hyperlinks & buttons", "Images and relative vs. absolute file paths", "Page titles & favicons"],
    lab: ["Build a photo gallery"],
    homework: ["Create a travel website homepage"]
  },
  {
    week: 1, index: 5, tag: "data", title: "Lists & Tables",
    project: "Timetable & restaurant menu",
    theory: ["Ordered, unordered & description lists", "Tables, rowspan & colspan", "Block vs. inline elements"],
    lab: ["Student timetable", "Product catalog"],
    homework: ["Restaurant menu"]
  },
  {
    week: 1, index: 6, tag: "layout", title: "Layout",
    project: "Company homepage",
    theory: ["Div, classes & IDs", "Structuring the <head>", "Responsive HTML basics"],
    lab: ["Build a company homepage"],
    homework: ["School website homepage"]
  },
  {
    week: 1, index: 7, tag: "review", title: "Review & Mini Project",
    project: "Multi-page personal website",
    theory: ["Full week 1 revision", "Quiz on tags & structure"],
    lab: ["Coding challenge"],
    homework: ["Portfolio site: nav, about, skills, gallery, contact"]
  },
  {
    week: 2, index: 8, tag: "form", title: "Forms",
    project: "Contact form",
    theory: ["<form>, labels, textarea, select", "Buttons, fieldset & legend"],
    lab: ["Build a working contact form"],
    homework: ["Refine layout & labelling of the form"]
  },
  {
    week: 2, index: 9, tag: "input", title: "Advanced Forms",
    project: "Student registration form",
    theory: ["Every input type", "Validation: required, pattern, min/max", "Placeholder, readonly & disabled"],
    lab: ["Student registration system"],
    homework: ["Add full client-side validation"]
  },
  {
    week: 2, index: 10, tag: "media", title: "Multimedia",
    project: "Multimedia website",
    theory: ["Iframes", "Audio & video elements", "YouTube embedding, plug-ins in context"],
    lab: ["Build a multimedia learning page"],
    homework: ["Add embedded audio + video to a page"]
  },
  {
    week: 2, index: 11, tag: "semantic", title: "Semantic HTML",
    project: "News website",
    theory: ["Semantic elements & why they matter", "Accessibility fundamentals", "HTML style guide, HTML vs. XHTML"],
    lab: ["Build a semantic news layout"],
    homework: ["Rebuild an old page using semantic tags"]
  },
  {
    week: 2, index: 12, tag: "graphics", title: "Graphics",
    project: "Interactive drawing page",
    theory: ["Canvas basics", "Inline SVG", "JavaScript & CSS inside HTML"],
    lab: ["Drawing & interactive demo page"],
    homework: ["Extend the canvas demo with new shapes"]
  },
  {
    week: 2, index: 13, tag: "api", title: "HTML5 APIs",
    project: "HTML5 feature showcase",
    theory: ["Web APIs overview & geolocation", "Drag & drop, web storage", "Web workers & server-sent events (concept)"],
    lab: ["Build an HTML5 demo website"],
    homework: ["Add one more API to the showcase"]
  },
  {
    week: 2, index: 14, tag: "final", title: "Final Review & Capstone",
    project: "Complete business website",
    theory: ["40 multiple-choice + 20 short-answer written quiz"],
    lab: ["Practical exam: home, about, services, portfolio, blog, contact"],
    homework: ["Present the finished business website"]
  }
];

const HOMEWORK_LIST = [
  "Personal profile","Biography page","Recipe website","Photo gallery","School timetable",
  "Restaurant menu","Company homepage","Portfolio website","Contact form","Registration form",
  "News website","Multimedia page","HTML5 feature demo","Final business website"
];

/* ============================================================
   HERO — typed doctype animation
   ============================================================ */
function typeHero(){
  const el = document.getElementById("heroCode");
  const lines = [
    [["cmt","<!-- day 01, line 01 -->"]],
    [["br","&lt;"],["t","!DOCTYPE"],["br"," "],["a","html"],["br","&gt;"]],
    [["br","&lt;"],["t","html"],["br"," "],["a","lang"],["br","="],["s",'"en"'],["br","&gt;"]],
    [["br","&nbsp;&nbsp;&lt;"],["t","head"],["br","&gt;"]],
    [["br","&nbsp;&nbsp;&nbsp;&nbsp;&lt;"],["t","title"],["br","&gt;"],["s","HTML Foundations"],["br","&lt;/"],["t","title"],["br","&gt;"]],
    [["br","&nbsp;&nbsp;&lt;/"],["t","head"],["br","&gt;"]],
    [["br","&nbsp;&nbsp;&lt;"],["t","body"],["br"," "],["a","class"],["br","="],["s",'"fourteen-days"'],["br","&gt;"]]
  ];

  el.innerHTML = "";
  let li = 0;

  function nextLine(){
    if (li >= lines.length){
      el.innerHTML += `<span class="cursor"></span>`;
      return;
    }
    const row = document.createElement("div");
    row.style.opacity = "0";
    row.style.transition = "opacity .3s ease";
    el.appendChild(row);

    const parts = lines[li];
    let html = "";
    parts.forEach(([cls, text]) => {
      if (text === undefined){ return; }
      html += cls === "br" ? `<span class="br">${text}</span>` : `<span class="${cls}">${text}</span>`;
    });
    row.innerHTML = html;
    requestAnimationFrame(() => row.style.opacity = "1");

    li++;
    setTimeout(nextLine, 260);
  }
  nextLine();
}

/* ============================================================
   DAY MARKUP TAG STRING — e.g. <day n="01" title="Introduction">
   ============================================================ */
function tagMarkup(day){
  const n = String(day.index).padStart(2,"0");
  return `<span class="br">&lt;</span><span class="name">day</span> <span class="attrname">n</span><span class="br">=</span><span class="attrval">"${n}"</span> <span class="attrname">topic</span><span class="br">=</span><span class="attrval">"${day.tag}"</span><span class="br">&gt;</span>`;
}

/* ============================================================
   RENDER DAYS
   ============================================================ */
const daysContainer = document.getElementById("daysContainer");
const weekTitle = document.getElementById("weekTitle");
const weekSub = document.getElementById("weekSub");
const openedDays = new Set();

const WEEK_META = {
  1: { title: "Week 1 — HTML Fundamentals", sub: "Structure, text, media, and layout the vocabulary you'll use every day after this." },
  2: { title: "Week 2 — Intermediate & Advanced HTML", sub: "Forms, multimedia, semantics, graphics and browser APIs then the capstone." }
};

function renderWeek(week){
  weekTitle.textContent = WEEK_META[week].title;
  weekSub.textContent = WEEK_META[week].sub;
  daysContainer.innerHTML = "";

  DAYS.filter(d => d.week === week).forEach((day, i) => {
    const card = document.createElement("article");
    card.className = "day";
    card.style.transitionDelay = `${i * 40}ms`;

    card.innerHTML = `
      <button class="day-head" aria-expanded="false">
        <svg class="day-chevron" viewBox="0 0 20 20"><path d="M7 4l7 6-7 6" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg>
        <span class="day-index">D${String(day.index).padStart(2,"0")}</span>
        <span class="day-tag">
          <span class="markup">${tagMarkup(day)}</span>
          <span class="day-title-human">${day.title}</span>
        </span>
        <span class="day-project">${day.project}</span>
      </button>
      <div class="day-body">
        <div class="day-body-inner">
          <div class="day-content">
            <div class="content-block theory">
              <h4>Theory</h4>
              <ul>${day.theory.map(t => `<li>${t}</li>`).join("")}</ul>
            </div>
            <div class="content-block lab">
              <h4>Live coding / lab</h4>
              <ul>${day.lab.map(t => `<li>${t}</li>`).join("")}</ul>
            </div>
            <div class="content-block hw">
              <h4>Homework</h4>
              <ul>${day.homework.map(t => `<li>${t}</li>`).join("")}</ul>
            </div>
          </div>
        </div>
      </div>
    `;

    const head = card.querySelector(".day-head");
    head.addEventListener("click", () => {
      const isOpen = card.classList.toggle("is-open");
      head.setAttribute("aria-expanded", String(isOpen));
      if (isOpen){
        openedDays.add(day.index);
        updateProgress();
      }
    });

    daysContainer.appendChild(card);
  });

  observeDays();
}

function updateProgress(){
  document.getElementById("progressLabel").textContent = `${openedDays.size} / 14 days opened`;
  document.getElementById("clock").textContent = `DAY ${String(Math.max(...openedDays, 0)).padStart(2,"0")} / 14`;
}

function observeDays(){
  const cards = document.querySelectorAll(".day");
  const io = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting){
        entry.target.classList.add("is-visible");
        io.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });
  cards.forEach(c => io.observe(c));
}

/* ============================================================
   TAB SWITCHING
   ============================================================ */
document.querySelectorAll(".tab").forEach(tab => {
  tab.addEventListener("click", () => {
    document.querySelectorAll(".tab").forEach(t => {
      t.classList.remove("is-active");
      t.setAttribute("aria-selected","false");
    });
    tab.classList.add("is-active");
    tab.setAttribute("aria-selected","true");
    renderWeek(Number(tab.dataset.week));
  });
});

/* ============================================================
   HOMEWORK STRIP
   ============================================================ */
const hwGrid = document.getElementById("hwGrid");
HOMEWORK_LIST.forEach(item => {
  const li = document.createElement("li");
  li.textContent = item;
  hwGrid.appendChild(li);
});

/* ============================================================
   INIT
   ============================================================ */
typeHero();
renderWeek(1);
updateProgress();
