let currentLang = "en";
let currentCurrency = "€";

function changeLanguage(lang) {
  currentLang = lang; // Actualizamos la variable global
  const t = i18n[lang] || i18n["en"];

  // Títulos y Textos principales
  document.getElementById("hero-title").innerHTML = t.hero;
  document.getElementById("label-elec").innerText = t.elec;
  document.getElementById("label-today").innerText = t.today;
  document.getElementById("label-annual").innerText = t.annual;
  document.getElementById("label-health").innerText = t.health;
  document.getElementById("label-exercise").innerText = t.exercise;
  document.getElementById("btn-share-money").innerText = t.share_m;
  document.getElementById("btn-share-health").innerText = t.share_h;
  document.getElementById("guide-title").innerText = t.guide;
  document.getElementById("faq-title").innerText = t.faq;
  document.getElementById("seo-title").innerText = t.seo_t;
  document.getElementById("seo-p1").innerText = t.p1;
  document.getElementById("seo-p2").innerText = t.p2;

  // Traducción del menú de cabecera (Nav)
  document.getElementById("nav-calc").innerText = t.nav_c;
  document.getElementById("nav-guide").innerText = t.nav_g;
  document.getElementById("nav-faq").innerText = t.nav_f;

  // Traducción de los botones del Footer (Los que te daban guerra)
  document.getElementById("btn-f-legal").innerText = t.f_legal;
  document.getElementById("btn-f-priv").innerText = t.f_priv;
  document.getElementById("btn-f-cook").innerText = t.f_cook;
  if (document.getElementById("cookie-text-val")) {
    document.getElementById("cookie-text-val").innerText = t.cookie_txt;
    document.getElementById("btn-cookie-accept").innerText = t.btn_acc;
    document.getElementById("btn-cookie-close").innerText = t.btn_close;
  }

  // Actualizar Selector de Alimentos (El desplegable de la calculadora)
  const sel = document.getElementById("alimento-principal");
  sel.innerHTML = Object.keys(foodData)
    .map(
      (k) =>
        `<option value="${k}">${foodData[k].icono} ${
          foodData[k].nombres[lang] || foodData[k].nombres["es"]
        }</option>`
    )
    .join("");

  // Actualizar Guía Visual (Las tarjetitas de abajo)
  document.getElementById("guia-full").innerHTML = Object.keys(foodData)
    .map(
      (k) => `
        <div onclick="seleccionarGuia('${k}')" class="p-4 bg-white rounded-3xl text-center border border-slate-100 hover:border-orange-400 transition-all cursor-pointer shadow-sm">
            <p class="text-2xl mb-2">${foodData[k].icono}</p>
            <p class="text-[9px] font-black text-slate-400 uppercase mb-2">${
              foodData[k].nombres[lang] || foodData[k].nombres["es"]
            }</p>
            <p class="text-[10px] font-bold text-slate-800">${
              foodData[k].tiempo
            }' - ${formatearTemp(foodData[k].temp)}</p>
        </div>`
    )
    .join("");

  // Actualizar FAQ
  const fData = faqData[lang] || faqData["es"];
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

  // Inyectar artículos SEO
  const articles = articlesData[lang] || articlesData["es"];
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
  // 1. Pillamos el precio de la luz
  const inputElec = document.getElementById("elec-price");
  const elecPrice = inputElec ? parseFloat(inputElec.value) || 0.2 : 0.2;

  // 2. Pillamos el alimento seleccionado
  const select = document.getElementById("alimento-principal");
  if (!select || !select.value) return;

  const foodKey = select.value;
  const food = foodData[foodKey];
  if (!food) return;

  // 3. CONVERSIÓN Y CÁLCULOS
  let tiempoHorno = parseFloat(food.trad) || 0;
  if (tiempoHorno > 120) tiempoHorno = tiempoHorno / 10;
  let tiempoAir = parseFloat(food.tiempo) || 0;
  const ahorroGrasa = parseFloat(food.air) || 0;

  const consumoHorno = 2.2 * (tiempoHorno / 60) * 0.6;
  const consumoAir = 1.5 * (tiempoAir / 60) * 0.7;

  const ahorroHoy = Math.max(
    0,
    consumoHorno * elecPrice - consumoAir * elecPrice
  );
  const ahorroAnual = ahorroHoy * 104;
  const ahorroCal = ahorroGrasa * 9 + 100;

  // 4. TRADUCCIONES RÁPIDAS PARA EL TAG
  const dict = {
    es: { horno: "HORNO", airfryer: "AIRFRYER", temp: "TEMP" },
    en: { horno: "OVEN", airfryer: "AIR FRYER", temp: "TEMP" },
    fr: { horno: "FOUR", airfryer: "FRITEUSE", temp: "TEMP" },
    it: { horno: "FORNO", airfryer: "FRIGGITRICE", temp: "TEMP" },
    de: { horno: "OFEN", airfryer: "HEISSLUFTFRITTEUSE", temp: "TEMP" },
  };
  const t = dict[currentLang] || dict["es"];

  // 5. INYECCIÓN DE ESTADÍSTICAS
  const hHoy = document.getElementById("ahorro-hoy-text");
  const hAno = document.getElementById("ahorro-ano-text");
  const hCal = document.getElementById("calorias-text");
  const hEjer = document.getElementById("ejercicio-text");

  if (hHoy) hHoy.innerText = ahorroHoy.toFixed(2) + currentCurrency;
  if (hAno) hAno.innerText = ahorroAnual.toFixed(0) + currentCurrency;
  if (hCal) hCal.innerText = "-" + Math.round(ahorroCal);
  if (hEjer) hEjer.innerText = Math.round(ahorroCal / 8) + " min";

  // 6. RELLENAR EL TIEMPO-TAG TRADUCIDO
  const tiempoTag = document.getElementById("tiempo-tag");
  if (tiempoTag) {
    const temperaturaLabel =
      typeof formatearTemp === "function"
        ? formatearTemp(food.temp)
        : food.temp;
    tiempoTag.innerHTML = `
          <span class="font-black">⚡ ${Math.round(tiempoHorno)}min ${
      t.horno
    } vs ${Math.round(tiempoAir)}min ${t.airfryer}</span>
          <br>
          <span class="text-[10px] text-orange-400 font-bold uppercase">🔥 ${
            t.temp
          }: ${temperaturaLabel}</span>
      `;
  }

  // 7. ACTUALIZAR EL CONSEJO (TIP) Y NOMBRE
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
  const t = i18n[lang] || i18n["es"];
  const key = document.getElementById("alimento-principal").value;
  const f = foodData[key].nombres[lang] || foodData[key].nombres["es"];

  // Limpiamos el dinero (quitando €) y las calorías (quitando el menos)
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
      ? t.msg_m.replace("{X}", valX).replace("{F}", f)
      : t.msg_h.replace("{X}", valX).replace("{F}", f).replace("{Y}", valY);

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
  // Pillamos el idioma actual y el objeto de traducciones i18n
  const t = i18n[currentLang] || i18n["es"];

  const modalTitle = document.getElementById("modal-title");
  const modalBody = document.getElementById("modal-body");
  const modalContainer = document.getElementById("modal-container");

  if (modalTitle && modalBody && modalContainer) {
    // Mapeo rápido: si entra 'legal' busca 'f_legal' y 'legal_content' en i18n
    const keys = {
      legal: { title: "f_legal", body: "legal_content" },
      privacidad: { title: "f_priv", body: "priv_content" },
      cookies: { title: "f_cook", body: "cook_content" },
    };

    const mapping = keys[tipo];

    if (mapping) {
      modalTitle.innerText = t[mapping.title];
      modalBody.innerText = t[mapping.body];
      modalContainer.classList.remove("hidden");
      modalContainer.classList.add("flex"); // Para centrarlo con Tailwind
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
  // 1. Si no viene countryCode (como en tu onload), lo deducimos
  if (!countryCode) {
    const autoCountry = { es: "es", en: "us", fr: "fr", it: "it", de: "de" };
    countryCode = autoCountry[lang] || "us";
  }

  currentLang = lang;
  currentCurrency = currencies[countryCode] || "€";

  const options = document.getElementById("lang-options");
  if (options) options.classList.add("hidden");

  const langSelected = document.getElementById("lang-selected");
  if (langSelected) {
    langSelected.textContent = "";

    const img = document.createElement("img");
    // Usamos el countryCode que ya hemos asegurado que existe
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

  // 4. AQUÍ ESTÁ EL PELIGRO:
  // Asegúrate de que changeLanguage(lang) NO toque el id "lang-selected"
  changeLanguage(lang);
}

// Cerrar el menú si haces clic fuera
window.onclick = function (event) {
  if (!event.target.closest("#custom-select-container")) {
    document.getElementById("lang-options").classList.add("hidden");
  }
};

// Al cargar la ventana, detectamos el idioma del "cliente"
window.onload = function () {
  let browserLang = (navigator.language || navigator.userLanguage)
    .substring(0, 2)
    .toLowerCase();
  const supportedLangs = ["es", "en", "fr", "it", "de"];
  const targetLang = supportedLangs.includes(browserLang) ? browserLang : "en";

  const initialCountry = { es: "es", en: "us", fr: "fr", it: "it", de: "de" };

  // Iniciamos la web
  selectLang(targetLang, initialCountry[targetLang]);

  setTimeout(() => {
    actualizarTodo();
  }, 100);

  // 1. Cargamos iconos
  if (typeof lucide !== "undefined") lucide.createIcons();

  // 2. Arrancamos el idioma por defecto
  if (typeof selectLang === "function") selectLang("es");

  // 3. ¡DISPARAMOS EL BANNER!
  inicializarCookies();
};

function formatearTemp(tempCelsius) {
  // Quitamos el "°C" y lo pasamos a número
  const celsius = parseFloat(tempCelsius);

  if (currentLang === "en") {
    // Fórmula: (C * 1.8) + 32
    const fahrenheit = Math.round(celsius * 1.8 + 32);
    return fahrenheit + "°F";
  }

  return celsius + "°C";
}

// Esta función es la que decide si se muestra o no
function inicializarCookies() {
  const banner = document.getElementById("cookie-banner");
  const yaAcepto = localStorage.getItem("cookiesAceptadas");

  if (banner && !yaAcepto) {
    setTimeout(() => {
      banner.classList.remove("translate-y-full");
    }, 1000);
  }
}

// Esta es la que llamas desde el botón "Aceptar" del HTML
function aceptarCookies() {
  localStorage.setItem("cookiesAceptadas", "true");
  const banner = document.getElementById("cookie-banner");
  if (banner) banner.classList.add("translate-y-full");
}

// Esta es la que llamas desde el botón "Cerrar" del HTML
function cerrarBanner() {
  const banner = document.getElementById("cookie-banner");
  if (banner) banner.classList.add("translate-y-full");
}
