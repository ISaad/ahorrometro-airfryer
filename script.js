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
        <div onclick="seleccionarGuia('${k}')" class="guide-card">
            <p class="guide-icon">${FOOD_DATA[k].icono}</p>
            <p class="guide-name">${FOOD_DATA[k].nombres[lang] || FOOD_DATA[k].nombres["es"]
        }</p>
            <p class="guide-time">${FOOD_DATA[k].air_min
        }' - ${formatearTemp(FOOD_DATA[k].temp)}</p>
        </div>`
    )
    .join("");

  // Update FAQ
  const fData = FAQ_DATA[lang] || FAQ_DATA["es"];
  document.getElementById("faq-container").innerHTML = fData
    .map(
      (f) => `
        <details class="faq-item">
            <summary class="faq-summary">${f.q}
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="faq-icon"><path d="M5 12h14"/><path d="M12 5v14"/></svg>
            </summary>
            <p class="faq-answer">${f.a}</p>
        </details>`
    )
    .join("");

  actualizarTodo();
  actualizarTodo();
  // if (window.lucide) lucide.createIcons(); // Removed Lucide usage

  // Inject SEO Articles
  const articles = ARTICLES_DATA[lang] || ARTICLES_DATA["es"];
  const container = document.getElementById("articles-section");
  if (container) {
    container.innerHTML = articles
      .map(
        (art) => `
            <div class="article-card">
                <h3 class="text-lg font-black" style="color: var(--slate-800); margin-bottom: 0.75rem;">${art.t}</h3>
                <p style="color: var(--slate-500); font-size: 0.875rem; line-height: 1.6;">${art.p}</p>
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
  // Using explicit fields from new dataset
  const tiempoHorno = parseFloat(food.trad_min) || 0;
  const tiempoAir = parseFloat(food.air_min) || 0;

  // Power consumption (kW) = Watts / 1000 * Hours
  // Oven: 3000W (3kW) * 0.6 cycling factor
  // Airfryer: 1500W (1.5kW) * 0.7 cycling factor

  const ovenPowerKw = (POWER_DATA.oven / 1000) || 3.0;
  const airfryerPowerKw = (POWER_DATA.airfryer / 1000) || 1.5;

  const consumoHorno = ovenPowerKw * (tiempoHorno / 60) * 0.6;
  const consumoAir = airfryerPowerKw * (tiempoAir / 60) * 0.7;

  const ahorroHoy = Math.max(
    0,
    consumoHorno * elecPrice - consumoAir * elecPrice
  );

  const ahorroAnual = ahorroHoy * 104; // Assumes 2 uses per week per year

  // Calculate calorie savings
  const ahorroCal = Math.max(0, food.trad_cal - food.air_cal);

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
        <div class="comparison-badge">
            <div class="badge-item">
                <span class="text-orange-500">⚡</span>
                <span>${Math.round(tiempoHorno)}min ${t.horno} <span style="color: var(--slate-300); margin: 0 0.25rem;">/</span> <span class="badge-highlight">${Math.round(tiempoAir)}min ${t.airfryer}</span></span>
            </div>
            <div class="badge-separator"></div>
            <div class="badge-item">
                <span class="text-orange-500">🔥</span>
                <span>${t.temp}: <span class="badge-highlight">${temperaturaLabel}</span></span>
            </div>
        </div>
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
      // The .modal class is already present in HTML, no need to add it, but ensuring display flex is active via CSS
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
    let displayLang = lang.toUpperCase();
    if (lang === 'en') {
      displayLang += (countryCode === 'us' ? ' (US)' : ' (UK)');
    }
    span.textContent = displayLang;

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
  // 1. Load icons
  // if (typeof lucide !== "undefined") lucide.createIcons();

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
      banner.classList.add("show");
    }, 1000);
  }
}

// Called from "Accept" button in HTML
function aceptarCookies() {
  localStorage.setItem("cookiesAceptadas", "true");
  const banner = document.getElementById("cookie-banner");
  if (banner) banner.classList.remove("show");
}

// Called from "Close" button in HTML
function cerrarBanner() {
  const banner = document.getElementById("cookie-banner");
  if (banner) banner.classList.remove("show");
}
