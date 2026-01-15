let currentLang = "en";
let currentCurrency = "€";

function changeLanguage(lang) {
  currentLang = lang; // Update global variable
  const t = TRANSLATIONS[lang] || TRANSLATIONS["en"];

  // Hero Titles and Texts
  document.getElementById("hero-title").innerHTML = t.HERO_TITLE;
  document.getElementById("label-elec").innerText = t.LABEL_ELECTRICITY;
  document.getElementById("label-today").innerText = t.LABEL_TODAY;
  document.getElementById("label-annual").innerText = t.LABEL_ANNUAL;
  document.getElementById("label-health").innerText = t.LABEL_HEALTH;
  document.getElementById("label-exercise").innerText = t.LABEL_EXERCISE;
  document.getElementById("btn-share-money").innerText = t.BUTTON_SHARE_MONEY;
  document.getElementById("btn-share-health").innerText = t.BUTTON_SHARE_HEALTH;
  document.getElementById("guide-title").innerText = t.TITLE_GUIDE;
  document.getElementById("faq-title").innerText = t.TITLE_FAQ;
  document.getElementById("seo-title").innerText = t.TITLE_SEO;
  document.getElementById("seo-p1").innerText = t.SEO_PARAGRAPH_1;
  document.getElementById("seo-p2").innerText = t.SEO_PARAGRAPH_2;

  // Header Menu Translations (Nav)
  document.getElementById("nav-calc").innerText = t.NAV_CALCULATOR;
  document.getElementById("nav-guide").innerText = t.NAV_GUIDE;
  document.getElementById("nav-faq").innerText = t.NAV_FAQ;

  // Footer Button Translations
  document.getElementById("btn-f-legal").innerText = t.FOOTER_LEGAL;
  document.getElementById("btn-f-priv").innerText = t.FOOTER_PRIVACY;
  document.getElementById("btn-f-cook").innerText = t.FOOTER_COOKIES;
  if (document.getElementById("cookie-text-val")) {
    document.getElementById("cookie-text-val").innerText = t.COOKIE_TEXT;
    document.getElementById("btn-cookie-accept").innerText = t.BUTTON_ACCEPT;
    document.getElementById("btn-cookie-close").innerText = t.BUTTON_CLOSE;
  }

  // Update Food Selector (Calculator Dropdown)
  const sel = document.getElementById("alimento-principal");
  sel.innerHTML = Object.keys(FOOD_DATA)
    .map(
      (k) =>
        `<option value="${k}">${FOOD_DATA[k].icono} ${FOOD_DATA[k].nombres[lang] || FOOD_DATA[k].nombres["es"]
        }</option>`
    )
    .join("");

  // Update Visual Guide (Bottom Cards)
  document.getElementById("guia-full").innerHTML = Object.keys(FOOD_DATA)
    .map(
      (k) => `
        <div onclick="seleccionarGuia('${k}')" class="p-4 bg-white rounded-3xl text-center border border-slate-100 hover:border-orange-400 transition-all cursor-pointer shadow-sm">
            <p class="text-2xl mb-2">${FOOD_DATA[k].icono}</p>
            <p class="text-[9px] font-black text-slate-400 uppercase mb-2">${FOOD_DATA[k].nombres[lang] || FOOD_DATA[k].nombres["es"]
        }</p>
            <p class="text-[10px] font-bold text-slate-800">${FOOD_DATA[k].tiempo
        }' - ${formatearTemp(FOOD_DATA[k].temp)}</p>
        </div>`
    )
    .join("");

  // Update FAQ
  const fData = FAQ_DATA[lang] || FAQ_DATA["es"];
  document.getElementById("faq-container").innerHTML = fData
    .map(
      (f) => `
        <details class="group p-4 border-b border-slate-100 cursor-pointer">
            <summary class="flex justify-between items-center font-bold text-slate-700">${f.q}<i data-lucide="plus" class="w-5 h-5 text-orange-500 group-open:rotate-45 transition-transform"></i></summary>
            <p class="mt-4 text-slate-500 text-sm italic leading-relaxed">${f.a}</p>
        </details>`
    )
    .join("");

  actualizarTodo();
  if (window.lucide) lucide.createIcons();

  // Inject SEO Articles
  const articles = ARTICLES_DATA[lang] || ARTICLES_DATA["es"];
  const container = document.getElementById("articles-section");
  if (container) {
    container.innerHTML = articles
      .map(
        (art) => `
            <div class="bg-white p-6 rounded-3xl border border-slate-100 shadow-sm">
                <h3 class="text-lg font-black text-slate-800 mb-3">${art.t}</h3>
                <p class="text-slate-500 text-sm leading-relaxed">${art.p}</p>
            </div>
        `
      )
      .join("");
  }
}

function actualizarTodo() {
  // 1. Get electricity price
  const inputElec = document.getElementById("elec-price");
  const elecPrice = inputElec ? parseFloat(inputElec.value) || 0.2 : 0.2;

  // 2. Get selected food item
  const select = document.getElementById("alimento-principal");
  if (!select || !select.value) return;

  const foodKey = select.value;
  const food = FOOD_DATA[foodKey];
  if (!food) return;

  // 3. CONVERSION AND CALCULATIONS
  let tiempoHorno = parseFloat(food.trad) || 0;
  // If food.trad is > 120 (likely calories instead of time), convert to minutes for calculation
  if (tiempoHorno > 120) tiempoHorno = tiempoHorno / 10;

  let tiempoAir = parseFloat(food.tiempo) || 0;
  const ahorroGrasa = parseFloat(food.air) || 0;

  // Increase oven power to 2.6 to reflect potential real savings
  // 0.6 factor accounts for thermostat cycling
  const consumoHorno = 2.6 * (tiempoHorno / 60) * 0.6;
  const consumoAir = 1.5 * (tiempoAir / 60) * 0.7;

  const ahorroHoy = Math.max(
    0,
    consumoHorno * elecPrice - consumoAir * elecPrice
  );

  const ahorroAnual = ahorroHoy * 104; // Assumes 2 uses per week per year

  // Adjust calorie calculation
  // If food.trad starts as calories (e.g. 450) and food.air as savings (e.g. 15):
  const ahorroCal = Math.max(0, parseFloat(food.trad) - ahorroGrasa);

  // 4. QUICK TRANSLATIONS FOR TAGS
  const t = DEVICE_NAMES[currentLang] || DEVICE_NAMES["es"];

  // 5. INJECT STATISTICS
  const hHoy = document.getElementById("ahorro-hoy-text");
  const hAno = document.getElementById("ahorro-ano-text");
  const hCal = document.getElementById("calorias-text");
  const hEjer = document.getElementById("ejercicio-text");

  if (hHoy) hHoy.innerText = ahorroHoy.toFixed(2) + currentCurrency;
  if (hAno) hAno.innerText = ahorroAnual.toFixed(0) + currentCurrency;
  if (hCal) hCal.innerText = "-" + Math.round(ahorroCal);
  if (hEjer) hEjer.innerText = Math.round(ahorroCal / 8) + " min";

  // 6. POPULATE TRANSLATED TIME TAG
  const tiempoTag = document.getElementById("tiempo-tag");
  if (tiempoTag) {
    const temperaturaLabel =
      typeof formatearTemp === "function"
        ? formatearTemp(food.temp)
        : food.temp;
    tiempoTag.innerHTML = `
          <span class="font-black">⚡ ${Math.round(tiempoHorno)}min ${t.horno
      } vs ${Math.round(tiempoAir)}min ${t.airfryer}</span>
          <br>
          <span class="text-[10px] text-orange-400 font-bold uppercase">🔥 ${t.temp
      }: ${temperaturaLabel}</span>
      `;
  }

  // 7. UPDATE TIP AND NAME
  const tituloTip = document.getElementById("nombre-comida-truco");
  const textoTip = document.getElementById("tip-texto");

  if (tituloTip) {
    tituloTip.innerText = food.nombres[currentLang] || food.nombres["es"];
  }
  if (textoTip) {
    const consejo = food.tips[currentLang] || food.tips["es"] || "¡Disfruta!";
    textoTip.innerText = `"${consejo}"`;
  }
}

function compartir(tipo) {
  const lang = currentLang;
  const t = TRANSLATIONS[lang] || TRANSLATIONS["es"];
  const key = document.getElementById("alimento-principal").value;
  const f = FOOD_DATA[key].nombres[lang] || FOOD_DATA[key].nombres["es"];

  // Clean currency symbol and negative signs
  let valX =
    tipo === "dinero"
      ? document
        .getElementById("ahorro-hoy-text")
        .innerText.replace("€", "")
        .trim()
      : document
        .getElementById("calorias-text")
        .innerText.replace("-", "")
        .trim();

  const valY = document
    .getElementById("ejercicio-text")
    .innerText.split(" ")[0];

  let msg =
    tipo === "dinero"
      ? t.SHARE_MESSAGE_MONEY.replace("{X}", valX).replace("{F}", f)
      : t.SHARE_MESSAGE_HEALTH.replace("{X}", valX).replace("{F}", f).replace("{Y}", valY);

  window.open(
    `https://wa.me/?text=${encodeURIComponent(
      msg + " " + window.location.href
    )}`,
    "_blank"
  );
}

function seleccionarGuia(k) {
  document.getElementById("alimento-principal").value = k;
  actualizarTodo();
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function showLegal(tipo) {
  const t = TRANSLATIONS[currentLang] || TRANSLATIONS["es"];

  const modalTitle = document.getElementById("modal-title");
  const modalBody = document.getElementById("modal-body");
  const modalContainer = document.getElementById("modal-container");

  if (modalTitle && modalBody && modalContainer) {
    // Quick mapping
    const keys = {
      legal: { title: "FOOTER_LEGAL", body: "CONTENT_LEGAL" },
      privacidad: { title: "FOOTER_PRIVACY", body: "CONTENT_PRIVACY" },
      cookies: { title: "FOOTER_COOKIES", body: "CONTENT_COOKIES" },
    };

    const mapping = keys[tipo];

    if (mapping) {
      modalTitle.innerText = t[mapping.title];
      modalBody.innerText = t[mapping.body];
      modalContainer.classList.remove("hidden");
      modalContainer.classList.add("flex"); // Center with Tailwind
    }
  }
}
function closeLegal() {
  document.getElementById("modal-container").classList.add("hidden");
}

function toggleLangMenu() {
  document.getElementById("lang-options").classList.toggle("hidden");
}

window.onclick = function (event) {
  if (!event.target.closest("#custom-select-container")) {
    const menu = document.getElementById("lang-options");
    if (menu) menu.classList.add("hidden");
  }
};

function selectLang(lang, countryCode) {
  // 1. Deduce countryCode if missing
  if (!countryCode) {
    const autoCountry = { es: "es", en: "us", fr: "fr", it: "it", de: "de" };
    countryCode = autoCountry[lang] || "us";
  }

  currentLang = lang;
  currentCurrency = CURRENCIES[countryCode] || "€";

  const options = document.getElementById("lang-options");
  if (options) options.classList.add("hidden");

  const langSelected = document.getElementById("lang-selected");
  if (langSelected) {
    langSelected.textContent = "";

    const img = document.createElement("img");
    img.src = "https://flagcdn.com/w20/" + countryCode + ".png";
    img.style.width = "20px";
    img.style.height = "14px";
    img.className = "inline-block rounded-sm shadow-sm";
    img.alt = "";
    img.onerror = function () {
      this.style.display = "none";
    };

    const span = document.createElement("span");
    span.className = "font-bold ml-1";
    span.textContent = lang.toUpperCase();

    langSelected.appendChild(img);
    langSelected.appendChild(span);
  }

  // 4. Ensure changeLanguage DOES NOT touch "lang-selected" ID to avoid loops
  changeLanguage(lang);
}

// Close menu if clicking outside
window.onclick = function (event) {
  if (!event.target.closest("#custom-select-container")) {
    document.getElementById("lang-options").classList.add("hidden");
  }
};

// On window load, detect client language
window.onload = function () {
  let browserLang = (navigator.language || navigator.userLanguage)
    .substring(0, 2)
    .toLowerCase();
  const supportedLangs = ["es", "en", "fr", "it", "de"];
  const targetLang = supportedLangs.includes(browserLang) ? browserLang : "en";

  const initialCountry = { es: "es", en: "us", fr: "fr", it: "it", de: "de" };

  // Initialize website with detected language
  selectLang(targetLang, initialCountry[targetLang]);

  setTimeout(() => {
    actualizarTodo();
  }, 100);

  // 1. Load icons
  if (typeof lucide !== "undefined") lucide.createIcons();

  // 3. Trigger Cookie Banner
  inicializarCookies();
};

function formatearTemp(tempCelsius) {
  // Remove "°C" and convert to number
  const celsius = parseFloat(tempCelsius);

  if (currentLang === "en") {
    // Formula: (C * 1.8) + 32
    const fahrenheit = Math.round(celsius * 1.8 + 32);
    return fahrenheit + "°F";
  }

  return celsius + "°C";
}

// Logic to decide whether to show cookie banner
function inicializarCookies() {
  const banner = document.getElementById("cookie-banner");
  const yaAcepto = localStorage.getItem("cookiesAceptadas");

  if (banner && !yaAcepto) {
    setTimeout(() => {
      banner.classList.remove("translate-y-full");
    }, 1000);
  }
}

// Called from "Accept" button in HTML
function aceptarCookies() {
  localStorage.setItem("cookiesAceptadas", "true");
  const banner = document.getElementById("cookie-banner");
  if (banner) banner.classList.add("translate-y-full");
}

// Called from "Close" button in HTML
function cerrarBanner() {
  const banner = document.getElementById("cookie-banner");
  if (banner) banner.classList.add("translate-y-full");
}
